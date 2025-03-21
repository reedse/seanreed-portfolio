"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Github, Mail, Code, MoveRight, MoveLeft, Grid, ArrowRight, ArrowDown, Send, SendHorizonal, Forward } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="h-16"></div> {/* Spacer for fixed navbar */}
      <main className="container mx-auto px-4 flex-1 max-w-6xl">
        <AnimatedSection id="home" className="py-16 border-b border-border">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-2xl">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Aspiring <span className="highlight-text">software engineer</span>
              </motion.h1>

              <motion.p
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Self-taught full-stack developer passionate about building innovative solutions and exceptional digital
                experiences.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link 
                    href="#portfolio" 
                    className="btn-primary w-full sm:w-auto inline-flex justify-center"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    See my work
                    <ArrowDown size={16} className="ml-2" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/seanreed_resume.pdf" className="btn-secondary w-full sm:w-auto inline-flex justify-center">
                    View resume
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-12 md:mt-0 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative mb-4 group">
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-[25px] opacity-80"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "translate(-0%, -0%)",
                  }}
                />

                <div className="rounded-full overflow-hidden border-4 border-border relative z-10 group-hover:border-primary/50 transition-all duration-300" style={{ width: '240px', height: '240px' }}>
                  <Image
                    src="/profile.jpg"
                    alt="Sean Reed"
                    width={240}
                    height={240}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-2xl font-bold text-center">Sean Reed</p>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="portfolio" className="py-16">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="section-number">01.</p>
              <div className="section-dots">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`section-dot ${i === 0 ? 'section-dot-active' : 'section-dot-inactive'}`}
                  ></div>
                ))}
              </div>
            </div>
            <h2 className="section-heading text-3xl font-bold">Portfolio</h2>
          </div>

          <div className="space-y-20">
            <motion.div
              className="grid md:grid-cols-[1fr,1.2fr] gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Vannoord Property Maintenance</h3>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-primary uppercase text-sm font-medium">WEB DEVELOPMENT</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">2025</span>
                </div>

                <p className="text-gray-300 mb-8">
                  A responsive property maintenance landing page using Next.js and React, implementing server-side
                  rendering (SSR) for faster load times and improved SEO. Integrated dynamic contact forms with form validation
                  using React Hook Form and Zod, ensuring secure data handling and seamless email notifications via Next.js API routes.
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  <div>
                    <h4 className="text-primary uppercase text-sm font-medium mb-2">ROLE</h4>
                    <p>Frontend Developer</p>
                  </div>
                  <div>
                    <h4 className="text-primary uppercase text-sm font-medium mb-2">CLIENT</h4>
                    <p>Vannoord Property Maintenance</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-primary uppercase text-sm font-medium mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Next.js
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      React
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Tailwind CSS
                    </motion.span>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary uppercase text-sm font-medium mb-3">DELIVERABLES</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">Responsive Design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">Contact Form Integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">Server-Side Rendering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">SEO Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <motion.div
                className="relative rounded-lg overflow-hidden border border-border bg-card group h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/projects">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="/projects/vannoord-mobile.jpg"
                    />
                    <Image
                      src="/projects/vannoord.jpg"
                      alt="Vannoord Property Maintenance"
                      width={1200}
                      height={630}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-[1fr,1.2fr] gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Quiznator</h3>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-primary uppercase text-sm font-medium">FULL STACK</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">2024</span>
                </div>

                <p className="text-gray-300 mb-8">
                  A comprehensive study platform for students and teachers. Built with a scalable backend using Next.js API routes and MongoDB, 
                  implementing RESTful endpoints for user authentication (Clerk), quiz creation, class management, and PDF-based text extraction,
                  with security measures like rate limiting (Upstash Redis) and input validation (Zod). Secure pro version payments with Stripe.
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  <div>
                    <h4 className="text-primary uppercase text-sm font-medium mb-2">ROLE</h4>
                    <p>Full-Stack Developer</p>
                  </div>
                  <div>
                    <h4 className="text-primary uppercase text-sm font-medium mb-2">CLIENT</h4>
                    <p>Personal Project</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-primary uppercase text-sm font-medium mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Next.js
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      React
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      MongoDB
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Clerk
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Stripe
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Tailwind CSS
                    </motion.span>
                  </div>
                </div>

                <div>
                  <h4 className="text-primary uppercase text-sm font-medium mb-3">DELIVERABLES</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      User Authentication
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Quiz Creation & Management
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      PDF Text Extraction
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Subscription Payment Processing
                    </li>
                  </ul>
                </div>
              </div>

              <motion.div
                className="relative rounded-lg overflow-hidden border border-border bg-card group h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/projects">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="/projects/quiznator-mobile.jpg"
                    />
                    <Image
                      src="/projects/quiznator.jpg"
                      alt="Quiznator"
                      width={1200}
                      height={630}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="py-16">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="section-number">02.</p>
              <div className="section-dots">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`section-dot ${i < 2 ? 'section-dot-active' : 'section-dot-inactive'}`}
                  ></div>
                ))}
              </div>
            </div>
            <h2 className="section-heading text-3xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-[1fr,1px,1fr] gap-8">
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Turning ideas into <span className="highlight-text">reality</span> through code
              </motion.h2>

              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                As a self-taught junior full-stack developer, I've quickly progressed from learning the basics to
                building complex SaaS applications. My passion lies in creating innovative solutions that solve
                real-world problems, combining clean code with beautiful design to deliver exceptional digital
                experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                <div className="mb-6">
                  <p className="text-white font-medium">BROCK UNIVERSITY</p>
                  <p className="text-gray-300">Bachelor of Science in Computer Science - April 2025</p>
                </div>
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Technical Expertise
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-primary uppercase text-sm font-medium mb-3">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      JavaScript
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      TypeScript
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Python
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Java
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      C++
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      SQL
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      HTML5
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      CSS3
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-primary uppercase text-sm font-medium mb-3">Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      React
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Next.js
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Node.js
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Express.js
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Tailwind CSS
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-primary uppercase text-sm font-medium mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      MongoDB
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      PostgreSQL
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Redis
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Clerk
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Stripe
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      React Query
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Zustand
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <p className="text-primary uppercase text-sm font-medium mb-3">Developer Tools</p>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Git
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Docker
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Jest
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Cypress
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Zod
                    </motion.span>
                    <motion.span
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      Postman
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="hidden md:block w-px mx-auto"></div>

            <div className="relative pl-4 md:pl-0">
              <div className="space-y-16 md:space-y-16 space-y-20">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-7 translate-y-1 timeline-dot"></div>
                  <div className="absolute left-0 w-px h-full bg-border -translate-x-6 translate-y-4 timeline-line"></div>
                  <div>
                    <p className="text-primary">2025 - Present</p>
                    <h4 className="text-xl font-bold mt-1">Freelance Developer</h4>
                    <p className="text-gray-500 mt-1">Self-employed</p>
                    <p className="text-gray-300 mt-3">
                      Building custom websites and applications for clients. Developed Vannoord Property Maintenance
                      website using Next.js and React, implementing server-side rendering for faster load times and 
                      improved SEO.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-7 translate-y-1 timeline-dot"></div>
                  <div className="absolute left-0 w-px h-full bg-border -translate-x-6 translate-y-4 timeline-line"></div>
                  <div>
                    <p className="text-primary">2023 - 2024</p>
                    <h4 className="text-xl font-bold mt-1">SaaS Developer</h4>
                    <p className="text-gray-500 mt-1">Personal Projects</p>
                    <p className="text-gray-300 mt-3">
                      Created Quiznator, a comprehensive study platform for students and teachers. Built with a scalable 
                      backend using Next.js API routes and MongoDB, with user authentication, quiz creation, and PDF-based 
                      text extraction.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-7 translate-y-1 timeline-dot"></div>
                  <div className="absolute left-0 w-px h-[85%] bg-border -translate-x-6 translate-y-4 timeline-line"></div>
                  <div>
                    <p className="text-primary">2023</p>
                    <h4 className="text-xl font-bold text-white mt-1">Computer Science Student</h4>
                    <p className="text-gray-500 mt-1">Brock University 2021 - 2025</p>
                    <p className="text-gray-300 mt-3">
                      Started my web development journey, focusing on modern technologies and best practices. Built
                      several projects to strengthen my skills in both frontend and backend development.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-16">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="section-number">03.</p>
              <div className="section-dots">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`section-dot ${i < 3 ? 'section-dot-active' : 'section-dot-inactive'}`}
                  ></div>
                ))}
              </div>
            </div>
            <h2 className="section-heading text-3xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Let's create something <span className="highlight-text">amazing</span> together
              </h3>

              <p className="text-gray-300 mb-10">
                Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work
                together to bring your ideas to life.
              </p>

              <div className="mb-8">
                <p className="text-primary uppercase text-sm font-medium mb-4">CONNECT WITH ME</p>
                <div className="flex space-x-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href="https://linkedin.com"
                      className="bg-secondary p-3 rounded-md hover:bg-secondary/80 hover:border-primary border border-transparent transition-colors text-foreground inline-block"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <input type="text" placeholder="Your Name" className="input-field" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <input type="email" placeholder="Your Email" className="input-field" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <textarea placeholder="Your Message" rows={6} className="input-field resize-none"></textarea>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <button type="submit" className="btn-primary">
                    Submit
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
      <motion.footer
        className="container mx-auto px-4 py-6 border-t border-border mt-12 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.2, y: -3 }}>
              <Link href="https://twitter.com" className="social-icon">
                <Twitter size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -3 }}>
              <Link href="https://linkedin.com" className="social-icon">
                <Linkedin size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -3 }}>
              <Link href="https://github.com" className="social-icon">
                <Github size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href="mailto:contact@example.com"
                className="bg-secondary p-3 rounded-md hover:bg-secondary/80 hover:border-primary border border-transparent transition-colors text-foreground inline-block"
              >
                <Mail size={20} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -3 }}>
              <Link href="/code" className="social-icon">
                <Code size={18} />
              </Link>
            </motion.div>
          </div>

          <div className="text-gray-500 text-sm">© 2025 Sean Reed. All rights reserved.</div>

          <div className="flex space-x-2">
            <motion.button className="social-icon" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <MoveLeft size={18} />
            </motion.button>
            <motion.button className="social-icon" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <MoveRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

