import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Gift,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import logo from "./assets/logo.jpeg";
import partnerTransmart from "./assets/transmart.png";
import partnerExo from "./assets/exodrinks.png";
import partnerGoFruit from "./assets/gofruit.png";
import partnerKedai from "./assets/kedaifamily.jpg";
import partnerCatering from "./assets/cateringburini.jpeg";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "values", label: "Values" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

const leaders = [
  {
    id: "sandhy",
    name: "Sandhy Prayogo",
    role: "Commissioner",
    message:
      "Governance and integrity are the bedrock of our operations. We are committed to transparency and trusted leadership across every supply channel.",
    icon: ShieldCheck,
  },
  {
    id: "andy",
    name: "Andy Permana",
    role: "Director",
    message:
      "We build premium supply solutions with deep partnership, quality assurance, and continuous improvement at every stage.",
    icon: Briefcase,
  },
];

const values = [
  { key: "G", label: "Growth", detail: "We enable sustainable expansion for every partner." },
  { key: "R", label: "Responsibility", detail: "We manage risk and deliver accountability with pride." },
  { key: "E", label: "Excellence", detail: "We pursue premium quality across all products and services." },
  { key: "A", label: "Accountability", detail: "We own every decision and follow through with clarity." },
  { key: "T", label: "Teamwork", detail: "We succeed through collaboration and mutual support." },
];

const filters = [
  { id: "all", label: "All" },
  { id: "souvenirs", label: "Corporate Souvenirs" },
  { id: "staple", label: "Staple & Ingredients" },
  { id: "ready", label: "Ready Meals" },
  { id: "commodities", label: "Premium Commodities" },
];

const products = [
  {
    id: "lock-lock",
    category: "souvenirs",
    title: "Souvenir & Merchandise Collections",
    tagline: "Branded, elegant gift collections for VIP clients.",
    icon: Gift,
  },
  {
    id: "vipco",
    category: "staple",
    title: "Vipco Cooking Oil",
    tagline: "Reliable cooking oil distribution for high-volume operations.",
    icon: Leaf,
  },
  {
    id: "grandco",
    category: "staple",
    title: "Grandco & Tropical Oils",
    tagline: "Trusted household staple with broad availability.",
    icon: Leaf,
  },
  {
    id: "flour-sugar",
    category: "staple",
    title: "Rose Brand, Segitiga Biru, GMP",
    tagline: "Premium flour and sugar lines for industrial kitchens.",
    icon: Leaf,
  },
  {
    id: "noodles",
    category: "staple",
    title: "Indomie, Sakura, Pop Mie",
    tagline: "Leading noodle brands for convenience and quality.",
    icon: Leaf,
  },
  {
    id: "peanuts",
    category: "staple",
    title: "Peanuts",
    tagline: "High-quality nuts sourced for wholesale supply.",
    icon: Leaf,
  },
  {
    id: "ayam-balado",
    category: "ready",
    title: "Orijin Ayam Balado",
    tagline: "Ready meal with bold Indonesian flavor.",
    icon: Sparkles,
  },
  {
    id: "nasi-goreng",
    category: "ready",
    title: "Orijin Nasi Goreng Oriental",
    tagline: "Restaurant-quality convenience for modern kitchens.",
    icon: Sparkles,
  },
  {
    id: "semur-lidah",
    category: "ready",
    title: "Orijin Semur Lidah",
    tagline: "Rich, savory ready meals crafted for premium catering.",
    icon: Sparkles,
  },
  {
    id: "bawang-terasi",
    category: "ready",
    title: "Orijin Bawang/Terasi Pastes",
    tagline: "Versatile seasoning bases for authentic meals.",
    icon: Sparkles,
  },
  {
    id: "gaharu",
    category: "commodities",
    title: "Premium Gaharu (Agarwood)",
    tagline: "Rare, aromatic commodities for specialty markets.",
    icon: Leaf,
  },
];

const partners = [
  { name: "Transmart", logo: partnerTransmart },
  { name: "Exo Drinks", logo: partnerExo },
  { name: "GoFruit.id", logo: partnerGoFruit },
  { name: "Kedai Family", logo: partnerKedai },
  { name: "Catering Bu Rini", logo: partnerCatering },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const listVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ label, title, description }) {
  return (
    <div className="space-y-4">
      <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">{label}</span>
      <div>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">{description}</p>}
      </div>
    </div>
  );
}

function ContactInfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <Icon className="h-4 w-4 text-emerald-300" />
      <span>{text}</span>
    </div>
  );
}

function InputField({ label, name, type, value, onChange }) {
  return (
    <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 transition hover:border-emerald-400/40">
      <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-emerald-300">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-7 w-full border-0 bg-transparent px-0 pb-1 text-base text-white outline-none placeholder:text-transparent"
        placeholder={label}
      />
    </label>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const [navSolid, setNavSolid] = useState(false);
  const [activeLeader, setActiveLeader] = useState(leaders[0].id);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => setNavSolid(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050B1B] text-slate-100">
      <motion.div className="fixed inset-x-0 top-0 h-1 origin-left bg-slate-800" style={{ scaleX: scrollYProgress }} />

      <header className={`sticky top-0 z-50 transition-all duration-500 ${navSolid ? "bg-[#071824]/95 shadow-[0_25px_80px_-40px_rgba(8,22,42,0.85)] backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="KSM Logo" className="h-10 w-10 rounded-2xl border border-white/10 bg-slate-950/70 p-2 shadow-glow" />
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">CV Karya Sahabi Makmur</p>
              <p className="text-sm text-slate-300">Trusted supply solution</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 p-2 text-slate-200 hover:bg-white/7"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-100">
                <path d="M0 1.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 12.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-[#071824]/95 backdrop-blur-sm border-b border-white/5"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="KSM Logo" className="h-8 w-8 rounded-xl" />
                    <div>
                      <p className="text-sm font-semibold text-slate-100">CV Karya Sahabi Makmur</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 p-2 text-slate-200 hover:bg-white/7">
                      ✕
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a key={link.id} href={`#${link.id}`} onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="relative overflow-hidden pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(circle_at_top,_rgba(25,183,116,0.16),_transparent_30%),radial-gradient(circle_at_12%_25%,_rgba(34,76,167,0.18),_transparent_22%),radial-gradient(circle_at_85%_20%,_rgba(59,212,150,0.14),_transparent_24%)]" />

        <section id="home" className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, ease: "easeOut" }} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300 backdrop-blur-sm">
                Trusted Supply Solution
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                KSM delivers premium quality products and reliable services for private and government sectors.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                As a versatile general supplier, CV Karya Sahabi Makmur empowers organizations with dependable provisioning, premium merchandising, and seamless logistics.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a href="#products" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(16,185,116,0.24)] transition duration-300 hover:bg-emerald-400">
                  Explore Products <ArrowRight size={16} />
                </motion.a>
                <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-white text-opacity-95 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:border-emerald-400 hover:text-emerald-300">
                  Contact Us
                </motion.a>
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-3xl">
              <div className="absolute -right-8 top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -left-10 bottom-8 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/40">
                  <ShieldCheck className="h-6 w-6 text-emerald-300" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/90">Core Strength</p>
                    <p className="text-base font-semibold text-white">Premium supply chain trust</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
                    <p className="text-sm text-emerald-300/80">Market coverage</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Private & Government</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
                    <p className="text-sm text-emerald-300/80">Service readiness</p>
                    <p className="mt-3 text-3xl font-semibold text-white">24/7 Supply Support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-[#081628]/90 p-8 shadow-glow">
              <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">About Us</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Established November 2023, built on professionalism, efficiency, and accountability.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                CV Karya Sahabi Makmur supports the highest trust standards across general supply. Our value-led operations bridge logistics, procurement, and premium distribution for today’s ambitious teams.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {leaders.map((leader, index) => {
                const Icon = leader.icon;
                return (
                  <motion.button
                    key={leader.id}
                    type="button"
                    onClick={() => setActiveLeader(leader.id)}
                    className={`group relative overflow-hidden rounded-[1.8rem] border px-6 py-8 text-left shadow-lg transition duration-300 ${
                      activeLeader === leader.id
                        ? "border-emerald-400/30 bg-[#0B1B31]/95 shadow-[0_30px_80px_-45px_rgba(16,185,116,0.45)]"
                        : "border-white/10 bg-slate-950/80 hover:border-emerald-400/20 hover:bg-[#061124]/90"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300 shadow-inner shadow-slate-950/20">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{leader.role}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{leader.name}</p>
                      </div>
                    </div>
                    <div className="mt-6 text-sm leading-7 text-slate-300">{leader.message}</div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section id="values" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Corporate Values</span>
            <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">The G.R.E.A.T values that guide every KSM decision.</h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={listVariant} className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {values.map((item) => (
              <motion.article key={item.key} variants={itemVariant} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#071A2D]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-[#0D203A]/95">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-white">{item.key}</p>
                    <p className="mt-2 text-base font-semibold text-emerald-300">{item.label}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/10 bg-emerald-300/10 p-3 text-emerald-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">{item.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section id="products" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Product Catalog</span>
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Diverse product categories, presented with clarity.</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                  Select a category to view premium offers from corporate souvenirs to ready-to-serve meals and premium commodities.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === filter.id
                      ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                      : "border-white/10 bg-slate-950/80 text-slate-300 hover:border-emerald-300/40 hover:bg-slate-900"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#081827]/80 p-6 shadow-glow">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <motion.article
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 24 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 110, damping: 16, duration: 0.35, ease: "easeOut" }}
                      className="rounded-[1.75rem] border border-white/10 bg-[#061229]/90 p-6 shadow-xl shadow-slate-950/20 transition-transform duration-300 hover:border-emerald-400/30"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="space-y-2">
                          <p className="text-base font-semibold text-emerald-300">{product.title}</p>
                          <p className="text-sm leading-6 text-slate-300">{product.tagline}</p>
                        </div>
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-emerald-300/10 text-emerald-300 shadow-inner shadow-slate-950/10">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                        <span>View details</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section id="partners" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#081827]/80 p-8 shadow-glow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Trusted Partners</span>
                <h2 className="mt-3 text-3xl font-semibold text-white">Trusted by clients across leading retail, food, and catering brands.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                <Users className="h-4 w-4 text-emerald-300" /> Verified collaborations
              </div>
            </div>

            <div className="mt-8 overflow-x-auto pb-4 pr-2 scrollbar-hide">
              <div className="flex snap-x snap-mandatory items-center gap-5">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 120, damping: 16, duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                    className="snap-center flex-shrink-0 w-52"
                  >
                    <div className="flex h-32 items-center justify-center overflow-hidden rounded-3xl bg-transparent p-3">
                      <img src={partner.logo} alt={partner.name} className="max-h-24 w-full object-contain" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
              <div className="h-full rounded-[2rem] border border-white/10 bg-[#071826]/95 p-6 shadow-glow">
                <span className="text-xs uppercase tracking-[0.32em] text-emerald-300/80">Contact</span>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Let’s make your next supply solution effortless.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Reach out from Pulo Gadung Jakarta Timur and let our supply experts connect your business with premium products and dependable service.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    <span>Pulo Gadung Jakarta Timur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-300" />
                    <span>+62 812 3456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-300" />
                    <span>info@karyasahabimakmur.id</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-4 w-4 text-emerald-300" />
                    <span>www.karyasahabimakmur.id</span>
                  </div>
                </div>
              </div>

              <div className="h-full rounded-[2rem] border border-white/10 bg-[#06142c]/80 p-6 shadow-glow">
                <div className="h-full overflow-hidden rounded-[1.75rem] bg-[#06142c]/80">
                  <iframe
                    title="KSM Location Map"
                    src="https://maps.google.com/maps?q=Jl.%20Pisangan%20Lama%20I%20No.1,%20RT.1/RW.5,%20Pisangan%20Tim.,%20Kec.%20Pulo%20Gadung,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013230&output=embed"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-[#081930]/95 p-6 shadow-glow">
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField label="Name" name="name" type="text" value={formData.name} onChange={handleInput} />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleInput} />
              </div>
              <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 transition hover:border-emerald-400/40">
                <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-emerald-300">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInput}
                  required
                  rows={5}
                  className="mt-7 w-full border-0 bg-transparent px-0 pb-1 text-base text-white outline-none placeholder:text-transparent"
                  placeholder="Message"
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(16,185,116,0.24)] transition hover:bg-emerald-400"
              >
                {sent ? "Message Sent" : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>Message Sent Successfully!</span>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-[#050A18] py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 CV Karya Sahabi Makmur — Premium supply solutions.</p>
          <p>Built for trust, growth, and proven performance.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
