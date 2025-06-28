import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Quantum Nexus",
    description:
      "Complex data visualization leveraging cutting-edge web capabilities. Making abstract quantum concepts accessible through interactive design.",
    tags: ["React", "D3.js", "Data Visualization"],
    liveUrl: "https://quantum-nexus-blond.vercel.app/",
    category: "Data Visualization",
  },
  {
    title: "Virtual Lighthouse Node",
    description:
      "Interactive 3D simulation showcasing real-time data visualization and navigational concepts for complex environments.",
    tags: ["Three.js", "Real-time Data", "3D Simulation"],
    liveUrl: "https://virtual-lighthouse-node.vercel.app/",
    category: "3D Simulation",
  },
  {
    title: "Subnet63 Quantum",
    description:
      "Secure and high-performance networking application focusing on robust data management and infrastructure principles.",
    tags: ["Python", "Networking", "Security"],
    liveUrl: "https://subnet63-quantum.vercel.app/",
    category: "Infrastructure",
  },
  {
    title: "Athenax Gamma",
    description:
      "Advanced data analytics and visualization platform providing actionable insights from complex datasets.",
    tags: ["Angular", "Analytics", "Data Visualization"],
    liveUrl: "https://athenax-gamma.vercel.app/",
    category: "Analytics",
  },
  {
    title: "Coreweaver Labs",
    description:
      "R&D hub for exploring foundational Web3 strategies and innovative knowledge infrastructure solutions.",
    tags: ["Web3", "R&D", "Innovation"],
    liveUrl: "https://coreweaver-labs.vercel.app/",
    category: "Web3",
  },
  {
    title: "DGN (GoldHaven)",
    description:
      "Robust digital asset network framework focused on secure, transparent transactions and decentralized data flow.",
    tags: ["Blockchain", "Digital Assets", "DeFi"],
    liveUrl: "https://dgn-nu.vercel.app/",
    category: "Blockchain",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
