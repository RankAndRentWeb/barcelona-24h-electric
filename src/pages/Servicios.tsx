import { Phone, Clock, Zap, Shield, CheckCircle2, Wrench, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Servicios = () => {
  const phoneNumber = "932 123 456";
  const phoneLink = `tel:+34932123456`;

  const detailedServices = [
    {
      icon: Clock,
      title: "Electricista urgente 24 horas",
      description:
        "Sabemos que las averías eléctricas no entienden de horarios. Por eso, nuestro servicio de electricista urgente está disponible las 24 horas del día, los 7 días de la semana, incluidos festivos. Ya sea de día o de noche, estamos preparados para atender tu emergencia.",
      features: [
        "Disponibilidad completa 24/7",
        "Respuesta rápida a emergencias",
        "Atención inmediata en festivos",
        "Llegada en menos de una hora*",
      ],
    },
    {
      icon: Zap,
      title: "Averías eléctricas",
      description:
        "Reparamos todo tipo de averías eléctricas en viviendas y locales comerciales. Nuestros electricistas profesionales diagnostican y solucionan cualquier problema eléctrico de forma rápida y segura.",
      features: [
        "Cortocircuitos y saltos de ICP",
        "Enchufes e interruptores que no funcionan",
        "Luces que no encienden",
        "Fallos en el cuadro eléctrico",
        "Cables y conexiones defectuosas",
      ],
    },
    {
      icon: Shield,
      title: "Cuadros eléctricos e instalaciones",
      description:
        "Realizamos instalaciones eléctricas completas y actualizamos cuadros eléctricos según la normativa vigente. Trabajos realizados por electricistas certificados con todas las garantías.",
      features: [
        "Instalación de cuadros eléctricos nuevos",
        "Actualización y modernización de cuadros antiguos",
        "Instalación de diferenciales y magnetotérmicos",
        "Cableado y canalizaciones",
        "Instalaciones eléctricas completas",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Boletines y certificaciones",
      description:
        "Emitimos boletines eléctricos y certificaciones oficiales necesarios para dar de alta tu instalación, realizar reformas o cumplir con las inspecciones reglamentarias.",
      features: [
        "Boletín eléctrico de instalación",
        "Certificados de instalación eléctrica",
        "Inspecciones periódicas",
        "Certificados para alquileres",
      ],
    },
    {
      icon: Home,
      title: "Electricidad en viviendas",
      description:
        "Servicios eléctricos especializados para hogares. Desde pequeñas reparaciones hasta instalaciones completas en viviendas nuevas o reformadas.",
      features: [
        "Instalación de iluminación",
        "Puntos de luz adicionales",
        "Enchufes y tomas de corriente",
        "Domótica básica",
      ],
    },
    {
      icon: Building2,
      title: "Electricidad en locales comerciales",
      description:
        "Soluciones eléctricas para negocios, oficinas y locales comerciales. Nos adaptamos a las necesidades específicas de tu actividad empresarial.",
      features: [
        "Instalaciones en locales nuevos",
        "Adaptación a cambios de actividad",
        "Iluminación comercial",
        "Cuadros de distribución para locales",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios de electricista en Barcelona
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Soluciones eléctricas profesionales para viviendas, locales y comunidades. Disponibles 24 horas todos los
              días del año.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="call" size="lg" className="text-lg" asChild>
                <a href={phoneLink} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar 24h
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <a href="/contacto">Solicitar presupuesto</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {detailedServices.map((service, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Necesitas alguno de estos servicios?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contacta con nosotros ahora y te atenderemos lo antes posible. Presupuesto sin compromiso.
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
                <a href="/contacto">Formulario de contacto</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Trabajos garantizados y con certificación</h3>
              <p className="text-muted-foreground mb-4">
                Todos nuestros trabajos cumplen con la normativa eléctrica vigente (REBT - Reglamento Electrotécnico
                de Baja Tensión). Nuestros electricistas están debidamente cualificados y utilizamos materiales de
                primera calidad.
              </p>
              <p className="text-muted-foreground">
                Te entregamos toda la documentación necesaria: presupuestos detallados, albaranes de material,
                boletines eléctricos y certificados según corresponda. Tu tranquilidad y seguridad son nuestra
                prioridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
