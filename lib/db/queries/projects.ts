import { prisma } from '@/lib/db/client'
import type { Project, Milestone, ProjectFile, Payment } from '@prisma/client'

export interface ProjectWithRelations extends Project {
  client: {
    id: string
    name: string
    email: string
  }
  manager: {
    id: string
    name: string
    email: string
  }
  milestones: Milestone[]
  files: ProjectFile[]
  payments: Payment[]
  _count: {
    milestones: number
    files: number
    changeRequests: number
    payments: number
  }
}

export async function getProjectsByClient(clientId: string) {
  return prisma.project.findMany({
    where: { clientId },
    include: {
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          milestones: true,
          files: true,
          changeRequests: true,
        },
      },
    },
    orderBy: { updatedAt: 'desc' },
  })
}

export async function getProjectById(
  projectId: string,
  userId: string,
  userRole: string
) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      client: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      milestones: {
        orderBy: { order: 'asc' },
      },
      files: {
        include: {
          uploadedBy: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
      payments: {
        orderBy: { dueDate: 'asc' },
      },
      changeRequests: {
        include: {
          client: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
      _count: {
        select: {
          milestones: true,
          files: true,
          changeRequests: true,
          payments: true,
        },
      },
    },
  })

  if (!project) {
    return null
  }

  // Check access control
  const isAdmin = ['ADMIN', 'EDITOR', 'VIEWER'].includes(userRole)
  const isClient = userRole === 'CLIENT' && project.clientId === userId

  if (!isAdmin && !isClient) {
    return null
  }

  return project
}

export async function getAllProjects(filters?: {
  status?: string
  clientId?: string
  managerId?: string
}) {
  return prisma.project.findMany({
    where: {
      ...(filters?.status && { status: filters.status }),
      ...(filters?.clientId && { clientId: filters.clientId }),
      ...(filters?.managerId && { managerId: filters.managerId }),
    },
    include: {
      client: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      _count: {
        select: {
          milestones: true,
          files: true,
          changeRequests: true,
        },
      },
    },
    orderBy: { updatedAt: 'desc' },
  })
}

export async function createProject(data: {
  name: string
  description?: string
  scope?: string
  status?: string
  progress?: number
  clientId: string
  managerId: string
  startDate?: Date
  expectedEndDate?: Date
}) {
  return prisma.project.create({
    data: {
      name: data.name,
      description: data.description || 'Project requirements to be added',
      scope: data.scope || 'To be defined based on requirements document',
      status: data.status,
      progress: data.progress,
      clientId: data.clientId,
      managerId: data.managerId,
      startDate: data.startDate,
      expectedEndDate: data.expectedEndDate,
    },
    include: {
      client: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  })
}

export async function updateProject(
  projectId: string,
  data: {
    name?: string
    description?: string
    scope?: string
    status?: string
    progress?: number
    managerId?: string
    startDate?: Date
    expectedEndDate?: Date
    actualEndDate?: Date
  }
) {
  return prisma.project.update({
    where: { id: projectId },
    data,
    include: {
      client: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      manager: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  })
}

export async function deleteProject(projectId: string) {
  return prisma.project.delete({
    where: { id: projectId },
  })
}

// Milestone queries
export async function createMilestone(data: {
  projectId: string
  title: string
  description: string
  status?: string
  order?: number
  expectedDate?: Date
  approvalStatus?: string
  approvedAt?: Date
  approvalComment?: string
}) {
  return prisma.milestone.create({
    data: data as never,
  })
}

export async function updateMilestone(
  milestoneId: string,
  data: {
    title?: string
    description?: string
    status?: string
    order?: number
    expectedDate?: Date
    completedDate?: Date
    approvalStatus?: string
    approvedAt?: Date
    approvalComment?: string
  }
) {
  return prisma.milestone.update({
    where: { id: milestoneId },
    data: data as never,
  })
}

export async function deleteMilestone(milestoneId: string) {
  return prisma.milestone.delete({
    where: { id: milestoneId },
  })
}

// Payment queries
export async function createPayment(data: {
  projectId: string
  amount: number
  currency?: string
  description: string
  status?: string
  dueDate: Date
  paidDate?: Date
  milestoneId?: string
  isUnlocked?: boolean
  stripeCheckoutUrl?: string
  stripePaymentIntentId?: string
}) {
  return prisma.payment.create({
    data: data as never,
  })
}

export async function updatePayment(
  paymentId: string,
  data: {
    amount?: number
    currency?: string
    description?: string
    status?: string
    dueDate?: Date
    paidDate?: Date
    milestoneId?: string | null
    isUnlocked?: boolean
    stripeCheckoutUrl?: string
    stripePaymentIntentId?: string
  }
) {
  return prisma.payment.update({
    where: { id: paymentId },
    data: data as never,
  })
}

export async function deletePayment(paymentId: string) {
  return prisma.payment.delete({
    where: { id: paymentId },
  })
}

type ApprovalType = 'DESIGN' | 'FEATURE' | 'BUDGET' | 'SCOPE_CHANGE' | 'MILESTONE'
type ApprovalStatus = 'PENDING' | 'APPROVED' | 'CHANGES_REQUESTED'

interface ApprovalCommentRecord {
  id: string
  authorId: string
  message: string
  createdAt: Date
}

interface ApprovalRecord {
  id: string
  projectId: string
  requestedById: string
  reviewedById?: string
  type: ApprovalType
  title: string
  description?: string
  milestoneId?: string
  status: ApprovalStatus
  decisionComment?: string
  reviewedAt?: Date
  createdAt: Date
  updatedAt: Date
  comments: ApprovalCommentRecord[]
}

interface LaunchChecklistRecord {
  projectId: string
  appStoreAssetsReady: boolean
  privacyPolicyVerified: boolean
  paymentGatewayTested: boolean
  analyticsIntegrated: boolean
  securityAuditCompleted: boolean
  notes?: string
  updatedById?: string
  createdAt: Date
  updatedAt: Date
}

// Temporary in-memory fallback until Approval/LaunchChecklist DB models are finalized.
const approvalsByProject = new Map<string, ApprovalRecord[]>()
const launchChecklistByProject = new Map<string, LaunchChecklistRecord>()

export async function getApprovalsByProject(projectId: string) {
  return approvalsByProject.get(projectId) ?? []
}

export async function createApproval(data: {
  projectId: string
  requestedById: string
  type: ApprovalType
  title: string
  description?: string
  milestoneId?: string
}) {
  const now = new Date()
  const approval: ApprovalRecord = {
    id: crypto.randomUUID(),
    projectId: data.projectId,
    requestedById: data.requestedById,
    type: data.type,
    title: data.title,
    description: data.description,
    milestoneId: data.milestoneId,
    status: 'PENDING',
    createdAt: now,
    updatedAt: now,
    comments: [],
  }

  const existing = approvalsByProject.get(data.projectId) ?? []
  approvalsByProject.set(data.projectId, [approval, ...existing])
  return approval
}

export async function reviewApproval(data: {
  approvalId: string
  status: 'APPROVED' | 'CHANGES_REQUESTED'
  reviewedById: string
  decisionComment?: string
}) {
  for (const [projectId, approvals] of approvalsByProject.entries()) {
    const index = approvals.findIndex((approval) => approval.id === data.approvalId)
    if (index === -1) continue

    const updatedApproval: ApprovalRecord = {
      ...approvals[index],
      status: data.status,
      reviewedById: data.reviewedById,
      decisionComment: data.decisionComment,
      reviewedAt: new Date(),
      updatedAt: new Date(),
    }

    const nextApprovals = [...approvals]
    nextApprovals[index] = updatedApproval
    approvalsByProject.set(projectId, nextApprovals)
    return updatedApproval
  }

  throw new Error('Approval not found')
}

export async function addApprovalComment(data: {
  approvalId: string
  authorId: string
  message: string
}) {
  for (const [projectId, approvals] of approvalsByProject.entries()) {
    const index = approvals.findIndex((approval) => approval.id === data.approvalId)
    if (index === -1) continue

    const comment: ApprovalCommentRecord = {
      id: crypto.randomUUID(),
      authorId: data.authorId,
      message: data.message,
      createdAt: new Date(),
    }

    const updatedApproval: ApprovalRecord = {
      ...approvals[index],
      comments: [...approvals[index].comments, comment],
      updatedAt: new Date(),
    }

    const nextApprovals = [...approvals]
    nextApprovals[index] = updatedApproval
    approvalsByProject.set(projectId, nextApprovals)
    return comment
  }

  throw new Error('Approval not found')
}

export async function unlockPaymentsForMilestoneApproval(
  projectId: string,
  milestoneId: string
) {
  return prisma.payment.updateMany({
    where: {
      projectId,
      milestoneId,
    } as never,
    data: {
      isUnlocked: true,
    } as never,
  })
}

export async function getOrCreateLaunchChecklist(projectId: string) {
  const existing = launchChecklistByProject.get(projectId)
  if (existing) return existing

  const now = new Date()
  const checklist: LaunchChecklistRecord = {
    projectId,
    appStoreAssetsReady: false,
    privacyPolicyVerified: false,
    paymentGatewayTested: false,
    analyticsIntegrated: false,
    securityAuditCompleted: false,
    notes: '',
    createdAt: now,
    updatedAt: now,
  }

  launchChecklistByProject.set(projectId, checklist)
  return checklist
}

export async function updateLaunchChecklist(data: {
  projectId: string
  updatedById: string
  appStoreAssetsReady?: boolean
  privacyPolicyVerified?: boolean
  paymentGatewayTested?: boolean
  analyticsIntegrated?: boolean
  securityAuditCompleted?: boolean
  notes?: string
}) {
  const current = await getOrCreateLaunchChecklist(data.projectId)
  const updatedChecklist: LaunchChecklistRecord = {
    ...current,
    appStoreAssetsReady: data.appStoreAssetsReady ?? current.appStoreAssetsReady,
    privacyPolicyVerified: data.privacyPolicyVerified ?? current.privacyPolicyVerified,
    paymentGatewayTested: data.paymentGatewayTested ?? current.paymentGatewayTested,
    analyticsIntegrated: data.analyticsIntegrated ?? current.analyticsIntegrated,
    securityAuditCompleted: data.securityAuditCompleted ?? current.securityAuditCompleted,
    notes: data.notes ?? current.notes,
    updatedById: data.updatedById,
    updatedAt: new Date(),
  }

  launchChecklistByProject.set(data.projectId, updatedChecklist)
  return updatedChecklist
}
