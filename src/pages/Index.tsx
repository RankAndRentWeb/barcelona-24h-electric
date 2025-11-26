import { Phone, MessageSquare, Clock, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-electrician.jpg";

const Index = () => {
  const phoneNumber = "932 123 456";
  const phoneLink = `tel:+34932123456`;

  const services = [
    {
      icon: Clock,
      title: "Electricista urgente 24h",
      description: "Disponibles las 24 horas del día, todos los días del año. Respuesta rápida ante cualquier emergencia eléctrica.",
    },
    {
      icon: Zap,
      title: "Averías eléctricas en viviendas y locales",
      description: "Reparación de cortocircuitos, enchufes, interruptores y cualquier problema eléctrico en tu hogar o negocio.",
    },
    {
      icon: Shield,
      title: "Cuadros eléctricos e instalaciones",
      description: "Instalación y mantenimiento de cuadros eléctricos, cableado y sistemas eléctricos completos.",
    },
    {
      icon: CheckCircle2,
      title: "Boletines y certificaciones",
      description: "Emisión de boletines eléctricos y certificaciones necesarias para tu vivienda o local.",
    },
  ];

  const zones = [
    "Eixample",
    "Gràcia",
    "Sant Martí",
    "Sants",
    "Les Corts",
    "Sarrià-Sant Gervasi",
    "Ciutat Vella",
    "Horta-Guinardó",
    "Nou Barris",
    "Sant Andreu",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Electricista en Barcelona 24 horas
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Servicio urgente de averías eléctricas en viviendas y locales, todos los días del año.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Llegada rápida en Barcelona y alrededores</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Averías eléctricas, cuadros, cortocircuitos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Precios claros y trato profesional</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="call" size="lg" className="text-lg" asChild>
                  <a href={phoneLink} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Llamar ahora
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg" asChild>
                  <a href="/contacto" className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Enviar mensaje
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a href={phoneLink} className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Electricista profesional trabajando en Barcelona"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Servicios de electricista en Barcelona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones eléctricas profesionales para cualquier tipo de avería o instalación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">¿Por qué llamarnos?</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atención 24 horas en Barcelona</h3>
                  <p className="text-muted-foreground">
                    Disponibles cualquier día del año, incluidos festivos y fines de semana
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Respuesta rápida ante cualquier avería</h3>
                  <p className="text-muted-foreground">
                    Llegamos rápido a tu domicilio o local para solucionar tu problema eléctrico
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Electricistas profesionales y con experiencia</h3>
                  <p className="text-muted-foreground">
                    Equipo cualificado con años de experiencia en todo tipo de instalaciones
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Presupuesto claro antes de empezar</h3>
                  <p className="text-muted-foreground">
                    Sin sorpresas, te informamos del coste antes de realizar cualquier trabajo
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="call" size="lg" className="text-lg" asChild>
                <a href={phoneLink} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar 24h
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
              Zonas de Barcelona que cubrimos
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Servicio de electricista en toda Barcelona y alrededores
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {zones.map((zone, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg px-4 py-3 text-center text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {zone}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">¿Necesitas un electricista urgente?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Llámanos ahora o contacta por formulario. Estamos disponibles 24 horas.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className="h-6 w-6 text-primary" />
              <a href={phoneLink} className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                {phoneNumber}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="call" size="lg" className="text-lg" asChild>
                <a href={phoneLink} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <a href="/contacto">Contactar por formulario</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
