import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Zap, Star, Heart, PenTool } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-blue-100 px-4 py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              ResumePro.my
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#utama" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
              Utama
            </Link>
            <Link href="#harga" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
              Harga
            </Link>
            <Link href="#hubungi" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">
              Hubungi
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="utama" className="px-4 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-32 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-48 left-32 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-32 left-20 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-black text-balance">
                Nak Resume{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Power Gila
                </span>
                ? 🚀🔥
              </h1>
              <p className="text-lg md:text-xl text-gray-700 text-pretty font-medium">
                Template mesra ATS + custom resume untuk pelajar, fresh grad & profesional muda 💼✨
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:animate-bounce transition-all duration-300"
              >
                <Link href="https://toyyibpay.com/your-link-here">🔥 Tempah Sekarang</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-3">
                      <div className="w-36 h-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mx-auto"></div>
                      <div className="w-28 h-4 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full mx-auto"></div>
                      <div className="w-32 h-4 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mx-auto"></div>
                    </div>
                    <p className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Resume Approved! 🎉
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-gradient-to-r from-purple-100 to-pink-100">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Pricing Section */}
      <section id="harga" className="px-4 py-16 bg-gradient-to-br from-white to-blue-50 relative">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              🔥{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Pilih Pakej Anda
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-medium">Semua pakej mesra ATS & siap untuk guna! 💪</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative border-0 bg-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-teal-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-4xl mb-2">📝</div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Basic</CardTitle>
                <CardDescription className="text-4xl font-black text-blue-600">RM10</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">1 Template Resume (Format Word)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Mesra ATS</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-500 hover:to-teal-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://toyyibpay.com/basic-link">👉 Beli Sekarang</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-0 bg-white shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/10"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <div className="absolute -top-3 right-4 z-20">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  💡 Popular
                </span>
              </div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-4xl mb-2">📄</div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                <CardDescription className="text-4xl font-black text-yellow-600">RM17</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Template Resume (Word + Google Docs)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Contoh Resume Disertakan</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://toyyibpay.com/standard-link">👉 Beli Sekarang</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-0 bg-white shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 rounded-3xl overflow-hidden group scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/10"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  🔥 Best Value
                </span>
              </div>
              <CardHeader className="text-center pb-4 relative z-10 pt-8">
                <div className="text-4xl mb-2">🎨</div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Premium</CardTitle>
                <CardDescription className="text-4xl font-black text-green-600">RM20</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      Template Resume (Word + Google Docs + Canva)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Contoh Resume + Panduan Tips PDF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Versi Fresh Grad, SPM & Profesional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">BM & English</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://toyyibpay.com/premium-link">👉 Beli Sekarang</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-0 bg-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-purple-500/10"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 to-purple-500"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-4xl mb-2">✍️</div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Custom Service</CardTitle>
                <CardDescription className="text-4xl font-black text-pink-600">RM25</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Resume dibuat khas untuk anda</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">Rekaan + Kandungan Personalised</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://toyyibpay.com/custom-link">👉 Tempah Sekarang</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Confetti background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-8 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-12 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-8 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-16 right-8 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-20 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-200"></div>
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-yellow-200">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              Lebih 500+ resume dah dibeli 🎉 Ramai dah dapat kerja!
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              Join komuniti yang dah berjaya upgrade career mereka! 💼✨
            </p>
          </div>
        </div>
      </section>

      <div className="relative rotate-180">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-gradient-to-r from-purple-900 to-black">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Footer */}
      <footer
        id="hubungi"
        className="bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white px-4 py-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="mx-auto max-w-6xl text-center space-y-8 relative z-10">
          <p className="text-xl text-purple-200 font-medium">Mesra ATS, Harga Mesra Pelajar. 🚀</p>
          <p className="text-lg text-purple-300">Tak dapat email lepas bayar? Hubungi kami 👉 WhatsApp</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href="https://wa.me/60123456789">💬 WhatsApp Sekarang</Link>
          </Button>

          <div className="flex justify-center gap-8 pt-6">
            <Link
              href="https://tiktok.com/@yourusername"
              className="flex items-center gap-2 text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300 font-medium text-lg"
            >
              <Heart className="w-6 h-6" />
              TikTok
            </Link>
            <Link
              href="https://wa.me/60123456789"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 hover:scale-110 transition-all duration-300 font-medium text-lg"
            >
              <span className="w-6 h-6 text-2xl">💬</span>
              WhatsApp
            </Link>
          </div>

          <div className="border-t border-purple-800 pt-8">
            <p className="text-purple-300 font-medium">© 2025 ResumePro.my - Buat Resume Power! 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
