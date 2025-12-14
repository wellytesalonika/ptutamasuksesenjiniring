'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Shield className="text-orange-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi <span className="text-orange-600">PT UTAMA SUKSES ENJINIRING</span>
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
                  Selamat datang di PT UTAMA SUKSES ENJINIRING. Kami sangat menghargai privasi Anda dan berkomitmen 
                  untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                  ketika Anda menggunakan website dan layanan kami.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Dengan menggunakan website PT UTAMA SUKSES ENJINIRING, Anda menyetujui praktik-praktik yang 
                  dijelaskan dalam kebijakan privasi ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Database className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Informasi yang Kami Kumpulkan</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Informasi Pribadi</h3>
                    <p className="text-slate-600 mb-3">
                      Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela, termasuk:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat perusahaan</li>
                      <li>Informasi pekerjaan dan jabatan</li>
                      <li>Informasi proyek yang ditawarkan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Informasi Teknis</h3>
                    <p className="text-slate-600 mb-3">
                      Kami secara otomatis mengumpulkan informasi teknis ketika Anda mengakses website kami:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
                      <li>Alamat IP</li>
                      <li>Jenis browser dan versi</li>
                      <li>Sistem operasi</li>
                      <li>Halaman yang dikunjungi</li>
                      <li>Waktu akses dan durasi kunjungan</li>
                      <li>Informasi perangkat</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Cookies</h3>
                    <p className="text-slate-600">
                      Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah 
                      file teks kecil yang disimpan di browser Anda untuk mengingat preferensi dan aktivitas Anda.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Usage */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Penggunaan Informasi</h2>
                </div>
                
                <p className="text-slate-600 mb-4">
                  PT UTAMA SUKSES ENJINIRING menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Merespons pertanyaan dan permintaan informasi layanan</li>
                  <li>Memberikan penawaran dan konsultasi proyek konstruksi</li>
                  <li>Mengelola hubungan bisnis dengan klien dan mitra</li>
                  <li>Meningkatkan kualitas layanan dan website kami</li>
                  <li>Mengirimkan informasi tentang layanan dan proyek terbaru</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                  <li>Melakukan analisis pasar dan penelitian pengembangan bisnis</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lock className="text-orange-600 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-slate-900">Perlindungan Data</h2>
                </div>
                
                <p className="text-slate-600 mb-4">
                  PT UTAMA SUKSES ENJINIRING berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas hanya untuk staf yang berwenang</li>
                  <li>Protokol keamanan fisik dan digital yang ketat</li>
                  <li>Backup data secara berkala dan aman</li>
                  <li>Monitoring keamanan 24/7 untuk mendeteksi ancaman</li>
                  <li>Update sistem keamanan secara berkala</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pembagian Informasi</h2>
                <p className="text-slate-600 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Untuk mitra bisnis yang terlibat langsung dalam proyek konstruksi</li>
                  <li>Ketika diwajibkan oleh hukum atau peraturan pemerintah</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan PT UTAMA SUKSES ENJINIRING</li>
                  <li>Dalam kasus transfer bisnis (merger atau akuisisi)</li>
                  <li>Dengan penyedia layanan terpercaya yang membantu operasional kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hak Anda Sebagai Pengguna</h2>
                <p className="text-slate-600 mb-4">
                  Sebagai pemilik data pribadi, Anda memiliki hak untuk:
                </p>
                
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Mengakses dan meninjau data pribadi yang kami simpan</li>
                  <li>Memperbaiki data pribadi yang tidak akurat</li>
                  <li>Menghapus data pribadi sesuai dengan ketentuan hukum</li>
                  <li>Menolak penggunaan data untuk tujuan pemasaran</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Membatasi pemrosesan data pribadi Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Pembaruan Kebijakan</h2>
                <p className="text-slate-600 leading-relaxed">
                  PT UTAMA SUKSES ENJINIRING dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk 
                  mencerminkan perubahan dalam praktik bisnis atau peraturan hukum yang berlaku. Setiap perubahan 
                  akan diberitahukan melalui website kami atau email langsung kepada pengguna terdaftar.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-orange-50 border-orange-200">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
                <p className="text-slate-600 mb-6">
                  Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, 
                  silakan hubungi kami melalui:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <strong className="text-slate-900 mr-2">Email:</strong>
                    <span className="text-slate-600">privacy@utamasuksesenjinirng.co.id</span>
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