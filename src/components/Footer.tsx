import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">INNOFEMME</h3>
            <p className="text-sm text-primary-foreground/80">
              Centering African Women at the Heart of Innovation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-secondary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-secondary transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs#innofemme-labs" className="hover:text-secondary transition-colors">
                  Innofemme Labs
                </Link>
              </li>
              <li>
                <Link to="/programs#hack4equity" className="hover:text-secondary transition-colors">
                  Hack4Equity
                </Link>
              </li>
              <li>
                <Link to="/programs#gurlz-wellness" className="hover:text-secondary transition-colors">
                  Gurlz Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" size="sm" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Innofemme. Centering Women, Transforming Innovation.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@innofemme.org" className="hover:text-secondary transition-colors">
                info@innofemme.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
