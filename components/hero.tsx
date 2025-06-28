import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-4xl font-bold">
              M
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Blockchain Ecosystem &
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security Architect
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Forging secure, transparent pathways to decentralized financial freedom. Building the future of digital assets
          with cutting-edge Web3 solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            Get In Touch
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}
