'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Wrench, Building2, Users, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="PT UTAMA SUKSES ENJINIRING" width={40} height={40} className="rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT UTAMA SUKSES ENJINIRING</h1>
                <p className="text-xs text-slate-600">Oil & Gas Construction Solutions</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-700 hover:text-orange-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-700 hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#projects" className="text-slate-700 hover:text-orange-600 transition-colors">Proyek</a>
              <a href="#contact" className="text-slate-700 hover:text-orange-600 transition-colors">Kontak</a>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Hubungi Kami
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-orange-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-orange-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-orange-600">Layanan</a>
              <a href="#projects" className="block px-3 py-2 text-slate-700 hover:text-orange-600">Proyek</a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-orange-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/90 z-10"></div>
        <div className="absolute inset-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Oil and Gas Construction"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              PT UTAMA SUKSES ENJINIRING
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Solusi Konstruksi Terpercaya untuk Industri Minyak dan Gas
            </p>
            <p className="text-lg mb-12 text-blue-100 max-w-3xl mx-auto">
              Spesialis dalam konstruksi fasilitas minyak dan gas dengan pengalaman bertahun-tahun, 
              teknologi modern, dan komitmen terhadap keselamatan serta kualitas terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4">
                Konsultasi Proyek
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang <span className="text-orange-600">PT UTAMA SUKSES ENJINIRING</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Perusahaan konstruksi terkemuka yang berfokus pada industri minyak dan gas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Keunggulan Kami</h3>
              <p className="text-slate-600 mb-6">
                PT UTAMA SUKSES ENJINIRING adalah perusahaan konstruksi yang berdedikasi untuk menyediakan 
                solusi terbaik dalam industri minyak dan gas. Dengan tim ahli dan teknologi modern, 
                kami memastikan setiap proyek diselesaikan dengan standar keselamatan dan kualitas tertinggi.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Keselamatan Prioritas Utama</h4>
                    <p className="text-slate-600">Standar keselamatan internasional dalam setiap proyek</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Sertifikasi Terakreditasi</h4>
                    <p className="text-slate-600">Berbagai sertifikasi industri minyak dan gas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Tim Profesional</h4>
                    <p className="text-slate-600">Ahli berpengalaman dalam konstruksi migas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <p className="text-slate-600">Tahun Pengalaman</p>
              </Card>
              <Card className="text-center p-6 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <p className="text-slate-600">Proyek Selesai</p>
              </Card>
              <Card className="text-center p-6 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                <p className="text-slate-600">Tim Profesional</p>
              </Card>
              <Card className="text-center p-6 border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                <p className="text-slate-600">Insiden Berat</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan <span className="text-orange-600">Unggulan</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan konstruksi industri minyak dan gas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Konstruksi Fasilitas Migas</h3>
              <p className="text-slate-600 mb-4">
                Pembangunan fasilitas produksi, pengolahan, dan distribusi minyak dan gas 
                dengan standar internasional.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Stasiun Pengolahan</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Fasilitas Storage</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Pipeline System</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Maintenance & Repair</h3>
              <p className="text-slate-600 mb-4">
                Layanan perawatan dan perbaikan rutin serta darurat untuk memastikan 
                operasional fasilitas berjalan optimal.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Preventive Maintenance</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Emergency Repair</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />System Upgrade</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-orange-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Engineering Consulting</h3>
              <p className="text-slate-600 mb-4">
                Konsultasi teknis dan perencanaan proyek untuk optimasi efisiensi 
                dan keamanan fasilitas migas.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Feasibility Study</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Design & Engineering</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-orange-600 mr-2" />Project Management</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyek <span className="text-orange-600">Terbaru</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Portfolio proyek-proyek konstruksi migas yang telah kami selesaikan dengan sukses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-orange-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fasilitas Pengolahan Gas - Kalimantan</h3>
                <p className="text-slate-600 mb-4">
                  Konstruksi fasilitas pengolahan gas alam dengan kapasitas 500 MMSCFD.
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock size={16} className="mr-1" />
                  <span>Selesai: 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-blue-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pipeline Project - Jawa Tengah</h3>
                <p className="text-slate-600 mb-4">
                  Pembangunan pipa transmisi minyak sepanjang 150 km dengan standar API.
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock size={16} className="mr-1" />
                  <span>Selesai: 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-orange-600"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Storage Terminal - Batam</h3>
                <p className="text-slate-600 mb-4">
                  Konstruksi terminal penyimpanan minyak dengan kapasitas 2 juta barel.
                </p>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock size={16} className="mr-1" />
                  <span>Selesai: 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hubungi <span className="text-orange-600">Kami</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Siap untuk proyek konstruksi migas Anda? Tim profesional kami siap membantu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Alamat</h4>
                    <p className="text-slate-600">
                      JL. BOULEVARD RAYA, RUKO BLOK AA15, NOMOR 1, GRAND WISATA<br />
                      KEC. TAMBUN SELATAN, KABUPATEN BEKASI<br />
                      Desa/Kelurahan Lambangsari, Kec. Tambun Selatan<br />
                      Kab. Bekasi, Provinsi Jawa Barat<br />
                      Kode Pos: 17514
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Telepon</h4>
                    <p className="text-slate-600">0823-8246-6239</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@utamasuksesenjinirng.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subjek</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="PT UTAMA SUKSES ENJINIRING" width={32} height={32} className="rounded-lg" />
                <h3 className="text-lg font-bold">PT UTAMA SUKSES ENJINIRING</h3>
              </div>
              <p className="text-slate-400">
                Solusi konstruksi terpercaya untuk industri minyak dan gas di Indonesia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Konstruksi Fasilitas</li>
                <li>Maintenance & Repair</li>
                <li>Engineering Consulting</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-orange-400">Terms & Conditions</a></li>
                <li>Tentang Kami</li>
                <li>Karir</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>0823-8246-6239</li>
                <li>info@utamasuksesenjinirng.co.id</li>
                <li>Bekasi, Jawa Barat</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PT UTAMA SUKSES ENJINIRING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}