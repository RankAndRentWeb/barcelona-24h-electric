import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contacto = () => {
  const phoneNumber = "932 123 456";
  const phoneLink = `tel:+34932123456`;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Mensaje enviado",
      description: "Te contactaremos lo antes posible.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      zone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contacto</h1>
            <p className="text-xl text-muted-foreground">
              Cuéntanos tu avería eléctrica y te llamamos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Información de contacto</h2>
              <p className="text-muted-foreground mb-8">
                Si necesitas una respuesta urgente, llámanos directamente. Estamos disponibles 24 horas todos los días
                del año.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teléfono 24h</h3>
                    <a
                      href={phoneLink}
                      className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
                    >
                      {phoneNumber}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Disponible las 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Zona de cobertura</h3>
                    <p className="text-foreground">Barcelona y alrededores</p>
                    <p className="text-sm text-muted-foreground mt-1">Todos los barrios de la ciudad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                    <p className="text-foreground">También disponible por WhatsApp</p>
                    <p className="text-sm text-muted-foreground mt-1">Respuesta rápida garantizada</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-semibold mb-3">¿Urgencia eléctrica?</h3>
                <p className="text-muted-foreground mb-4">
                  Para emergencias, la forma más rápida de contactarnos es llamando directamente al teléfono.
                </p>
                <Button variant="call" size="lg" className="w-full" asChild>
                  <a href={phoneLink} className="flex items-center gap-2 justify-center">
                    <Phone className="h-5 w-5" />
                    Llamar ahora
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ej: 666 123 456"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zone">Barrio o zona de Barcelona</Label>
                    <Input
                      id="zone"
                      name="zone"
                      type="text"
                      placeholder="Ej: Eixample, Gràcia..."
                      value={formData.zone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Descripción del problema *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntanos qué problema eléctrico tienes..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" variant="call" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Te contactaremos en el menor tiempo posible
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
