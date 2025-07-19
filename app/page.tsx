import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Gamepad2, Code, Trophy } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-purple-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-400">QA</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-slate-300 hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-slate-300 hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors">
                Experience
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-purple-400 transition-colors">
                Skills
              </Link>
              <Link href="#games" className="text-slate-300 hover:text-purple-400 transition-colors">
                Games
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-purple-400 leading-tight">
                  Qasem
                  <br />
                  Alqudah
                </h1>
                <p className="text-xl text-slate-400">Game Developer | Software Engineer | Creative Problem Solver</p>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                I'm a passionate game developer with expertise in creating engaging interactive experiences across
                multiple genres. From puzzle platformers to strategy games, I love bringing creative ideas to life
                through code and design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                  View Games
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
                  asChild
                >
                  <Link href="mailto:qasemalqudah12@gmail.com">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Gamepad2 className="w-64 h-64 text-purple-400/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="w-32 h-32 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                As a dedicated game developer, I specialize in creating immersive gaming experiences that challenge and
                entertain players. My portfolio spans multiple genres including platformers, strategy games, puzzle
                games, and horror experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                I combine technical programming skills with creative game design to build memorable interactive
                experiences. Each project teaches me something new about player psychology, game mechanics, and the art
                of digital storytelling.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Game Development</h3>
                  <p className="text-slate-400 text-sm">Interactive experiences</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700/50 border-slate-600">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Programming</h3>
                  <p className="text-slate-400 text-sm">Clean, efficient code</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">Game Developer</h3>
                    <p className="text-slate-400 text-lg">Byte Shovel Games · Full-time</p>
                    <p className="text-slate-500 text-sm">Cairo, Egypt · Remote</p>
                  </div>
                  <Badge variant="outline" className="border-purple-400 text-purple-400 w-fit">
                    Jul 2025 - Present · 1 mo
                  </Badge>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Working as a full-time game developer, creating engaging gaming experiences and implementing
                  innovative gameplay mechanics. Contributing to the development pipeline from concept to release.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">Artificial Intelligence Intern</h3>
                    <p className="text-slate-400 text-lg">TJDEED Technology · Internship</p>
                    <p className="text-slate-500 text-sm">Amman, Jordan · Remote</p>
                  </div>
                  <Badge variant="outline" className="border-purple-400 text-purple-400 w-fit">
                    Jun 2025 - Present · 2 mos
                  </Badge>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Developing AI-powered solutions and machine learning applications. Gaining hands-on experience with
                  modern AI technologies and contributing to innovative projects in the tech industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400">Mobile Application Developer</h3>
                    <p className="text-slate-400 text-lg">JoVision · Internship</p>
                    <p className="text-slate-500 text-sm">Irbid, Jordan · On-site</p>
                  </div>
                  <Badge variant="outline" className="border-purple-400 text-purple-400 w-fit">
                    Apr 2024 - Aug 2024 · 5 mos
                  </Badge>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Developed mobile applications using modern frameworks and technologies. Collaborated with
                  cross-functional teams to deliver high-quality mobile solutions and gained valuable experience in the
                  software development lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Game Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Unity
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    C#
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Game Design
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    2D/3D Graphics
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Level Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    C#
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Object-Oriented Programming
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Algorithm Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Git
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    itch.io
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Photoshop
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Blender
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                    Visual Studio
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">عالم الأولان</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  A puzzle platformer game with Arabic storytelling and challenging level design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Platformer
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Puzzle
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Unity
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Timed Quest</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  A 2D platformer with time-limited gameplay mechanics that challenge player speed and precision.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    2D Platformer
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Time Limited
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Unity
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Hold The Breach</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  A strategy resource management game focused on horde survival mechanics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Strategy
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Resource Management
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Survival
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Wizard Academy</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  A deck-building colony sim game where you manage your own Academy of Magic.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Deck Building
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Colony Sim
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Card Game
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">Spinach</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  Fight for Glory, buff your body with Spinach and show 'em who is boss in this action-packed game.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Action
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Fighting
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Arcade
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">DoubleTake</h3>
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-slate-300 mb-4">
                  A horror detective work mind replication puzzle game that challenges your perception.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Horror
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Detective
                  </Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-400">
                    Puzzle
                  </Badge>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 w-full" asChild>
                  <Link href="https://qasem-gd.itch.io/" target="_blank">
                    <Trophy className="w-4 h-4 mr-2" />
                    Play on itch.io
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new game development opportunities, collaborating on creative projects,
            or sharing knowledge about game design and development.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="mailto:qasemalqudah12@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="https://www.linkedin.com/in/qasem-alqudah-6b6803306/" target="_blank">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 bg-transparent"
              asChild
            >
              <Link href="https://github.com/QasemAL" target="_blank">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">© 2025 Qasem Alqudah. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
