import Image from "next/image";
import Link from "next/link";
import scalehubLogo from "@/assets/scalehub-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image
                src={scalehubLogo}
                alt="ScaleHub Logo"
                width={128}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              AI-driven workflows and automation tools to accelerate business growth. Scale smarter, not harder.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            {/* Mobile: horizontal layout */}
            <ul className="flex flex-wrap gap-3 md:flex-col md:space-y-2 md:gap-0">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="mailto:kenil.mangukiya.work@gmail.com" className="hover:text-primary transition-colors">
                  kenil.mangukiya.work@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="tel:+919904665554" className="hover:text-primary transition-colors">
                  +91 99046 65554
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} ScaleHub | Powered by ScaleHub | Made by Kenil Mangukiya</p>
        </div>
      </div>
    </footer>
  );
};
