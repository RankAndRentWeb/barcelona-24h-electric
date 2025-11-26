import { Phone } from "lucide-react";

const Footer = () => {
  const phoneNumber = "932 123 456";
  const phoneLink = `tel:+34932123456`;

  return (
    <footer className="bg-footer-bg text-footer-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Electricista Barcelona 24h</h3>
            <p className="text-footer-text/80 mb-4">
              Servicio de electricista urgente en Barcelona, disponible las 24 horas para viviendas, locales y
              comunidades.
            </p>
            <a href={phoneLink} className="flex items-center gap-2 text-lg font-semibold hover:text-footer-text/80 transition-colors">
              <Phone className="h-5 w-5" />
              {phoneNumber}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-footer-text/80">
              <li>Electricista urgente 24h</li>
              <li>Averías eléctricas</li>
              <li>Cuadros e instalaciones</li>
              <li>Boletines eléctricos</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-footer-text/80">
              <li>
                <a href="#" className="hover:text-footer-text transition-colors">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-footer-text transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-footer-text transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-text/20 mt-8 pt-8 text-center text-footer-text/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Electricista Barcelona 24h. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
