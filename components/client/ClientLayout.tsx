
"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  LayoutDashboard,
  CalendarPlus,
  MessageSquare,
  UserCircle,
  Plus,
  X,
  FilePlus,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  FolderKanban,
  CreditCard,
  LogOut
} from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { FiCamera } from "react-icons/fi";
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LucideIcon } from "lucide-react";
import BookMeetingPage from '@/app/client/(protected)/book-meeting/page';
import ClientProfilePage from '@/app/client/(protected)/profile/page';
import MessagesClient from '@/components/client/MessagesClient';

// --- Splash Screen ---
function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 800);
    const t2 = setTimeout(() => setPhase('exit'), 2600);
    const t3 = setTimeout(onDone, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: '#000',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.6s ease-out' : 'none',
      }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: '-100%',
              right: '-100%',
              animation: `scanLine 2.4s ease-in-out ${i * 0.18}s infinite`,
              opacity: phase === 'enter' ? 0 : 1,
              transition: 'opacity 0.5s ease',
            }}
          />
        ))}
        {/* Corner accent lines */}
        <div
          className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-blue-500 to-transparent"
          style={{
            transform: phase === 'enter' ? 'scaleX(0)' : 'scaleX(1)',
            transformOrigin: 'left',
            transition: 'transform 0.8s ease 0.3s',
          }}
        />
        <div
          className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-blue-500 to-transparent"
          style={{
            transform: phase === 'enter' ? 'scaleY(0)' : 'scaleY(1)',
            transformOrigin: 'top',
            transition: 'transform 0.8s ease 0.3s',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-blue-500 to-transparent"
          style={{
            transform: phase === 'enter' ? 'scaleX(0)' : 'scaleX(1)',
            transformOrigin: 'right',
            transition: 'transform 0.8s ease 0.5s',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-blue-500 to-transparent"
          style={{
            transform: phase === 'enter' ? 'scaleY(0)' : 'scaleY(1)',
            transformOrigin: 'bottom',
            transition: 'transform 0.8s ease 0.5s',
          }}
        />
      </div>

      {/* Logo */}
      {/* <div
        style={{
          transform: phase === 'enter' ? 'scale(0.6) translateY(20px)' : 'scale(1) translateY(0)',
          opacity: phase === 'enter' ? 0 : 1,
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        className="mb-8 relative"
      >
        {/* Glow behind logo 
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)',
            transform: 'scale(2)',
          }}
        />
        <Image
          src="/icon.png"
          alt="Meetech"
          width={120}
          height={120}
          className="relative z-10 h-24 w-auto"
          priority
        />
      </div> */}
      <div className="mb-8">
        <Image src="/icon.png" alt="Meetech" width={120} height={120} className="h-16 w-auto" />
      </div>
      {/* Text block */}
      <div
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(16px)' : 'translateY(0)',
          transition: 'all 0.6s ease 0.4s',
        }}
        className="text-center relative z-10"
      >
        <p className="text-white/80 text-xs font-bold uppercase tracking-[0.4em] mb-3">
          Welcome to
        </p>
        <h1 className="text-4xl font-black tracking-tight mb-1" style={{ color: '#fff', textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
          Client Portal
        </h1>
        {/* Animated underline */}
        <div
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-3"
          style={{
            width: phase === 'enter' ? '0%' : '100%',
            transition: 'width 0.8s ease 0.7s',
          }}
        />
        <p className="text-white/70 text-sm font-semibold tracking-[0.2em] uppercase">
          of&nbsp; <span className="text-blue-400">Meetech</span>
        </p>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            style={{
              width: phase === 'enter' ? '0%' : phase === 'hold' ? '80%' : '100%',
              transition: phase === 'enter'
                ? 'none'
                : phase === 'hold'
                  ? 'width 1.6s ease'
                  : 'width 0.4s ease',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scanLine {
          0%   { transform: translateX(-20%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(20%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// --- Global Nav Item ---
type GlobalNavItemProps = {
  icon: LucideIcon;
  active: boolean;
  label: string;
  onClick: () => void;
};

const GlobalNavItem = ({ icon: Icon, active, label, onClick }: GlobalNavItemProps) => {
  return (
    <button onClick={onClick} type="button" className="w-full">
      <div
        className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-all duration-300 ${active
          ? "text-text-primary border border-accent/90 bg-accent/90"
          : "text-text-disabled hover:text-text-primary hover:bg-accent/10 border border-transparent hover:border-accent/10"
          }`}
      >
        <Icon size={20} />
        <span className="text-sm font-medium whitespace-nowrap">
          {label}
        </span>
      </div>
    </button>
  );
};

// --- Action Menu Item ---
type ActionMenuItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ActionMenuItem = ({ icon: Icon, title, description }: ActionMenuItemProps) => (
  <button className="w-full flex items-center gap-4 p-3 hover:bg-accent/20 transition-colors text-left group">
    <div className="p-2 rounded-lg bg-border-subtle text-accent transition-colors">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-sm font-medium text-text-primary hover:text-accent">{title}</p>
      <p className="text-[11px] text-text-muted">{description}</p>
    </div>
  </button>
);

// --- Main Layout ---
export default function App({ children }: { children: React.ReactNode; user?: { name: string; email: string } }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();


  // const searchParams = useSearchParams();
  // const modal = searchParams.get('modal');

  // const openDashboardModal = (type: 'booking' | 'messages' | 'profile' | 'projects') => {
  //   router.push(`/client/dashboard?modal=${type}`);
  // };

  // const closeDashboardModal = () => {
  //   router.push('/client/dashboard');
  // };

  // const isDashboard = pathname === '/client/dashboard';
  const isActive = (path: string) => pathname === path;

  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    try {
      await signOut({ redirect: false });
      window.location.href = '/client/login';
    } catch {
      setIsSigningOut(false);
    }
  };

  // Enforce dark theme in client portal.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      <div className="relative flex h-screen overflow-hidden bg-[#020617] text-text-body font-sans">
        <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-indigo-500/20 blur-[130px]" />
        {/* Mobile top bar */}
        <header className="lg:hidden fixed top-0 inset-x-0 z-40 h-14 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl flex items-center justify-between px-4 shadow-[0_8px_24px_rgba(2,6,23,0.55)]">
          <button
            type="button"
            className="flex items-center"
            onClick={() => router.push('/client/dashboard')}
            aria-label="Go to dashboard"
          >
            <Image src="/icon.png" alt="Meetech" width={96} height={28} className="h-7 w-auto light-logo" />
            <Image src="/iconlight.png" alt="Meetech" width={96} height={28} className="h-7 w-auto dark-logo" />
          </button>
          <span className="text-[11px] uppercase tracking-[0.2em] text-blue-300/90">Client Portal</span>
        </header>

        {/* 1. GLOBAL NAVIGATION (DARK SIDEBAR) */}
        {/* <aside className="hidden lg:flex w-64 bg-slate-950/65 backdrop-blur-2xl flex-col py-6 px-4 border-r border-white/10 shrink-0 z-20 shadow-[16px_0_40px_rgba(2,6,23,0.45)]">
          <div className="relative mb-8">
            <Image
              src="/icon.png"
              alt="Meetech"
              width={180}
              height={56}
              className="h-11 w-auto light-logo"
            />
            <Image
              src="/icon.png"
              alt="Meetech"
              width={180}
              height={56}
              className="h-11 w-auto dark-logo"
            />
          </div>

          <nav className="flex flex-col gap-3 flex-1">
            <GlobalNavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={isActive('/client/dashboard')}
              onClick={() => router.push('/client/dashboard')}
            />
            <GlobalNavItem
              icon={CalendarPlus}
              label="Book Your Meeting"
              active={isActive('/client/booking')}
              onClick={() => router.push('/client/book-meeting')}            />
            <GlobalNavItem
              icon={MessageSquare}
              label="Messages"
              active={isActive('/client/messages')}
              onClick={() => router.push('/client/messages')}            />

            <GlobalNavItem
              icon={FolderKanban}
              label="My Projects"
              active={isActive('/client/projects')}
              onClick={() => router.push('/client/projects')} />

            <GlobalNavItem
              icon={CreditCard}
              label="Payments"
              active={isActive('/client/payments')}
              onClick={() => router.push('/client/payments')} />

            <GlobalNavItem
              icon={UserCircle}
              label="My Profile"
              active={isActive('/client/profile')}
              onClick={() => router.push('/client/profile')} />
           
          
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            {/* <button
              className="p-3 flex  rounded-xl text-blue-300/90 bg-blue-500/10 border border-blue-400/20"
              title="Dark mode is locked"
            >
              <div className="h-[22px] w-[22px] rounded-full bg-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.7)]" />
            </button> */}
        {/* 1. GLOBAL NAVIGATION – Enhanced minimalist sidebar */}
        <aside className="hidden lg:flex w-64 flex-col bg-bg-surface border-r border-border-default shrink-0 z-20">
          {/* Logo – cleaner placement */}
          <div className="flex  gap-2 items-center px-4 pt-8 pb-6">
            <Image
              src="/icon.png"
              alt="Meetech"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <span className=" text-2xl  font-semibold text-accent">Meetech</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-1">
            <GlobalNavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={isActive('/client/dashboard')}
              onClick={() => router.push('/client/dashboard')}
            />
            <GlobalNavItem
              icon={CalendarPlus}
              label="Book Your Meeting"
              active={isActive('/client/booking')}
              onClick={() => router.push('/client/book-meeting')}
            />
            <GlobalNavItem
              icon={MessageSquare}
              label="Messages"
              active={isActive('/client/messages')}
              onClick={() => router.push('/client/messages')}
            />
            <GlobalNavItem
              icon={FolderKanban}
              label="My Projects"
              active={isActive('/client/projects')}
              onClick={() => router.push('/client/projects')}
            />
            <GlobalNavItem
              icon={CreditCard}
              label="Payments"
              active={isActive('/client/payments')}
              onClick={() => router.push('/client/payments')}
            />
            <GlobalNavItem
              icon={UserCircle}
              label="My Profile"
              active={isActive('/client/profile')}
              onClick={() => router.push('/client/profile')}
            />
          </nav>

          {/* Footer – logout + profile */}
          <div className="px-3 pb-6 mt-auto space-y-3">
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-all disabled:opacity-50 text-sm font-medium"
            >
              <LogOut size={18} />
              <span>Log out</span>
            </button>

            <button
              onClick={() => router.push('/client/profile')}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors border border-accent/10"
            >
              {/* Avatar with fallback */}
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-text-inverse shrink-0">
                {session?.user.name
                  ?.split(' ')
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2) || 'U'}
              </div>
              <div className="flex flex-col items-start overflow-hidden text-left">
                <span className="text-sm font-semibold text-text-primary truncate w-full">
                  {session?.user.name || 'User Name'}
                </span>
                <span className="text-xs text-text-muted truncate w-full">
                  {session?.user.email || 'user@email.com'}
                </span>
              </div>
            </button>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col overflow-hidden relative pt-14 lg:pt-0 z-10">
          {/* Content */}
          <div className="flex-1 p-2 md:p-6 md:pb-40 lg:p-8 pb-24 lg:pb-8 overflow-y-auto mb-14 md:mb-0">
            {children}
          </div>

        </main>
      </div >

      {/* Mobile bottom navigation */}
      < nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 h-16 bg-slate-950/80 backdrop-blur-2xl border-t border-white/10 grid grid-cols-6 px-1 shadow-[0_-10px_30px_rgba(2,6,23,0.65)]" >
        <button
          type="button"
          onClick={() => router.push('/client/dashboard')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all `}
        >
          <LayoutDashboard size={18} />
          Home
        </button>
        <button
          type="button"
          onClick={() => router.push('/client/book-meeting')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all`}
        >
          <CalendarPlus size={18} />
          Booking
        </button>
        <button
          type="button"
          onClick={() => router.push('/client/messages')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all`}
        >
          <MessageSquare size={18} />
          Messages
        </button>

        <button
          type="button"
          onClick={() => router.push('/client/projects')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all`}
        >
          <FolderKanban size={18} />
          Projects
        </button>

        <button
          type="button"
          onClick={() => router.push('/client/payments')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all`}
        >
          <CreditCard size={18} />
          Payments
        </button>

        <button
          type="button"
          onClick={() => router.push('/client/profile')}
          className={`flex flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition-all`}
        >
          <UserCircle size={18} />
          Profile
        </button>
      </nav >

    </>
  );
}
