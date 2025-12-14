'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="PT UTAMA SUKSES ENJINIRING" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT UTAMA SUKSES ENJINIRING</h1>
                <p className="text-xs text-slate-600">Oil & Gas Construction Solutions</p>
              </div>
            </Link>
            
            <Link href="/" className="flex items-center text-orange-600 hover:text-orange-700">
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-orange-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Syarat dan Ketentuan <span className="text-orange-600">PT UTAMA SUKSES ENJINIRING</span>
            </h1>
            <p className="text-lg text-slate-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pendahuluan</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Selamat datang di website PT UTAMA SUKSES ENJINIRING. Syarat dan Ketentuan ini mengatur 
                  penggunaan website, layanan, dan semua interaksi antara Anda (pengguna) dan PT UTAMA SUKSES ENJINIRING.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Dengan mengakses atau menggunakan website dan layanan kami, Anda secara tegas menyatakan 
                  persetujuan untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan 
                  bagian mana pun dari ketentuan ini, harap jangan menggunakan website kami.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Website ini dimiliki dan dioperasikan oleh PT UTAMA SUKSES ENJINIRING, perusahaan konstruksi 
                  yang bergerak di bidang industri minyak dan gas.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Definisi</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">"Perusahaan":</strong>
                    <span className="text-slate-600">PT UTAMA SUKSES ENJINIRING</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">"Website":</strong>
                    <span className="text-slate-600">Platform digital yang dimiliki dan dioperasikan oleh Perusahaan</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">"Pengguna":</strong>
                    <span className="text-slate-600">Individu atau entitas yang mengakses atau menggunakan Website</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">"Layanan":</strong>
                    <span className="text-slate-600">Jasa konstruksi, konsultasi, dan solusi teknik yang ditawarkan Perusahaan</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">"Konten":</strong>
                    <span className="text-slate-600">Semua informasi, teks, gambar, video, dan materi lainnya di Website</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Website Usage */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Penggunaan Website</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Hak dan Kewajiban Pengguna</h3>
                    <p className="text-slate-600 mb-3">Sebagai pengguna, Anda berhak untuk:</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Mengakses informasi tentang layanan dan produk Perusahaan</li>
                      <li>Mengajukan pertanyaan atau permintaan konsultasi</li>
                      <li>Menggunakan fitur-fitur yang tersedia di Website</li>
                      <li>Mendapatkan informasi akurat dan terkini tentang Perusahaan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Kewajiban Pengguna</h3>
                    <p className="text-slate-600 mb-3">Anda setuju untuk tidak:</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Menggunakan Website untuk tujuan ilegal atau melanggar hukum</li>
                      <li>Mengirimkan informasi palsu atau menyesatkan</li>
                      <li>Mencoba merusak atau mengganggu operasional Website</li>
                      <li>Menyalin atau mendistribusikan Konten tanpa izin</li>
                      <li>Menggunakan Website untuk spam atau penipuan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Terms */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Scale className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Syarat Layanan</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Pemesanan Layanan</h3>
                    <p className="text-slate-600 mb-3">
                      Untuk menggunakan layanan konstruksi kami, Anda harus:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Memberikan informasi yang akurat dan lengkap</li>
                      <li>Memiliki kapasitas hukum untuk membuat perjanjian</li>
                      <li>Mematuhi semua persyaratan teknis dan keamanan</li>
                      <li>Melakukan pembayaran sesuai dengan kesepakatan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Proyek Konstruksi</h3>
                    <p className="text-slate-600 mb-3">
                      Setiap proyek konstruksi akan diatur oleh perjanjian kontrak terpisah yang mencakup:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Scope of work yang jelas dan terperinci</li>
                      <li>Jadwal pelaksanaan dan milestone</li>
                      <li>Biaya dan struktur pembayaran</li>
                      <li>Standar kualitas dan spesifikasi teknis</li>
                      <li>Asuransi dan jaminan proyek</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Pembayaran</h3>
                    <p className="text-slate-600">
                      Pembayaran harus dilakukan sesuai dengan ketentuan yang disepakati dalam kontrak. 
                      Keterlambatan pembayaran dapat dikenakan denda sesuai dengan peraturan yang berlaku.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hak Kekayaan Intelektual</h2>
                <p className="text-slate-600 mb-4">
                  Semua Konten di Website PT UTAMA SUKSES ENJINIRING dilindungi oleh hukum hak cipta 
                  dan kekayaan intelektual lainnya. Ini termasuk namun tidak terbatas pada:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                  <li>Teks, gambar, video, dan grafis</li>
                  <li>Logo, merek dagang, dan identitas perusahaan</li>
                  <li>Desain teknis dan dokumentasi proyek</li>
                  <li>Software dan kode sumber Website</li>
                  <li>Informasi proses dan metode kerja</li>
                </ul>
                
                <p className="text-slate-600">
                  Anda tidak diperbolehkan menyalin, memodifikasi, mendistribusikan, atau menggunakan 
                  Konten untuk tujuan komersial tanpa izin tertulis dari PT UTAMA SUKSES ENJINIRING.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Penafian (Disclaimer)</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Informasi Website</h3>
                    <p className="text-slate-600">
                      PT UTAMA SUKSES ENJINIRING berusaha untuk menyediakan informasi yang akurat dan terkini, 
                      namun tidak menjamin kelengkapan, keakuratan, atau ketepatan waktu dari semua Konten.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Ketersediaan Layanan</h3>
                    <p className="text-slate-600">
                      Ketersediaan layanan konstruksi tergantung pada berbagai faktor termasuk jadwal proyek, 
                      sumber daya yang tersedia, dan persyaratan teknis. Perusahaan berhak menolak atau 
                      menunda penerimaan proyek sesuai dengan pertimbangan bisnis yang wajar.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Link Pihak Ketiga</h3>
                    <p className="text-slate-600">
                      Website mungkin mengandung link ke website pihak ketiga. Perusahaan tidak bertanggung 
                      jawab atas konten atau praktik privasi dari website pihak ketiga tersebut.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pembatasan Tanggung Jawab</h2>
                <p className="text-slate-600 mb-4">
                  Sejauh diizinkan oleh hukum yang berlaku, PT UTAMA SUKSES ENJINIRING tidak bertanggung 
                  jawab atas:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                  <li>Kerugian langsung, tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau informasi</li>
                  <li>Kerusakan sistem atau perangkat akibat penggunaan Website</li>
                  <li>Keterlambatan atau gangguan layanan</li>
                  <li>Keputusan bisnis yang dibuat berdasarkan informasi dari Website</li>
                </ul>
                
                <p className="text-slate-600">
                  Tanggung jawab maksimum Perusahaan terbatas pada nilai layanan yang dibayarkan oleh Pengguna.
                </p>
              </CardContent>
            </Card>

            {/* Force Majeure */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Force Majeure</h2>
                <p className="text-slate-600 mb-4">
                  PT UTAMA SUKSES ENJINIRING tidak bertanggung jawab atas kegagalan atau keterlambatan 
                  dalam melaksanakan kewajibannya jika disebabkan oleh kejadian di luar kendali yang wajar, 
                  termasuk namun tidak terbatas pada:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Bencana alam (gempa bumi, banjir, tsunami)</li>
                  <li>Perang, konflik, atau terorisme</li>
                  <li>Pemberontakan, kerusuhan, atau pemogokan</li>
                  <li>Kebijakan pemerintah atau peraturan baru</li>
                  <li>Pandemi atau wabah penyakit</li>
                  <li>Gangguan pasokan material atau peralatan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Penyelesaian Sengketa</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Negosiasi dan Mediasi</h3>
                    <p className="text-slate-600">
                      Setiap sengketa yang timbul dari atau berhubungan dengan Syarat dan Ketentuan ini 
                      akan terlebih dahulu diselesaikan melalui negosiasi baik antara para pihak.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Yurisdiksi</h3>
                    <p className="text-slate-600">
                      Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                      Setiap sengketa yang tidak dapat diselesaikan secara damai akan diajukan ke Pengadilan 
                      Negeri Bekasi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pembaruan Syarat dan Ketentuan</h2>
                <p className="text-slate-600 leading-relaxed">
                  PT UTAMA SUKSES ENJINIRING berhak untuk memperbarui Syarat dan Ketentuan ini kapan saja. 
                  Perubahan akan diberlakukan segera setelah dipublikasikan di Website. Pengguna disarankan 
                  untuk secara berkala meninjau Syarat dan Ketentuan ini. Penggunaan Website yang berkelanjutan 
                  setelah perubahan constitutes persetujuan Anda terhadap Syarat dan Ketentuan yang diperbarui.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-orange-50 border-orange-200">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
                <p className="text-slate-600 mb-6">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <strong className="text-slate-900 mr-2">Email:</strong>
                    <span className="text-slate-600">legal@utamasuksesenjinirng.co.id</span>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-slate-900 mr-2">Telepon:</strong>
                    <span className="text-slate-600">0823-8246-6239</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-slate-900 mr-2">Alamat:</strong>
                    <span className="text-slate-600">
                      JL. BOULEVARD RAYA, RUKO BLOK AA15, NOMOR 1, GRAND WISATA<br />
                      KEC. TAMBUN SELATAN, KABUPATEN BEKASI<br />
                      Kode Pos: 17514
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              &copy; 2024 PT UTAMA SUKSES ENJINIRING. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}