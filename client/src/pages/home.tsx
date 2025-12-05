import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/constants";
import heroBg from "@assets/generated_images/abstract_tech_hero_background.png";

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
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">About</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Abstract Technology Background" 
              className="w-full h-full object-cover opacity-90 dark:opacity-60" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
          </div>
          
          <div className="container relative z-20 px-4 md:px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm">
                {COMPANY_INFO.tagline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="text-base px-8 h-12 rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 h-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-heading font-bold">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">Mobile Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Native iOS and Android applications built for performance and user experience. We use modern frameworks to ensure scalability.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">Web Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Responsive, high-performance web apps using React, Next.js, and modern web technologies. Built for the modern web.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">Desktop Software</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Powerful desktop solutions for Windows, macOS, and Linux. Enterprise-grade software for complex workflows.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About / Contact Info */}
        <section id="about" className="py-20 md:py-32 container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-heading font-bold">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
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
