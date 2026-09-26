import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import logo from "../assets/logo.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent pb-8 pt-12 text-white md:pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Zeen International Pipeline Supply"
              className="mb-4 h-12 w-auto max-w-[12rem] bg-white object-contain object-left p-1"
            />
            <p className="mb-6 text-gray-300">{t("footer.about")}</p>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/about", label: t("nav.about") },
                { href: "/products", label: t("nav.products") },
                { href: "/industries", label: t("nav.industries") },
                { href: "/why-us", label: t("nav.whyUs") },
                { href: "/contact", label: t("nav.contact") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-gray-300 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.products")}
            </h4>
            <ul className="space-y-1">
              {[
                { href: "/products/pipes", label: t("products.filters.pipes") },
                { href: "/products/valves", label: t("products.filters.valves") },
                { href: "/products/Flanges", label: t("products.filters.flanges") },
                { href: "/products/Fittings", label: t("products.filters.fittings") },
                { href: "/products/Gaskets%26Sealants", label: t("products.filters.gaskets") },
                { href: "/products", label: t("products.filters.bolts") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-gray-300 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-condensed mb-6">
              {t("footer.download")}
            </h4>
            <p className="text-gray-400 mb-4">{t("footer.catalogInfo")}</p>
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded inline-flex items-center transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              <span>{t("footer.catalogBtn")}</span>
            </a>

            <div className="mt-8">
              <h4 className="text-xl font-bold font-condensed mb-4">
                {t("footer.chat")}
              </h4>
              <a
                href="https://wa.me/+917738812758"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded inline-flex items-center transition-all"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                <span>{t("footer.whatsapp")}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2026 Zeen International Pipeline Supply. All rights reserved.
              </p>
              <a
                href="https://theapexdev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-all text-sm flex items-center group"
              >
                <span className="mr-1">Crafted with</span>
                <span className="text-red-500 mx-1 group-hover:scale-110 transition-transform">❤</span>
                <span className="mr-1">by</span>
                <span className="font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-primary transition-all">
                  TheApexDev
                </span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.terms")}
              </a>
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-gray-500 text-sm hover:text-gray-400 transition-all"
              >
                {t("footer.sitemap")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
