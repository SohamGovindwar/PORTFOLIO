"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  GraduationCap,
  Award,
  ChevronDown,
  MapPin,
  Calendar,
  Star,
  Zap,
  Rocket,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <motion.div className="absolute inset-0 opacity-30" style={{ y: backgroundY }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
            >
              SG
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                SOHAM
              </span>
              <br />
              <span className="text-white">GOVINDWAR</span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer crafting digital experiences with cutting-edge technologies
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                <Rocket className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-left">
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        I'm a passionate Full Stack Developer with expertise in modern web technologies. Currently
                        pursuing B.Tech in Computer Science and Engineering at MGM College of Engineering, Nanded.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <GraduationCap className="h-5 w-5 text-purple-400" />
                          <span className="text-gray-300">B.Tech CSE • MGM College of Engineering</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-purple-400" />
                          <span className="text-gray-300">Nanded, Maharashtra</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-purple-400" />
                          <span className="text-gray-300">Jan 2021 - May 2025</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full p-1">
                          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <Code className="h-24 w-24 text-white" />
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-purple-500 rounded-full p-3">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-teal-400"></div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-black"></div>
                <Card className="ml-16 bg-white/5 border-white/10 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">React Web Developer Intern</CardTitle>
                        <CardDescription className="text-purple-400 font-medium">WebTeam PVT. LTD.</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-purple-400 text-purple-400">
                        March 2025 – June 2025
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Nasik, Maharashtra</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        Developed responsive UI using React.js, Redux, Tailwind CSS, and Bootstrap
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        Integrated REST APIs using Axios and React Query; managed auth and routing with Firebase
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        Applied Git-based version control, Agile sprints, and deployed applications via Netlify and
                        Vercel
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                        Conducted unit testing using Jest and React Testing Library
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-teal-400 rounded-full border-4 border-black"></div>
                <Card className="ml-16 bg-white/5 border-white/10 backdrop-blur-md">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">Web Developer</CardTitle>
                        <CardDescription className="text-teal-400 font-medium">
                          OctaNet Services Pvt Ltd.
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        Aug 2023 – Oct 2023
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Remote</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-teal-400 mt-1 flex-shrink-0" />
                        Developed scalable Python applications, integrated third-party APIs with security measures
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-teal-400 mt-1 flex-shrink-0" />
                        Focused on performance tuning and code quality through code reviews and DevOps standards
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">Internskool</CardTitle>
                    <ExternalLink className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                  </div>
                  <CardDescription className="text-gray-300">Internship Management Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Web-based platform for managing student internships with React.js frontend and Firebase backend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Firebase", "Tailwind CSS", "Node.js"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Student Dashboard & Admin Panel</li>
                    <li>• Firebase Authentication</li>
                    <li>• Video Tutorials & Task Tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-white">CMS Website</CardTitle>
                  <CardDescription className="text-gray-300">Blog Publishing Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Content Management System for news/blog content with admin dashboard and rich-text editing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Firebase", "Firestore", "JWT"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-teal-500/20 text-teal-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Admin Dashboard</li>
                    <li>• Rich-text Editor</li>
                    <li>• Role-based Access</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Weather Forecasting</CardTitle>
                  <CardDescription className="text-gray-300">Web-Based Weather System</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Responsive SPA using OpenWeatherMap API displaying real-time weather statistics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "Flask", "REST APIs", "Bootstrap"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Real-time Weather Data</li>
                    <li>• Responsive Design</li>
                    <li>• API Integration</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  skills: ["React.js", "HTML/CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
                  color: "purple",
                },
                { category: "Backend", skills: ["Node.js", "Python", "Flask", "REST APIs", "Firebase"], color: "blue" },
                { category: "Database", skills: ["Firebase", "Firestore", "MongoDB", "SQL"], color: "teal" },
                { category: "Tools", skills: ["Git", "Docker", "AWS", "Vercel", "Netlify"], color: "pink" },
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full">
                    <CardHeader>
                      <CardTitle className={`text-xl text-${skillGroup.color}-400`}>{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {skillGroup.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-3">
                            <div className={`w-2 h-2 bg-${skillGroup.color}-400 rounded-full`}></div>
                            <span className="text-gray-300">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Certifications
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Career Essentials in Generative AI – Microsoft & LinkedIn Learning",
                "Cybersecurity and Applied Ethical Hacking – Infosys Springboard",
                "Android App Development – IIT Hyderabad",
                "Python for Data Science – Infosys Springboard",
                "Walmart USA Advanced Software Engineering Virtual Experience Program",
                "AWS APAC Solutions Architecture Virtual Experience Program",
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Award className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                        <p className="text-gray-300">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400">Email</p>
                        <p className="text-white">govindwarsoham@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-teal-500/20 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-gray-400">Phone</p>
                        <p className="text-white">+91 7822884053</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-4 pt-4"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        onClick={() => window.open("https://linkedin.com/in/soham-govindwar-4a96bb258", "_blank")}
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                        onClick={() => window.open("https://github.com/SohamGovindwar", "_blank")}
                      >
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    <div className="relative">
                      <div className="w-48 h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full p-1">
                        <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                          <Globe className="h-16 w-16 text-white animate-spin" style={{ animationDuration: "10s" }} />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-2 animate-bounce">
                        <Rocket className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Soham Govindwar. Crafted with passion and cutting-edge technology.</p>
        </div>
      </footer>
    </div>
  )
}
