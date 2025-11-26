import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const phoneNumber = "932 123 456";
  const phoneLink = `tel:+34932123456`;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
            Electricista Barcelona 24h
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/servicios"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Servicio
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-foreground hover:text-primary transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Contacto
            </NavLink>
            <Button variant="call" size="lg" asChild>
              <a href={phoneLink} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Llamar 24h
              </a>
            </Button>
          </nav>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button variant="call" asChild>
              <a href={phoneLink} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Llamar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
