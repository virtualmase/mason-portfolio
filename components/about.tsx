import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>

          <Card className="p-8 shadow-lg">
            <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Greetings! I'm Mason, a dedicated blockchain strategist focused on accelerating ecosystem growth within
                the decentralized space. My expertise lies in architecting robust knowledge infrastructure, driving
                organic adoption through generative search, and ensuring uncompromised digital security.
              </p>

              <p>
                I embody an entrepreneurial spirit and a "big picture" perspective, always ready to 'roll up my sleeves'
                and execute. My strategies are data-driven, leveraging on-chain insights for impactful solutions. I
                operate with radical transparency, fostering authentic communication and collaborative synergy.
              </p>

              <p>
                Known for an adventurous approach, I'm unafraid to explore unconventional solutions or navigate complex
                challenges to deliver secure and scalable digital asset solutions. My commitment to continuous learning
                drives me to always deliver cutting-edge, high-quality results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
