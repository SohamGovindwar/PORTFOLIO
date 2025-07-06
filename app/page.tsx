"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
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
  FileText,
  Download,
} from "lucide-react"

// Color mapping function to ensure Tailwind classes are compiled
const getColorClasses = (color: string) => {
  const colorMap = {
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-400",
      border: "border-purple-400",
      bgOpacity: "bg-purple-500/20",
      textHover: "text-purple-300",
      bgHover: "bg-purple-500",
    },
    teal: {
      text: "text-teal-400",
      bg: "bg-teal-400",
      border: "border-teal-400",
      bgOpacity: "bg-teal-500/20",
      textHover: "text-teal-300",
      bgHover: "bg-teal-500",
    },
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-400",
      border: "border-blue-400",
      bgOpacity: "bg-blue-500/20",
      textHover: "text-blue-300",
      bgHover: "bg-blue-500",
    },
    yellow: {
      text: "text-yellow-400",
      bg: "bg-yellow-400",
      border: "border-yellow-400",
      bgOpacity: "bg-yellow-500/20",
      textHover: "text-yellow-300",
      bgHover: "bg-yellow-500",
    },
    sky: {
      text: "text-sky-400",
      bg: "bg-sky-400",
      border: "border-sky-400",
      bgOpacity: "bg-sky-500/20",
      textHover: "text-sky-300",
      bgHover: "bg-sky-500",
    },
    amber: {
      text: "text-amber-400",
      bg: "bg-amber-400",
      border: "border-amber-400",
      bgOpacity: "bg-amber-500/20",
      textHover: "text-amber-300",
      bgHover: "bg-amber-500",
    },
    rose: {
      text: "text-rose-400",
      bg: "bg-rose-400",
      border: "border-rose-400",
      bgOpacity: "bg-rose-500/20",
      textHover: "text-rose-300",
      bgHover: "bg-rose-500",
    },
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.purple
}

// Custom hook for scroll progress
const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return scaleX
}

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const scrollProgress = useScrollProgress()

  // Advanced scroll transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  
  const handleViewResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/14TPhP28HooA1Q8OQz1gFEl2Uy1in2rcH/view?usp=sharing"
    window.open(resumeUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 transform-gpu z-50"
        style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full pointer-events-none"
        style={{
          translateX: mousePosition.x,
          translateY: mousePosition.y,
          opacity: scrollYProgress,
        }}
      />

      {/* Enhanced Animated Background with Advanced Floating Objects */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"
          style={{ scale: backgroundScale }}
        />

        {/* Animated Gradient Mesh */}
        <motion.div className="absolute inset-0 opacity-20" style={{ y: backgroundY }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </motion.div>

        {/* Advanced Floating Objects */}
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          {/* Geometric Shapes with Complex Animations */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${2 + (i % 4)} h-${2 + (i % 4)} bg-gradient-to-r from-purple-400/20 to-teal-400/20 ${
                i % 3 === 0 ? "rounded-full" : i % 3 === 1 ? "rotate-45" : "rounded-sm"
              }`}
              style={{
                left: `${10 + ((i * 7) % 80)}%`,
                top: `${10 + ((i * 11) % 80)}%`,
              }}
              animate={{
                y: [0, -30 - (i % 20), 0],
                x: [0, 10 - (i % 20), 0],
                rotate: [0, 180 + i * 30, 360],
                scale: [1, 1.2 + (i % 3) * 0.1, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8 + (i % 5),
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Floating Code Elements */}
          {[
            { symbol: "</>", x: "20%", y: "30%" },
            { symbol: "{}", x: "80%", y: "60%" },
            { symbol: "()", x: "10%", y: "70%" },
            { symbol: "[]", x: "90%", y: "20%" },
            { symbol: "&&", x: "60%", y: "80%" },
            { symbol: "=>", x: "30%", y: "10%" },
          ].map((item, i) => (
            <motion.div
              key={item.symbol}
              className="absolute text-2xl font-mono text-purple-400/30 select-none"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            >
              {item.symbol}
            </motion.div>
          ))}

          {/* Particle System */}
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100 - Math.random() * 100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation with Scroll Effects */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              SG
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Advanced Animations */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="container mx-auto px-6 text-center z-10"
          style={{ opacity: heroOpacity, scale: heroScale, y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              >
                SOHAM
              </motion.span>
              <br />
              <motion.span
                className="text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                GOVINDWAR
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Full Stack Developer crafting digital experiences with cutting-edge technologies
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-3 relative overflow-hidden group"
                  onClick={() => scrollToSection("projects")}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-2 h-5 w-5" />
                    View My Work
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 relative overflow-hidden group"
                  onClick={handleViewResume}
                >
                  <motion.div className="absolute inset-0 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative z-10 flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 relative overflow-hidden group"
                  onClick={() => scrollToSection("contact")}
                >
                  <motion.div className="absolute inset-0 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative z-10 flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </motion.div>
      </section>

      {/* About Section with Scroll Animations */}
      <motion.section
        id="about"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <motion.div whileInView={{ rotateY: [90, 0] }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed text-justify max-w-[95%] md:max-w-[90%]">
                          "I'm a passionate Full Stack Developer with hands-on experience in building dynamic, 
                          responsive web applications using modern technologies like React, Node.js, Firebase, 
                          and Tailwind CSS. Currently pursuing a B.Tech in Computer Science and Engineering at MGM College of Engineering, 
                          Nanded, I enjoy solving real-world problems through clean, scalable code and continuously strive to learn and grow 
                          in the field of software development."
                        </p>
                        <div className="space-y-4">
                          {[
                            { icon: GraduationCap, text: "B.Tech CSE • MGM College of Engineering" },
                            { icon: MapPin, text: "Nanded, Maharashtra" },
                            { icon: Calendar, text: "Jan 2021 - May 2025" },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 10 }}
                            >
                              <item.icon className="h-5 w-5 text-purple-400" />
                              <span className="text-gray-300">{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full p-1">
                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              >
                                <Code className="h-24 w-24 text-white" />
                              </motion.div>
                            </div>
                          </div>
                          <motion.div
                            className="absolute -top-4 -right-4 bg-purple-500 rounded-full p-3"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Zap className="h-6 w-6 text-white" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Information Section with Stagger Animation */}
      <motion.section
        id="additional-info"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Additional Information
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Development Philosophy",
                icon: Code,
                color: "purple",
                content:
                  "I believe in writing clean, maintainable code that scales. My approach focuses on user-centric design, performance optimization, and following industry best practices to deliver exceptional digital experiences.",
              },
              {
                title: "Current Focus",
                icon: Zap,
                color: "teal",
                content:
                  "Currently exploring advanced React patterns, cloud architecture with AWS, and AI integration in web applications. Always eager to learn emerging technologies and contribute to open-source projects.",
              },
              {
                title: "Achievements",
                icon: Star,
                color: "blue",
                content: null,
                achievements: [
                  "Successfully deployed 5+ web applications",
                  "Contributed to platforms serving 500+ users",
                  "Completed 4+ professional certifications",
                  "Participated in national-level development workshops",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 transition-all duration-500 group">
                  <CardHeader>
                    <CardTitle className={`text-xl ${getColorClasses(item.color).text} flex items-center gap-2 group-hover:scale-110 transition-transform`}>
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.content ? (
                      <p className="text-gray-300 leading-relaxed">{item.content}</p>
                    ) : (
                      <ul className="text-gray-300 space-y-2">
                        {item.achievements?.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 py-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className={`h-5 w-5 mt-1 ${getColorClasses(item.color).text} flex-shrink-0`} />
                            <span className="text-gray-300 leading-relaxed">
                              {achievement.includes("5+") ? (
                                <>
                                  Successfully deployed <AnimatedCounter value={5} />+ web applications
                                </>
                              ) : achievement.includes("500+") ? (
                                <>
                                  Contributed to platforms serving <AnimatedCounter value={500} />+ users
                                </>
                              ) : achievement.includes("4+") ? (
                                <>
                                  Completed <AnimatedCounter value={4} />+ professional certifications
                                </>
                              ) : (
                                achievement
                              )}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section with Animated Progress */}
      <motion.section
        id="skills"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Programming Languages",
                  skills: ["JavaScript", "Python", "SQL", "HTML5", "CSS3"],
                  color: "yellow",
                },
                {
                  category: "Frontend Development",
                  skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "Responsive Design"],
                  color: "purple",
                },
                {
                  category: "Backend Development",
                  skills: ["Node.js", "Express.js", "Flask", "RESTful API Design", "JWT Authentication"],
                  color: "sky",
                },
                {
                  category: "Cloud & DevOps",
                  skills: ["Firebase", "GitHub Actions", "CI/CD", "Netlify", "Vercel", "Git", "GitHub"],
                  color: "amber",
                },
                {
                  category: "Databases",
                  skills: ["Firestore", "MongoDB", "MySQL", "Supabase"],
                  color: "teal",
                },
                {
                  category: "Testing & Tools",
                  skills: ["Jest", "React Testing Library", "Postman", "Chrome DevTools", "Agile/Scrum"],
                  color: "rose",
                },
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md h-full hover:bg-white/10 transition-all duration-500 group">
                    <CardHeader>
                      <CardTitle className={`text-xl ${getColorClasses(skillGroup.color).text} group-hover:scale-110 transition-transform flex items-center gap-2`}>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Code className="h-5 w-5" />
                        </motion.div>
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {skillGroup.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 10, scale: 1.05 }}
                          >
                            <motion.div
                              className={`w-2 h-2 ${getColorClasses(skillGroup.color).bg} rounded-full`}
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                            />
                            <span className="text-gray-300">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section with 3D Card Effects */}
      <motion.section
        id="projects"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
            {[
              {
                title: "Internskool",
                description:
                  "Comprehensive web-based platform for managing student internships with React.js frontend and Firebase backend. Features industry-ready training programs and real-time progress tracking.",
                tech: ["React.js", "Firebase", "Tailwind CSS", "Node.js", "JWT"],
                color: "purple",
                isLive: true,
                link: "https://www.internskool.com/",
                features: [
                  "Student Dashboard & Admin Panel",
                  "Firebase Authentication & Cloud Storage",
                  "Video Tutorials & Task-based Progress",
                  "5,000+ Students Trained",
                ],
              },
              {
                title: "CMS Website",
                description:
                  "Content Management System for news/blog content with admin dashboard and rich-text editing.",
                tech: ["React.js", "Firebase", "Firestore", "JWT"],
                color: "teal",
                features: ["Admin Dashboard", "Rich-text Editor", "Role-based Access"],
              },
              {
                title: "Weather Forecasting",
                description: "Responsive SPA using OpenWeatherMap API displaying real-time weather statistics.",
                tech: ["React.js", "Flask", "REST APIs", "Bootstrap"],
                color: "blue",
                features: ["Real-time Weather Data", "Responsive Design", "API Integration"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                onClick={() => project.link && window.open(project.link, "_blank")}
                style={{ perspective: "1000px" }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group-hover:border-purple-400/50 h-full relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(168,85,247,0.05) 0%, transparent 50%, rgba(20,184,166,0.05) 100%)",
                        "linear-gradient(225deg, rgba(168,85,247,0.05) 0%, transparent 50%, rgba(20,184,166,0.05) 100%)",
                        "linear-gradient(45deg, rgba(168,85,247,0.05) 0%, transparent 50%, rgba(20,184,166,0.05) 100%)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-white flex items-center gap-2">
                        {project.title}
                        {project.isLive && (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Badge className="bg-green-500/20 text-green-400 text-xs">LIVE</Badge>
                          </motion.div>
                        )}
                      </CardTitle>
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                        <ExternalLink className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </motion.div>
                    </div>
                    <CardDescription className="text-gray-300">
                      {project.title === "Internskool"
                        ? "Internship Management Platform"
                        : project.title === "CMS Website"
                          ? "Blog Publishing Platform"
                          : "Web-Based Weather System"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-white/10 text-white border border-white/20">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          • {feature}
                        </motion.li>
                      ))}
                    </ul>
                    {project.link && (
                      <motion.div
                        className="mt-4 flex items-center gap-2 text-purple-400 text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Globe className="h-4 w-4" />
                        <span>Visit Live Site</span>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section with Timeline Animation */}
      <motion.section
        id="experience"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-teal-400"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />

              {[
                {
                  title: "React Web Developer Intern",
                  company: "WebTeam PVT. LTD.",
                  period: "March 2025 – June 2025",
                  location: "Nasik, Maharashtra",
                  color: "purple",
                  achievements: [
                    "Developed responsive, dynamic UIs using React.js, Redux, Tailwind CSS, and Bootstrap",
                    "Integrated RESTful APIs using Axios and React Query; implemented Firebase Auth, protected routes, and real-time data sync",
                    "Employed Git version control, collaborated in Agile sprints, and contributed to daily stand-ups via GitHub",
                    "Deployed multiple web modules using Netlify and Vercel, ensuring cross-browser and cross-device optimization",
                    "Focused on component reusability, modular architecture, and state management for scalable applications",
                    "Participated in code reviews, sprint retrospectives, and technical documentation for knowledge sharing",
                    "Conducted unit testing using Jest and React Testing Library to ensure UI reliability and maintainability"
                  ]
                },
                {
                  title: "Web Developer",
                  company: "OctaNet Services Pvt Ltd.",
                  period: "Aug 2023 – Oct 2023",
                  location: "Remote",
                  color: "teal",
                  achievements: [
                    "Built and maintained scalable Python web services using Flask, integrating secure third‑party APIs with OAuth 2.0 and JWT authentication",
                    "Optimized application performance through profiling, caching strategies, and code refactoring—reducing average response times by 30%",
                    "Established DevOps best practices: automated CI/CD pipelines, conducted thorough code reviews, and enforced linting/testing standards in GitHub workflows"
                  ]
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`absolute left-6 w-4 h-4 ${getColorClasses(exp.color).bg} rounded-full border-4 border-black`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div whileHover={{ x: 10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="ml-16 bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                            <CardDescription className={`${getColorClasses(exp.color).text} font-medium`}>
                              {exp.company}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className={`${getColorClasses(exp.color).border} ${getColorClasses(exp.color).text}`}>
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">{exp.location}</p>
                        <ul className="space-y-2 text-gray-300">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.3 + 0.7 + i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5 }}
                            >
                              <Star className={`h-4 w-4 ${getColorClasses(exp.color).text} mt-1 flex-shrink-0`} />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: 90 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                          <Award className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
                        </motion.div>
                        <p className="text-gray-300 group-hover:text-white transition-colors">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section with Interactive Elements */}
      <motion.section
        id="contact"
        className="py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: "Email", value: "govindwarsoham@gmail.com", color: "purple" },
                        { icon: Phone, label: "Phone", value: "+91 7822884053", color: "teal" },
                      ].map((contact, index) => (
                        <motion.div
                          key={contact.label}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <motion.div
                            className={`${getColorClasses(contact.color).bgOpacity} p-3 rounded-full`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <contact.icon className={`h-6 w-6 ${getColorClasses(contact.color).text}`} />
                          </motion.div>
                          <div>
                            <p className="text-gray-400">{contact.label}</p>
                            <p className="text-white">{contact.value}</p>
                          </div>
                        </motion.div>
                      ))}

                      <motion.div
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 relative overflow-hidden group"
                            onClick={() => window.open("https://linkedin.com/in/soham-govindwar-4a96bb258", "_blank")}
                          >
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center">
                              <Linkedin className="mr-2 h-5 w-5" />
                              LinkedIn
                            </span>
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black relative overflow-hidden group"
                            onClick={() => window.open("https://github.com/SohamGovindwar", "_blank")}
                          >
                            <motion.div className="absolute inset-0 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            <span className="relative z-10 flex items-center">
                              <Github className="mr-2 h-5 w-5" />
                              GitHub
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-48 h-48 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full p-1">
                          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            >
                              <Globe className="h-16 w-16 text-white" />
                            </motion.div>
                          </div>
                        </div>
                        <motion.div
                          className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-2"
                          animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Rocket className="h-4 w-4 text-white" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer
        className="py-8 border-t border-white/10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-400"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            © 2025 Soham Govindwar. Crafted with passion and cutting-edge technology.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}