import { useState } from 'react';
import { 
  Building2, Handshake, Award, FileText, Download, CheckCircle2, 
  ArrowRight, Users, Sparkles, Shield, DollarSign, Calendar, 
  Clock, TrendingUp, ExternalLink, MessageCircle, ChevronRight, Calculator
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'summary' | 'csr' | 'hiring' | 'facility'>('summary');
  const [santriCount, setSantriCount] = useState<number>(5);

  const packages = [
    {
      id: 'csr',
      title: "Beasiswa Penuh Santri Dhuafa",
      tagline: "Penyaluran CSR Pendidikan Berkelanjutan",
      investment: "Rp 1.500.000 / santri / bulan",
      benefits: [
        "Laporan perkembangan akademik & hafalan santri binaan setiap bulan",
        "Pencantuman logo perusahaan sebagai Official Education Sponsor",
        "Hak prioritas pertama untuk merekrut santri binaan saat lulus",
        "Dokumentasi penyerahan beasiswa & bukti penyaluran dana resmi (LPJ)"
      ]
    },
    {
      id: 'hiring',
      title: "Hiring & Internship Partner",
      tagline: "Penyaluran Kerja & Magang Industri",
      investment: "Kerjasama Kemitraan",
      benefits: [
        "Akses langsung ke database profil & portofolio alumni terverifikasi",
        "Program magang industri 6 bulan dengan pendampingan mentor pondok",
        "Kemampuan teknis teruji: Laravel, React, Flutter, REST API, Linux",
        "Garansi etika kerja: Beradab, amanah, disiplin, dan terbiasa target"
      ]
    },
    {
      id: 'facility',
      title: "Sponsor Fasilitas & Lab Komputer",
      tagline: "Wakaf Produktif Berkelanjutan",
      investment: "Pengadaan Perangkat / Server",
      benefits: [
        "Penamaan ruang lab dengan nama perusahaan / brand donor",
        "Pahala jariyah berkelanjutan dari setiap baris kode santri",
        "Peningkatan kapasitas tampung santri baru yang membutuhkan beasiswa",
        "Sertifikat apresiasi kemitraan strategis & plakat yayasan"
      ]
    }
  ];

  const calculateImpact = (count: number) => {
    return {
      totalCostMonth: count * 1500000,
      totalHoursCoding: count * 12 * 30 * 12,
      totalJuzMemorized: count * 30,
      jobReadyTalents: count
    };
  };

  const impact = calculateImpact(santriCount);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Pondok Informatika" className="w-10 h-10 object-contain drop-shadow" />
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white block leading-none">
                Proposal<span className="text-indigo-400">Kemitraan</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Pondok Informatika Corporate Portal
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://profile.pondokinformatika.id"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              Profil Lembaga
            </a>
            <a
              href="https://wa.me/6282293827200?text=Halo%20Divisi%20Kemitraan%20Pondok%20Informatika,%20kami%20ingin%20mengajukan%20MoU/kemitraan%20CSR%20atau%20Hiring."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-1.5"
            >
              <Handshake className="w-4 h-4" />
              <span>Jadwalkan Diskusi MoU</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HEADER HERO */}
      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16 text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Dokumen Kemitraan Strategis Perusahaan &amp; Institusi
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Kolaborasi Berkelanjutan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">Mencetak Talenta Digital Tangguh</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Salurkan CSR perusahaan Anda menjadi investasi SDM nyata: santri penghafal Al-Qur'an yang mahir rekayasa perangkat lunak dan siap diserap industri.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#kalkulator"
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/25 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Hitung Dampak CSR</span>
            </a>
            <a
              href="https://wa.me/6282293827200?text=Halo%20Pondok%20Informatika,%20mohon%20kirimkan%20dokumen%20PDF%20Proposal%20Resmi."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Minta PDF Proposal Resmi</span>
            </a>
          </div>
        </div>
      </header>

      {/* WHY PARTNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "100% Terserap di Industri",
              desc: "Santri tidak hanya diajarkan teori, namun 80% waktu dihabiskan untuk membangun sistem produksi nyata (real-world projects).",
              icon: TrendingUp
            },
            {
              title: "Adab, Amanah & Teruji",
              desc: "Penanaman aqidah dan hafalan Qur'an menghasilkan talenta IT yang jujur, berintegritas tinggi, dan anti-fraud.",
              icon: Shield
            },
            {
              title: "Efisiensi Biaya Rekrutmen",
              desc: "Mitra korporat mendapatkan pipeline talenta siap pakai tanpa harus mengeluarkan biaya rekrutmen agency yang mahal.",
              icon: Users
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Pilihan Kemitraan</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Skema Kolaborasi Institusional</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Pilih skema kerjasama yang selaras dengan misi dan target program CSR / HR perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1 transition-all group shadow-xl"
            >
              <div>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{pkg.tagline}</span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-indigo-400 transition-colors">{pkg.title}</h3>
                <div className="text-sm font-extrabold text-slate-200 mt-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
                  {pkg.investment}
                </div>

                <div className="mt-6 space-y-3">
                  {pkg.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/6282293827200?text=Halo%20Pondok%20Informatika,%20kami%20tertarik%20dengan%20skema%20${encodeURIComponent(pkg.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Pilih Skema Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT CALCULATOR */}
      <section id="kalkulator" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Kalkulator Dampak Sosial</span>
            <h3 className="text-2xl font-black text-white mt-1">Hitung Efektivitas Dana CSR Anda</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Geser slider untuk melihat berapa banyak talenta santri yang terangkat kualitas hidup dan karirnya dari alokasi beasiswa perusahaan Anda.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center text-sm font-bold text-slate-200 mb-2">
              <span>Jumlah Santri Dhuafa yang Disponsori:</span>
              <span className="text-xl text-indigo-400">{santriCount} Santri</span>
            </div>
            <input 
              type="range" 
              min={1} 
              max={25} 
              value={santriCount}
              onChange={(e) => setSantriCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Total Investasi / Bln</span>
              <p className="text-base sm:text-lg font-black text-white mt-1">{formatRupiah(impact.totalCostMonth)}</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Jam Coding / Thn</span>
              <p className="text-base sm:text-lg font-black text-emerald-400 mt-1">{impact.totalHoursCoding.toLocaleString()} Jam</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Target Hafalan Qur'an</span>
              <p className="text-base sm:text-lg font-black text-sky-400 mt-1">{impact.totalJuzMemorized} Juz Mutqin</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-xs text-slate-400">Talenta Siap Kerja</span>
              <p className="text-base sm:text-lg font-black text-indigo-400 mt-1">{impact.jobReadyTalents} Orang</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/6282293827200?text=Halo%20Pondok%20Informatika,%20kami%20ingin%20mensponsori%20beasiswa%20CSR%20untuk%20${santriCount}%20santri.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/25 transition-all"
            >
              <Handshake className="w-4 h-4" />
              <span>Ajukan Kemitraan untuk {santriCount} Santri</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto bg-slate-950 border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Portal Proposal Kemitraan CSR — Yayasan Pondok Informatika.</p>
      </footer>
    </div>
  );
}
