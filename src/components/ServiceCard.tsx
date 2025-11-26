import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <Button variant="link" className="p-0 h-auto" asChild>
          <NavLink to="/servicios" className="flex items-center gap-1">
            Más información
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
