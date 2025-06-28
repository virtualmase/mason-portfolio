import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Blockchain & Web3",
    items: ["Blockchain Ecosystem Development", "On-chain Security", "DLT Fundamentals", "Smart Contract Auditing"],
  },
  {
    category: "Data & Analytics",
    items: ["On-Chain Analytics", "Generative Search", "Data Visualization", "Performance Metrics"],
  },
  {
    category: "Infrastructure",
    items: ["Knowledge Infrastructure", "Decentralized Systems", "Network Architecture", "Security Protocols"],
  },
  {
    category: "Strategy & Growth",
    items: ["Ecosystem Growth", "Content Strategy", "Digital Asset Strategy", "Community Building"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Core Expertise & Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4 text-blue-900">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
