import Link from "next/link"
import { ArrowLeft, Linkedin, Facebook, Grid } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-300">
      <header className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-[#b4ff39] text-xl mb-2">05.</p>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-[#b4ff39]"></div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">get in touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's create something <span className="text-[#b4ff39]">amazing</span> together
            </h3>

            <p className="text-gray-300 mb-10">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discusss how we can work
              together to bring your ideas to life.
            </p>

            <div className="mb-8">
              <p className="text-[#b4ff39] uppercase text-sm font-medium mb-4">CONNECT WITH ME</p>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com"
                  className="bg-[#222222] p-3 rounded-md hover:bg-[#333333] transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="bg-[#222222] p-3 rounded-md hover:bg-[#333333] transition-colors"
                >
                  <Facebook size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#b4ff39] transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-transparent border border-gray-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#b4ff39] transition-colors resize-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-[#b4ff39] text-black font-medium px-6 py-3 rounded-md hover:bg-[#a3e635] transition-colors"
                >
                  <Grid className="mr-2" size={18} />
                  Let's Start
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-gray-800 mt-12 max-w-6xl">
        <div className="text-center text-gray-500 text-sm">2025 © Martin Sit</div>
      </footer>
    </div>
  )
}

