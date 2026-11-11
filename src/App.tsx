import { useState } from 'react';
import { 
  Building2, Award, Users, CheckCircle2, 
  ArrowRight, HeartHandshake,
  TrendingUp, Download, Calendar
} from 'lucide-react';

export default function App() {
  const [santriTargetCount, setSantriTargetCount] = useState<number>(5);
  const [selectedScheme, setSelectedScheme] = useState<string>('beasiswa');

  const costPerSantri = 1500000; // Rp 1.500.000 / bulan include asrama, makan, kurikulum, workstation
  const totalInvestmentMonthly = santriTargetCount * costPerSantri;
  const totalInvestmentYearly = totalInvestmentMonthly * 12;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const schemes = [
    {
      key: 'beasiswa',
      title: 'Beasiswa Penuh Santri IT',
      badge: 'Paling Diminati',
      desc: 'Membiayai kebutuhan pendidikan intensif santri dhuafa selama 1 tahun (living cost asrama, konsumsi halal thoyyib, modul, workstation).',
      benefits: [
        'Laporan perkembangan hafalan Qur\'an & coding berkala per kuartal',
        'Hak rekrutmen prioritas santri sebelum lulus (talent pipeline)',
        'Penyematan logo perusahaan sponsor di laman pendukung resmi',
        'Sertifikat apresiasi & pelaporan CSR audit-ready'
      ]
    },
    {
      key: 'lab',
      title: 'Wakaf & Sponsor Workstation Lab',
      badge: 'Infrastruktur',
      desc: 'Pengadaan PC workstation spesifikasi tinggi, dual-monitor, dan lisensi software enterprise untuk menunjang praktik engineering santri.',
      benefits: [
        'Plakat nama perusahaan/donatur pada meja workstation santri',
        'Kunjungan industri & sesi mentoring santri bersama tim tech sponsor',
        'Publikasi media sosial & dokumentasi serah terima fasilitas',
        'Dampak pemanfaatan fasilitas berulang lintas angkatan santri'
      ]
    },
    {
      key: 'proyek',
      title: 'Kemitraan Inkubasi Proyek Riil',
      badge: 'Kolaborasi Industri',
      desc: 'Perusahaan memberikan studi kasus nyata atau modul sistem internal untuk dikerjakan tim santri di bawah supervisi mentor senior.',
      benefits: [
        'Solusi software custom dengan efisiensi biaya development CSR',
        'Santri terbiasa standar deliverable industri sebelum masa magang',
        'Ownership kode dan lisensi diserahkan sepenuhnya ke mitra',
        'Kontrak kerja sama MoU resmi dan jaminan NDA'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Pondok Informatika" className="w-10 h-10 object-contain drop-shadow-sm" />
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-950 block leading-none">
                Pondok<span className="text-indigo-600">Partner</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                CSR &amp; Corporate Partnership Deck
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="#kalkulator"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Simulasi CSR
            </a>
            <a
              href="https://wa.me/6283134086899?text=Halo%20Pimpinan%20Pondok%20Informatika,%20perusahaan%20kami%20ingin%20mendiskusikan%20kemitraan%20CSR%20atau%20MoU%20beasiswa."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwalkan Audiensi</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-36 pb-20 sm:pt-44 sm:pb-24 text-center relative bg-gradient-to-b from-indigo-50/60 via-white to-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-bold mb-6 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            Program Kemitraan Strategis Berkelanjutan 2026–2030
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Investasi Sosial Nyata: <span className="text-indigo-600">Mencetak Talenta Digital</span> Berakhlak Qur'ani
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Salurkan alokasi CSR dan dana kebajikan perusahaan Anda menjadi beasiswa pendidikan coding intensif gratis untuk pemuda muslim dhuafa &amp; yatim berprestasi.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#skema"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Pelajari Skema Kemitraan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6283134086899?text=Mohon%20kirimkan%20dokumen%20Proposal%20Lengkap%20CSR%20Pondok%20Informatika%20(PDF)."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span>Unduh Dokumen Proposal (PDF)</span>
            </a>
          </div>
        </div>
      </header>

      {/* WHY PARTNER SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Keunggulan Kemitraan</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-1">Mengapa Bermitra dengan Kami?</h2>
            <p className="text-sm text-slate-600 mt-3">
              Kombinasi akuntabilitas laporan dana sosial dengan hasil nyata pengentasan kemiskinan melalui keahlian IT bernilai tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dampak Jangka Panjang (Sustainable)",
                desc: "Bukan sekadar santunan konsumtif sekali habis. Santri dibekali keterampilan software engineering yang mengangkat taraf ekonomi keluarganya secara mandiri seumur hidup.",
                icon: TrendingUp
              },
              {
                title: "Talent Pipeline Berkualitas",
                desc: "Perusahaan mitra mendapatkan prioritas utama dalam merekrut lulusan santri berakhlak amanah, berdisiplin tinggi, dan terbiasa dengan etos kerja terarah.",
                icon: Users
              },
              {
                title: "Akuntabilitas & Audit-Ready",
                desc: "Laporan penggunaan dana CSR, absensi belajar, catatan setoran tahfidz, dan pencapaian portofolio aplikasi santri dilaporkan transparan dan sistematis.",
                icon: Award
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP SCHEMES */}
      <section id="skema" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Fleksibel &amp; Terarah</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-1">Pilihan Skema Kolaborasi</h2>
            <p className="text-sm text-slate-600 mt-3">
              Sesuaikan dengan sasaran CSR perusahaan Anda, mulai dari beasiswa personal hingga program inkubasi produk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {schemes.map((s) => {
              const active = selectedScheme === s.key;
              return (
                <div
                  key={s.key}
                  onClick={() => setSelectedScheme(s.key)}
                  className={`rounded-3xl p-8 border transition-all cursor-pointer flex flex-col justify-between ${
                    active 
                      ? 'bg-indigo-50/50 border-indigo-400 shadow-lg ring-1 ring-indigo-400' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 inline-block mb-4">
                      {s.badge}
                    </span>
                    <h3 className="text-xl font-black text-slate-950 mb-3">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{s.desc}</p>

                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Benefit Mitra:</h4>
                    <ul className="space-y-2.5">
                      {s.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 mt-6 border-t border-slate-200/80">
                    <a
                      href={`https://wa.me/6283134086899?text=Halo%20Pondok%20Informatika,%20kami%20tertarik%20dengan%20skema%20${encodeURIComponent(s.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs text-center block shadow-md shadow-indigo-600/20"
                    >
                      Pilih Skema Ini
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT CALCULATOR */}
      <section id="kalkulator" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Simulasi Investasi Sosial</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                Kalkulator Dampak CSR
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Geser slider untuk melihat estimasi dukungan beasiswa santri dan rincian alokasi biaya pendidikan.
              </p>
            </div>

            <div className="space-y-6 max-w-lg mx-auto">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700">Jumlah Santri Yang Dibiayai:</label>
                  <span className="text-lg font-black text-indigo-600">{santriTargetCount} Santri</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={santriTargetCount}
                  onChange={(e) => setSantriTargetCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Santri</span>
                  <span>10 Santri</span>
                  <span>20 Santri</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Investasi Bulanan:</span>
                  <span className="text-xl font-black text-slate-950">{formatRupiah(totalInvestmentMonthly)}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">({santriTargetCount} x Rp 1,5 Jt/bln)</span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 block">Total Komitmen 1 Tahun:</span>
                  <span className="text-xl font-black text-indigo-600">{formatRupiah(totalInvestmentYearly)}</span>
                  <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">Mencetak {santriTargetCount} Programmer Mutqin</span>
                </div>
              </div>

              <a
                href={`https://wa.me/6283134086899?text=Halo%20Pimpinan%20Pondok%20Informatika,%20perusahaan%20kami%20ingin%20mengajukan%20dukungan%20beasiswa%20untuk%20${santriTargetCount}%20santri%20dengan%20estimasi%20${encodeURIComponent(formatRupiah(totalInvestmentYearly))}/tahun.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm text-center shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Ajukan Komitmen Beasiswa Ini</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} CSR &amp; Partnership Portal — Yayasan Pondok Informatika Al-Bashirah.</p>
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <a href="https://pondokinformatika.id" className="hover:text-slate-900">Portal Utama</a>
            <a href="https://profile.pondokinformatika.id" className="hover:text-slate-900">Profile</a>
            <a href="https://katalog.pondokinformatika.id" className="hover:text-slate-900">Katalog</a>
            <a href="https://donasi.pondokinformatika.id" className="hover:text-slate-900">Donasi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
