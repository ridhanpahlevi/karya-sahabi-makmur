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
import commissionerPhoto from "./assets/komisaris.png";
import directorPhoto from "./assets/direktur.png";
import partnerTransmart from "./assets/transmart.png";
import partnerExo from "./assets/exodrinks.png";
import partnerGoFruit from "./assets/gofruit.png";
import partnerKedai from "./assets/kedaifamily.jpg";
import partnerCatering from "./assets/cateringburini.jpeg";

const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "values", label: "Nilai" },
  { id: "products", label: "Produk Kami" },
  { id: "services", label: "Layanan Kami" },
  { id: "contact", label: "Kontak" },
];

const leaders = [
  {
    id: "sandhy",
    name: "Sandhy Prayogo",
    role: "Komisaris",
    message:
      "Tata kelola dan integritas menjadi landasan operasi kami. Kami berkomitmen pada transparansi dan kepemimpinan terpercaya di setiap jalur pasokan.",
    icon: ShieldCheck,
    photo: commissionerPhoto,
  },
  {
    id: "andy",
    name: "Andy Permana",
    role: "Direktur",
    message:
      "Kami membangun solusi pasokan premium dengan kemitraan yang kuat, jaminan mutu, dan perbaikan berkelanjutan di setiap tahap.",
    icon: Briefcase,
    photo: directorPhoto,
  },
];

const values = [
  { key: "G", label: "Growth", detail: "Kami mendukung pertumbuhan berkelanjutan untuk setiap mitra." },
  { key: "R", label: "Responsibility", detail: "Kami mengelola risiko dan memberikan tanggung jawab dengan bangga." },
  { key: "E", label: "Excellence", detail: "Kami mengejar kualitas premium di semua produk dan layanan." },
  { key: "A", label: "Accountability", detail: "Kami bertanggung jawab atas setiap keputusan dan menindaklanjutinya dengan jelas." },
  { key: "T", label: "Teamwork", detail: "Kami berhasil melalui kolaborasi dan dukungan bersama." },
];

const filters = [
  { id: "all", label: "Semua" },
  { id: "souvenirs", label: "Souvenir Perusahaan" },
  { id: "staple", label: "Bahan Pokok & Bumbu" },
  { id: "ready", label: "Siap Saji" },
  { id: "commodities", label: "Komoditas Premium" },
];

const products = [
  {
    id: "souvenir",
    category: "souvenirs",
    title: "Souvenir",
    tagline: "Koleksi souvenir perusahaan berkualitas untuk hadiah eksklusif.",
    detail: "Merchandise bermerek dan paket hadiah khusus untuk acara korporat.",
    items: ["Souvenir bermerek", "Hadiah VIP", "Paket promo"],
    icon: Gift,
  },
  {
    id: "seasonings-meal",
    category: "ready",
    title: "Seasonings & Meal",
    tagline: "Bumbu dan sajian siap saji untuk cita rasa Nusantara.",
    detail: "Termasuk bumbu siap pakai, menu siap saji, dan paket meal untuk kebutuhan cepat.",
    items: ["Bumbu siap pakai", "Menu siap saji", "Paket meal"],
    icon: Sparkles,
  },
  {
    id: "catering",
    category: "ready",
    title: "Catering",
    tagline: "Layanan katering profesional untuk acara korporat dan event.",
    detail: "Penyediaan makanan untuk rapat, seminar, dan acara perusahaan.",
    items: ["Catering rapat", "Catering seminar", "Catering acara"],
    icon: Users,
  },
  {
    id: "cooking-oil",
    category: "staple",
    title: "Cooking Oil",
    tagline: "Merek minyak goreng premium untuk penggunaan dapur sehat dan andal.",
    detail: "Menawarkan minyak goreng berkualitas untuk kebutuhan produksi dan rumah tangga.",
    items: ["Vipco", "Grandco", "Tropical Oil"],
    icon: Leaf,
  },
  {
    id: "flour-sugar",
    category: "staple",
    title: "Flour & Sugar",
    tagline: "Tepung dan gula premium untuk kebutuhan industri dan perdagangan.",
    detail: "Merek terpercaya untuk pasokan grosir dan eceran.",
    items: ["Rose Brand", "Segitiga Biru", "GMP"],
    icon: Leaf,
  },
  {
    id: "mie-instan",
    category: "staple",
    title: "Mie Instant",
    tagline: "Penyajian cepat dengan merek mie instan populer.",
    detail: "Tersedia untuk kebutuhan eceran dan penyediaan makanan cepat saji.",
    items: ["Indomie", "Sakura", "Pop Mie"],
    icon: Leaf,
  },
  {
    id: "peanut",
    category: "staple",
    title: "Peanut",
    tagline: "Kacang berkualitas tinggi untuk pasokan grosir.",
    detail: "Pilihan kacang untuk produksi makanan dan kebutuhan konsumsi.",
    icon: Leaf,
  },
  {
    id: "fruit",
    category: "commodities",
    title: "Fruit",
    tagline: "Buah segar pilihan untuk suplai pasar dan katering.",
    detail: "Tersedia buah lokal dan impor untuk pasokan premium.",
    items: ["Buah lokal", "Buah impor", "Paket buah segar"],
    icon: Leaf,
  },
  {
    id: "gaharu",
    category: "commodities",
    title: "Gaharu",
    tagline: "Komoditas gaharu premium untuk segmen spesial dan aromatik.",
    detail: "Gaharu pilihan untuk pasar premium dan produk aroma.",
    icon: Leaf,
  },
];

const services = [
  {
    id: "equipment-rent",
    title: "Equipment Rent",
    description: "Penyewaan peralatan untuk kebutuhan event dan produksi.",
    icon: Briefcase,
  },
  {
    id: "exhibition-event",
    title: "Exhibition Event",
    description: "Dukungan penuh untuk pelaksanaan pameran dan display korporat.",
    icon: Users,
  },
  {
    id: "csr-event",
    title: "CSR Event",
    description: "Event CSR untuk program tanggung jawab sosial korporat.",
    icon: ShieldCheck,
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

function ContactInfoRow({ icon: Icon, text, href }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <Icon className="h-4 w-4 text-emerald-300" />
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="text-slate-300 transition hover:text-white"
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

function InputField({ label, name, type, value, onChange, error }) {
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
      {error && <p className="mt-3 text-xs text-rose-300">{error}</p>}
    </label>
  );
}

function LeaderPhoto({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 text-3xl font-semibold text-white shadow-lg shadow-slate-950/30">
      {initials}
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const [navSolid, setNavSolid] = useState(false);
  const [activeLeader, setActiveLeader] = useState(leaders[0].id);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sanitizeInput = (value) => {
    if (typeof value !== "string") return "";
    return value.replace(/["'<>`\\;]/g, "").trim();
  };

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

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
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    const errors = {};
    if (!sanitizedData.name) errors.name = "Nama wajib diisi.";
    if (!sanitizedData.email || !validateEmail(sanitizedData.email)) errors.email = "Surel tidak valid.";
    if (!sanitizedData.message) errors.message = "Pesan wajib diisi.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSent(false);
      return;
    }

    setFormData({ name: "", email: "", message: "" });
    setFormErrors({});
    setSent(true);
  };

  const openProduct = (product) => setSelectedProduct(product);
  const closeProduct = () => setSelectedProduct(null);
  const SelectedProductIcon = selectedProduct?.icon;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050B1B] text-slate-100">
      <motion.div className="fixed inset-x-0 top-0 h-1 origin-left bg-slate-800" style={{ scaleX: scrollYProgress }} />

      <header className={`sticky top-0 z-50 transition-all duration-500 ${navSolid ? "bg-[#071824]/95 shadow-[0_25px_80px_-40px_rgba(8,22,42,0.85)] backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo KSM" className="h-10 w-10 rounded-2xl border border-white/10 bg-slate-950/70 p-2 shadow-glow" />
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">PT Karya Sahabi Makmur</p>
              <p className="text-sm text-slate-300">Solusi pasokan terpercaya</p>
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
              aria-label="Buka menu"
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
                    <img src={logo} alt="Logo KSM" className="h-8 w-8 rounded-xl" />
                    <div>
                      <p className="text-sm font-semibold text-slate-100">PT Karya Sahabi Makmur</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => setMobileOpen(false)} aria-label="Tutup menu" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 p-2 text-slate-200 hover:bg-white/7">
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
                Solusi Pasokan Terpercaya
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                KSM menyediakan produk berkualitas premium dan layanan andal untuk sektor swasta dan pemerintahan.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Sebagai pemasok umum serbaguna, PT Karya Sahabi Makmur memberdayakan organisasi dengan pasokan yang dapat diandalkan, merchandise premium, dan logistik tanpa hambatan.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a href="#products" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(16,185,116,0.24)] transition duration-300 hover:bg-emerald-400">
                  Telusuri Produk <ArrowRight size={16} />
                </motion.a>
                <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-white text-opacity-95 shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:border-emerald-400 hover:text-emerald-300">
                  Hubungi Kami
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
                    <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/90">Kekuatan Inti</p>
                    <p className="text-base font-semibold text-white">Kepercayaan rantai pasokan premium</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
                    <p className="text-sm text-emerald-300/80">Jangkauan Pasar</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Swasta & Pemerintah</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
                    <p className="text-sm text-emerald-300/80">Kesiapan Layanan</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Dukungan Pasokan 24/7</p>
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
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Didirikan November 2023, dibangun atas profesionalisme, efisiensi, dan akuntabilitas.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                PT Karya Sahabi Makmur mendukung standar kepercayaan tertinggi di seluruh pasokan umum. Operasi kami yang berbasis nilai menjembatani logistik, pengadaan, dan distribusi premium untuk tim yang ambisius.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {leaders.map((leader, index) => {
                const Icon = leader.icon;
                return (
                  <motion.button
                    key={leader.id}
                    type="button"
                    onClick={() => {
                      setActiveLeader(leader.id);
                      setSelectedLeader(leader);
                    }}
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

        <AnimatePresence>
          {selectedLeader && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 text-slate-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedLeader(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 56, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: 32, scale: 0.95, rotate: 3 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#06182e]/95 p-6 shadow-2xl shadow-slate-950/40"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedLeader(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Close profile popup"
                >
                  ✕
                </button>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">{selectedLeader.role}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{selectedLeader.name}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-200">{selectedLeader.message}</p>
                    </div>
                    <img src={selectedLeader.photo} alt={selectedLeader.name} className="h-56 w-56 rounded-[2.25rem] object-cover" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section id="values" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Nilai Perusahaan</span>
            <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">Nilai G.R.E.A.T yang memandu setiap keputusan KSM.</h2>
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
              <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Produk Kami</span>
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Beragam kategori produk yang disajikan dengan jelas.</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                  Pilih kategori untuk melihat penawaran premium dari souvenir perusahaan hingga makanan siap saji dan komoditas premium.
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
                      onClick={() => openProduct(product)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openProduct(product);
                        }
                      }}
                      className="cursor-pointer rounded-[1.75rem] border border-white/10 bg-[#061229]/90 p-6 shadow-xl shadow-slate-950/20 transition-transform duration-300 hover:border-emerald-400/30"
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
                        <span>Lihat detail</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 text-slate-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={closeProduct}
            >
              <motion.div
                initial={{ opacity: 0, y: 56, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#06182e]/95 p-6 shadow-2xl shadow-slate-950/40"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeProduct}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
                  aria-label="Close product popup"
                >
                  ✕
                </button>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Detail Produk</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{selectedProduct.title}</h3>
                      <p className="mt-4 text-base leading-8 text-slate-200">{selectedProduct.tagline}</p>
                      {selectedProduct.detail && <p className="mt-4 text-sm leading-7 text-slate-300">{selectedProduct.detail}</p>}
                      {selectedProduct.items && (
                        <div className="mt-5">
                          <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Daftar Produk</p>
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                            {selectedProduct.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <p className="mt-6 text-sm text-slate-400">Gambar produk dan daftar item dapat ditambahkan di sini nanti.</p>
                    </div>
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-emerald-300/10 text-emerald-300 shadow-inner shadow-slate-950/20">
                      {SelectedProductIcon && <SelectedProductIcon className="h-10 w-10" />}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section id="services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Layanan Kami</span>
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Kemampuan layanan profesional untuk setiap kebutuhan pengadaan.</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                  Dari sourcing dan logistik hingga jaminan mutu dan hadiah perusahaan, tim kami mendukung keunggulan layanan pasokan penuh.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#071A2D]/90 p-6 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-[#0D203A]/95">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xl font-semibold text-white">{service.title}</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-300/10 text-emerald-300 shadow-inner shadow-slate-950/10">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="partners" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#081827]/80 p-8 shadow-glow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Mitra Tepercaya</span>
                <h2 className="mt-3 text-3xl font-semibold text-white">Dipercaya oleh klien di berbagai merek retail, makanan, dan katering.</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                <Users className="h-4 w-4 text-emerald-300" /> Kolaborasi Terverifikasi
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
                <span className="text-xs uppercase tracking-[0.32em] text-emerald-300/80">Kontak</span>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Mari permudah solusi pasokan Anda berikutnya.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Hubungi kami dari Pulo Gadung Jakarta Timur dan biarkan ahli pasokan kami menghubungkan bisnis Anda dengan produk premium dan layanan andal.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  <ContactInfoRow
                    icon={MapPin}
                    text="Pulo Gadung Jakarta Timur"
                    href="https://www.google.com/maps/search/?api=1&query=Jl.+Pisangan+Lama+I+No.1,+RT.1/RW.5,+Pisangan+Tim.,+Kec.+Pulo+Gadung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13230"
                  />
                  <ContactInfoRow icon={Phone} text="+62 812 3456 7890" href="tel:+6281234567890" />
                  <ContactInfoRow icon={Mail} text="info@karya-sahabimakmur.com" href="mailto:info@karya-sahabimakmur.com" />
                  <ContactInfoRow icon={ExternalLink} text="karyasahabimakmur.ksm-indonesia.com/" href="karya-sahabimakmur.ksm-indonesia.com" />
                </div>
              </div>

              <div className="h-full rounded-[2rem] border border-white/10 bg-[#06142c]/80 p-6 shadow-glow">
                <div className="h-full overflow-hidden rounded-[1.75rem] bg-[#06142c]/80">
                  <iframe
                    title="Peta Lokasi KSM"
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
                <InputField label="Nama" name="name" type="text" value={formData.name} onChange={handleInput} />
                <InputField label="Surel" name="email" type="email" value={formData.email} onChange={handleInput} />
              </div>
              <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 transition hover:border-emerald-400/40">
                <span className="pointer-events-none absolute left-4 top-4 text-sm text-slate-400 transition-all group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-emerald-300">
                  Pesan
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
                {sent ? "Pesan Terkirim" : "Kirim Pesan"}
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              {sent && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>Pesan Berhasil Terkirim!</span>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 bg-[#050A18] py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 PT Karya Sahabi Makmur — Solusi pasokan premium.</p>
          <p>Dibuat untuk kepercayaan, pertumbuhan, dan kinerja terbukti.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
