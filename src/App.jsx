import { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Menu, X, Wallet, Gift, Rocket, Home, LayoutDashboard } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(6,182,212,0.1)]">
          <div className="flex items-center justify-between px-4 h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src="/flame-icon.svg" alt="Phoenix" className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:scale-105 transition" />
                <span className="absolute inset-0 rounded-full blur-xl opacity-40 scale-100 group-hover:scale-110 transition bg-cyan-400/30"></span>
              </div>
              <span className="heading font-black tracking-wider glow-cyan">PHOENIX AI</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {[
                { to: '/', label: 'Home', icon: Home },
                { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
                { to: '/airdrop-scanner', label: 'Airdrop', icon: Gift },
                { to: '/launch-scanner', label: 'Launch', icon: Rocket },
              ].map(({ to, label }) => (
                <NavLink key={to} to={to} className={({ isActive }) => `relative py-2 text-sm transition ${isActive ? 'text-cyan-400' : 'text-white/80 hover:text-cyan-300'}`}>
                  {label}
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 transition-all duration-300" style={{ width: '100%', transform: 'scaleX(0)', transformOrigin: 'left' }}></span>
                </NavLink>
              ))}
              <button className="btn-primary hidden lg:inline-flex">
                <Wallet className="w-4 h-4 mr-2" /> Connect Wallet
              </button>
            </div>

            <button className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10" onClick={() => setOpen(v=>!v)}>
              {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden px-4 pb-4">
                <div className="grid gap-2">
                  <NavLink to="/" onClick={() => setOpen(false)} className="glass-card px-4 py-3">Home</NavLink>
                  <NavLink to="/dashboard" onClick={() => setOpen(false)} className="glass-card px-4 py-3">Dashboard</NavLink>
                  <NavLink to="/airdrop-scanner" onClick={() => setOpen(false)} className="glass-card px-4 py-3">Airdrop</NavLink>
                  <NavLink to="/launch-scanner" onClick={() => setOpen(false)} className="glass-card px-4 py-3">Launch</NavLink>
                  <button className="btn-primary w-full mt-2"><Wallet className="w-4 h-4 mr-2"/>Connect Wallet</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background grid and orbs */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.06) 2%, transparent 3%)`, backgroundSize: '50px 50px', animation: 'shimmer 12s linear infinite' }} />
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-500/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8">
        <div className="py-24">
          <div className="relative inline-block">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-fuchsia-500/10 to-orange-400/20 blur-2xl pointer-events-none" />
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center animate-rotate-slow">
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(34,211,238,0.6), rgba(168,85,247,0.6), rgba(251,146,60,0.6), rgba(34,211,238,0.6))' }} />
              <div className="absolute inset-2 rounded-full bg-black/60 backdrop-blur"></div>
            </div>
          </div>
          <h1 className="heading mt-8 text-5xl md:text-7xl font-black gradient-text-vibrant">PHOENIX AI</h1>
          <p className="mt-4 text-white/80 max-w-xl">An AI-powered crypto intelligence platform with cyberpunk vibes. Real-time dashboards, airdrop scanning, and launch detection — all in one.</p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/dashboard" className="btn-primary">Open Dashboard</Link>
            <a href="#features" className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">Explore Features</a>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Markets Tracked', value: '1,245' },
              { label: 'Signals Today', value: '342' },
              { label: 'Active Bots', value: '57' },
              { label: 'Risk Checks', value: '1,028' },
            ].map((s, i) => (
              <div key={s.label} className="glass-card p-5 hover:-translate-y-1 transition gpu" style={{ animationDelay: `${i*100}ms` }}>
                <div className="text-2xl font-extrabold text-cyan-300">{s.value}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/30">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="heading text-3xl md:text-4xl font-black mb-8 glow-cyan">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Section id="features" title="Core Features">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Airdrop Scanner', to: '/airdrop-scanner', emoji: '🎁', desc: 'AI-powered eligibility and risk checks across chains.' },
            { title: 'Launch Scanner', to: '/launch-scanner', emoji: '🚀', desc: 'Early detection and growth potential analysis.' },
            { title: 'Market Dashboard', to: '/dashboard', emoji: '📊', desc: 'Trends, dominances, and realtime intel.' },
          ].map((f) => (
            <Link key={f.title} to={f.to} className="group relative glass-card p-6 hover:-translate-y-2 transition">
              <div className="text-4xl mb-3">{f.emoji}</div>
              <div className="font-bold text-lg group-hover:text-cyan-300">{f.title}</div>
              <div className="text-white/70 text-sm mt-1">{f.desc}</div>
              <div className="gradient-separator mt-6" />
            </Link>
          ))}
        </div>
      </Section>
    </main>
  )
}

function DashboardPage() {
  const [active, setActive] = useState('Overview')
  const tabs = ['Overview','Signals','Whale','News','Analysis','Memecoins','Portfolio','Social','Compare','Snapshot','Airdrop','Launch']
  return (
    <main className="relative pt-28">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="heading text-4xl md:text-5xl font-black mb-6">Market Dashboard</h1>
        <div className="glass-card p-2 flex flex-wrap gap-2">
          {tabs.map(t => (
            <button key={t} onClick={()=>setActive(t)} className={`px-4 py-2 rounded-lg transition ${active===t? 'bg-white/15 text-cyan-300':'hover:bg-white/10'}`}>{t}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1,2,3].map(i => (
            <div key={i} className="relative glass-card p-6 hover:-translate-y-2 transition">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-orange-400/10 opacity-0 hover:opacity-100 transition" />
              <div className="font-bold mb-2">Overview Card {i}</div>
              <div className="text-white/70 text-sm">Hover for shimmer and glow effects.</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function EmojiHeader({ emoji, title }){
  return (
    <div className="flex items-center gap-3">
      <div className="text-5xl" style={{ filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.3))' }}>{emoji}</div>
      <h1 className="heading text-4xl md:text-5xl font-black gradient-text-vibrant">{title}</h1>
    </div>
  )
}

function AirdropScannerPage(){
  return (
    <main className="relative pt-28">
      <div className="absolute -z-0 inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full animate-float" />
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-fuchsia-500/20 blur-[150px] rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <EmojiHeader emoji="🎁" title="Airdrop Scanner" />
        <div className="glass-card mt-6 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300">🔍</span>
              <input className="w-full h-12 rounded-xl pl-10 pr-3 bg-white/5 border border-white/10" placeholder="Search projects, tasks or wallets" />
            </div>
            <button className="btn-primary">Scan</button>
          </div>
        </div>
        <div className="text-center py-14">
          <div className="text-8xl animate-micro-float">🎁</div>
          <p className="text-white/70 max-w-xl mx-auto mt-4">AI-powered eligibility checks, real-time data across chains, and risk analysis. Start by searching above.</p>
        </div>
      </div>
    </main>
  )
}

function LaunchScannerPage(){
  return (
    <main className="relative pt-28">
      <div className="absolute -z-0 inset-0">
        <div className="absolute top-10 right-24 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-24 left-16 w-[520px] h-[520px] bg-blue-500/20 blur-[140px] rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-fuchsia-500/20 blur-[120px] rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <EmojiHeader emoji="🚀" title="Launch Scanner" />
        <div className="glass-card mt-6 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300">🔎</span>
              <input className="w-full h-12 rounded-xl pl-10 pr-3 bg-white/5 border border-white/10" placeholder="Search upcoming launches" />
            </div>
            <button className="btn-primary">Analyze</button>
          </div>
        </div>
        <div className="text-center py-14">
          <div className="text-8xl animate-float">🚀</div>
          <p className="text-white/70 max-w-xl mx-auto mt-4">Early detection, growth potential, stage identification, and risk analysis — all visualized beautifully.</p>
        </div>
      </div>
    </main>
  )
}

function Layout(){
  return (
    <div className="relative custom-scrollbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/airdrop-scanner" element={<AirdropScannerPage />} />
        <Route path="/launch-scanner" element={<LaunchScannerPage />} />
      </Routes>
      <footer className="py-10 text-center text-white/60">Built with neon vibes.</footer>
    </div>
  )
}

export default function App(){
  return <Layout />
}
