import {
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_BASE = "https://wa.me/918074055285";
const WHATSAPP_GENERAL = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello Karthik Traders, I am interested in your fencing products")}`;

function whatsappProductLink(productName: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hello Karthik Traders, I would like to order ${productName}`)}`;
}

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Products", id: "products" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const PRODUCTS = [
  {
    name: "Chain Link Mesh",
    description:
      "Strong galvanized chain link fencing for boundary protection, available in multiple gauges and heights for residential and industrial use.",
    icon: "🔗",
  },
  {
    name: "Barbed Wire",
    description:
      "High-tensile barbed wire for security fencing with superior corrosion resistance. Ideal for perimeter security and agricultural boundaries.",
    icon: "⚡",
  },
  {
    name: "GI Wire",
    description:
      "Galvanized iron wire for general fencing and binding applications. Hot-dip galvanized for lasting protection against rust and weathering.",
    icon: "🌀",
  },
  {
    name: "Cement Poles",
    description:
      "Durable pre-stressed cement fencing poles engineered for long-lasting strength. Ideal for farm, agricultural, and compound fencing.",
    icon: "🏗️",
  },
  {
    name: "Fencing Stones",
    description:
      "Quality stone supports for fencing installations providing a solid foundation. Perfect for traditional and decorative boundary fencing.",
    icon: "🪨",
  },
  {
    name: "Iron Poles",
    description:
      "Heavy-duty iron poles for industrial fencing. Powder-coated for weather resistance, suitable for high-security perimeter installations.",
    icon: "🔩",
  },
  {
    name: "GI Poles",
    description:
      "Galvanized iron poles with superior corrosion resistance. Lightweight yet sturdy, perfect for both residential and commercial fencing.",
    icon: "🛡️",
  },
  {
    name: "Solar Wire",
    description:
      "UV-resistant solar fencing wire for farm protection. Effectively deters wildlife and cattle with safe, low-energy electric pulse technology.",
    icon: "☀️",
  },
];

const FEATURES = [
  {
    title: "Retail & Wholesale",
    description:
      "We serve both retail buyers and bulk wholesale orders with competitive pricing across all product categories.",
  },
  {
    title: "Quality Assured",
    description:
      "Every product meets stringent quality standards with ISI-certified materials and galvanized coating for long-lasting performance.",
  },
  {
    title: "Direct from Manufacturer",
    description:
      "Buy directly from the manufacturer to eliminate middlemen and get the best possible prices without compromising quality.",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── STICKY NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xs border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleScroll("home")}
            className="flex items-center gap-2.5 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center shadow-sm">
              <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-[16px] tracking-tight text-brand-charcoal">
                Karthik Traders
              </p>
              <p className="text-[10px] text-muted-foreground font-medium tracking-wide">
                Fencing Solutions
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
              data-ocid="nav.primary_button"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-slate-700 p-1"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3"
            >
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className="text-left text-sm font-medium text-slate-700 hover:text-brand-blue py-1.5 transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-green text-white rounded-full py-2.5 font-semibold text-sm mt-1"
                data-ocid="nav.primary_button"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO SECTION ── */}
      <section
        id="home"
        className="relative pt-[68px] min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-fencing.dim_1200x600.jpg')",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-brand-green/20 text-brand-green border border-brand-green/40 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Retail &amp; Wholesale
            </span>
            <h1 className="font-display text-[36px] sm:text-[50px] lg:text-[62px] font-extrabold text-white leading-[1.08] mb-6 uppercase tracking-tight">
              Premium Fencing Solutions
              <br />
              <span className="text-brand-green">
                for Security &amp; Durability
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-[560px] mx-auto">
              Karthik Traders — your trusted source for high-quality fencing
              materials in Kadapa, Andhra Pradesh. Manufacturing and supplying
              across the region.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleScroll("products")}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-7 py-3 rounded-lg font-semibold text-sm transition-colors shadow-md"
                data-ocid="hero.primary_button"
              >
                Explore Our Products
              </button>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/90 text-white px-7 py-3 rounded-lg font-semibold text-sm transition-colors border border-white/20"
                data-ocid="hero.secondary_button"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ── */}
      <section id="products" className="bg-white py-[72px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-brand-green text-xs font-bold uppercase tracking-[3px] mb-3">
              Our Products
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-brand-charcoal uppercase tracking-tight">
              High-Quality Fencing Solutions
            </h2>
            <p className="text-muted-foreground mt-3 max-w-[500px] mx-auto text-sm leading-relaxed">
              We manufacture and supply premium fencing materials for
              residential, agricultural, and industrial applications.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            data-ocid="products.list"
          >
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="bg-white border border-border rounded-xl p-5 flex flex-col gap-3 shadow-card hover:shadow-card-hover transition-shadow"
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="text-3xl">{product.icon}</div>
                <h3 className="font-display font-bold text-[16px] text-brand-charcoal">
                  {product.name}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">
                  {product.description}
                </p>
                <a
                  href={whatsappProductLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-brand-green hover:text-brand-green-dark font-semibold text-sm transition-colors mt-1"
                  data-ocid={`products.button.${i + 1}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section
        id="about"
        className="py-[72px]"
        style={{ background: "oklch(0.97 0.005 255)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-brand-green text-xs font-bold uppercase tracking-[3px] mb-3">
                About Us
              </span>
              <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-brand-charcoal mb-6">
                Trusted Fencing Experts in Kadapa
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                Karthik Traders is a leading fencing manufacturer and seller
                based in Kadapa, Andhra Pradesh. We specialize in manufacturing
                and supplying high-quality fencing materials catering to retail
                and wholesale customers across the region.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                With years of expertise in the fencing industry, we offer an
                extensive range of products including chain link mesh, barbed
                wire, GI wire, cement poles, fencing stones, iron poles, GI
                poles, and solar wire — all manufactured to the highest
                standards of quality and durability.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {FEATURES.map((f, i) => (
                  <div
                    key={f.title}
                    className="bg-white rounded-xl p-4 border border-border shadow-xs"
                    data-ocid={`about.item.${i + 1}`}
                  >
                    <p className="font-display font-bold text-sm text-brand-charcoal mb-1.5">
                      {f.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/hero-fencing.dim_1200x600.jpg"
                  alt="Karthik Traders fencing products"
                  className="w-full h-[380px] object-cover"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute -bottom-5 -left-5 bg-brand-green text-white rounded-xl p-4 shadow-float">
                <p className="font-display font-bold text-2xl">8+</p>
                <p className="text-xs font-medium opacity-90">
                  Products Available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="py-[72px] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-brand-green text-xs font-bold uppercase tracking-[3px] mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold text-brand-charcoal">
              Contact Us
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Ready to order or have questions? Reach out to us directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[860px] mx-auto">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="bg-white border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid="contact.card"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-brand-charcoal mb-1.5">
                  Our Address
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  74-145-1, Opposite of Sri Vijayadurgamma Temple,
                  <br />
                  Lohianagar, Kadapa — 516001,
                  <br />
                  Andhra Pradesh
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid="contact.card"
            >
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-brand-charcoal mb-1.5">
                  Phone
                </p>
                <a
                  href="tel:+918074055285"
                  className="text-sm text-brand-green hover:text-brand-green-dark font-semibold transition-colors"
                  data-ocid="contact.link"
                >
                  +91 80740 55285
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Call or WhatsApp
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white border border-border rounded-xl p-6 flex flex-col items-center text-center gap-3 shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid="contact.card"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-brand-charcoal mb-1.5">
                  Email
                </p>
                <a
                  href="mailto:sivasanke872@gmail.com"
                  className="text-sm text-brand-blue hover:text-brand-blue/80 font-semibold transition-colors break-all"
                  data-ocid="contact.link"
                >
                  sivasanke872@gmail.com
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Email us anytime
                </p>
              </div>
            </motion.div>
          </div>

          {/* WhatsApp Order CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 sm:p-8">
              <div className="text-left">
                <p className="font-display font-bold text-[18px] text-brand-charcoal">
                  Ready to place an order?
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Chat with us on WhatsApp for quick quotes and ordering.
                </p>
              </div>
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3 rounded-full font-semibold text-sm transition-colors shadow-md whitespace-nowrap shrink-0"
                data-ocid="contact.primary_button"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-brand-footer py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-display font-bold text-[15px] text-white">
                    Karthik Traders
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                    Fencing Solutions
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[260px]">
                Premium fencing manufacturer and supplier serving retail and
                wholesale customers across Andhra Pradesh.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-white text-sm font-bold uppercase tracking-widest mb-5">
                Quick Links
              </p>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleScroll(link.id)}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <p className="text-white text-sm font-bold uppercase tracking-widest mb-5">
                Contact Info
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    74-145-1, Opp. Sri Vijayadurgamma Temple, Lohianagar, Kadapa
                    — 516001, AP
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-green shrink-0" />
                  <a
                    href="tel:+918074055285"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    +91 80740 55285
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-green shrink-0" />
                  <a
                    href="mailto:sivasanke872@gmail.com"
                    className="text-sm text-slate-400 hover:text-white transition-colors break-all"
                  >
                    sivasanke872@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Karthik Traders. All rights
              reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-green transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={WHATSAPP_GENERAL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-5 py-3 rounded-full font-semibold text-sm shadow-float transition-colors animate-pulse-gentle"
        aria-label="Order on WhatsApp"
        data-ocid="whatsapp.button"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Order on WhatsApp</span>
      </a>
    </div>
  );
}
