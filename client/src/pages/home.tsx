import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, ArrowRight, MapPin, Phone, Mail, Code2, Rocket, Users, Zap, MessageSquare } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const stats = [
    { label: "Projects Delivered", value: "150+", icon: Rocket },
    { label: "Happy Clients", value: "50+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Zap },
    { label: "Team Members", value: "25+", icon: Code2 },
  ];

  const testimonials = [
    {
      quote: "TechForge transformed our business with their custom software solution. The team's attention to detail and technical expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CTO, InnovateCorp",
      company: "InnovateCorp"
    },
    {
      quote: "We needed a complex mobile app built in record time. They delivered a flawless product that our users love. Highly recommended.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "Appify"
    },
    {
      quote: "Professional, reliable, and incredibly talented. They didn't just build code; they helped us refine our entire digital strategy.",
      author: "Emily Davis",
      role: "Founder",
      company: "StartUp Inc"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business goals to understand the problem and define the perfect solution."
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create intuitive, beautiful interfaces that ensure a seamless user experience."
    },
    {
      number: "03",
      title: "Development",
      description: "We build your software using cutting-edge technologies, ensuring performance and scalability."
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "We deploy your solution and provide ongoing support to help your product grow."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
              S
            </div>
            {COMPANY_INFO.name}
          </div>
          <nav className="flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">Services</a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">Testimonials</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">About</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden hero-gradient">
          <div className="absolute inset-0 opacity-40" style={{ background: 'var(--gradient-glow)' }}></div>
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
          
          <div className="container relative z-20 px-4 md:px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-primary-foreground/80 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Software Development Excellence
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight drop-shadow-sm">
                <span className="block text-foreground mb-2">{COMPANY_INFO.name}</span>
                <span className="block text-gradient-blue leading-tight">Building Tomorrow's <br className="hidden md:block" /> Software Today</span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                <Button size="lg" className="text-sm px-8 h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 btn-glow border-none">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-sm px-8 h-12 rounded-xl border-white/10 bg-black/20 hover:bg-white/5 text-white backdrop-blur-sm transition-all">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y bg-card/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl font-bold font-heading tracking-tight">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-2xl md:text-4xl font-heading font-bold">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                We deliver end-to-end software solutions tailored to your business needs across all major platforms.
              </p>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={item}>
                <Card className="h-full border border-transparent hover:border-primary/50 shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-bold">Mobile Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      Native iOS and Android applications built for performance and user experience. We use modern frameworks to ensure scalability.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border border-transparent hover:border-primary/50 shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-bold">Web Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      Responsive, high-performance web apps using React, Next.js, and modern web technologies. Built for the modern web.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border border-transparent hover:border-primary/50 shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg font-bold">Desktop Software</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      Powerful desktop solutions for Windows, macOS, and Linux. Enterprise-grade software for complex workflows.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 md:py-32 container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-2xl md:text-4xl font-heading font-bold">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              A proven methodology to ensure your project's success from concept to launch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
            
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pt-8 group"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold z-10 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <Card className="h-full border border-border/50 hover:border-primary/30 transition-colors bg-card/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-3">
              <h2 className="text-2xl md:text-4xl font-heading font-bold">Client Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Don't just take our word for it. Here's what our partners have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none bg-card/40 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-primary/10">
                      <MessageSquare className="w-12 h-12" />
                    </div>
                    <CardContent className="pt-8 flex flex-col h-full gap-6">
                      <p className="text-base italic text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold">{testimonial.author}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container px-4 md:px-6 mx-auto">
           <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 p-8 md:p-16 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Transform Your Business?</h2>
                <p className="text-lg text-muted-foreground">
                  Join hundreds of satisfied clients who have elevated their digital presence with our solutions.
                </p>
                <Button size="lg" className="mt-4 bg-foreground text-background hover:bg-foreground/90 text-base px-8 h-12 rounded-full">
                  Start Your Project Today
                </Button>
              </div>
           </div>
        </section>

        {/* About / Contact Info */}
        <section id="about" className="py-20 md:py-32 container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-heading font-bold">Get In Touch</h2>
              <p className="text-base text-muted-foreground">
                Ready to start your next project? Contact us today to discuss your requirements and see how we can help you grow.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Visit us</p>
                    <p className="font-medium">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Call us</p>
                    <p className="font-medium">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email us</p>
                    <p className="font-medium">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-secondary/50 border border-border p-8 flex flex-col justify-center items-center text-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="z-10 space-y-4 max-w-md">
                <h3 className="text-2xl font-bold font-heading">Let's Build Something Amazing</h3>
                <p className="text-muted-foreground">
                  Our team of experts is ready to turn your vision into reality. 
                </p>
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
