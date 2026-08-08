import Image from "next/image";
import { navLinks } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-paper/12 bg-ink py-16 text-paper md:py-20">
      <div className="shell">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-5">
            <Image
              src="/images/monogram-light.png"
              alt="Serai Media monogram"
              width={682}
              height={983}
              className="h-12 w-auto"
            />
            <p className="mt-8 text-sm tracking-[0.16em] uppercase">
              Serai Media
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              Austin, TX
              <br />
              <a
                href="mailto:hello@seraimedia.com"
                className="transition-colors duration-300 hover:text-paper"
              >
                hello@seraimedia.com
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4 md:col-start-9">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ash transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-16 border-t border-paper/12 pt-8 text-xs text-steel">
          &copy; {new Date().getFullYear()} Serai Media
        </p>
      </div>
    </footer>
  );
}
