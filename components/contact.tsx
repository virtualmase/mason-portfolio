import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Let's Connect</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Ready to build the future of finance?</h3>
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in discussing new opportunities, collaborations, and innovative blockchain projects.
              Let's explore how we can work together to create secure and scalable Web3 solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">mason@coreweaver.dev</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project collaboration" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project or idea..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
