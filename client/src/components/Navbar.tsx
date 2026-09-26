import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { id: "/", label: t("nav.home") },
    { id: "/about", label: t("nav.about") },
    { id: "/products", label: t("nav.products") },
    { id: "/industries", label: t("nav.industries") },
    { id: "/why-us", label: t("nav.whyUs") },
    { id: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? location === "/"
      : location === href || location.startsWith(`${href}/`);

  const languages = [
    { code: "en" as const, label: "EN", full: "English" },
    { code: "ar" as const, label: "AR", full: "العربية" },
    { code: "fr" as const, label: "FR", full: "Français" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:h-[4.5rem] lg:px-6">
        <Link href="/" className="shrink-0">
          <img
            src={logo}
            alt="Zeen International Pipeline Supply"
            className="h-10 w-auto max-w-[9.5rem] object-contain object-left sm:h-12 sm:max-w-[13rem] lg:h-14 lg:max-w-[15rem]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className={`text-sm font-medium transition-colors duration-150 ${
                isActive(item.id) ? "text-primary" : "text-foreground hover:text-primary"
              }`}
              aria-current={isActive(item.id) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 xl:flex">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`min-h-9 rounded px-2 text-sm font-medium transition-colors duration-150 ${
                  language === item.code ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
                }`}
                onClick={() => changeLanguage(item.code)}
                aria-pressed={language === item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded bg-primary px-4 text-sm font-medium text-white transition-transform duration-150 hover:bg-primary/90 active:scale-[0.98] xl:inline-flex"
          >
            {t("nav.getQuote")}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-foreground xl:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-black/10 bg-white px-4 py-3 shadow-lg xl:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.id}
                  className={`flex min-h-12 items-center text-base font-medium ${
                    isActive(item.id) ? "text-primary" : "text-foreground"
                  }`}
                  aria-current={isActive(item.id) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-3 gap-2 border-t border-gray-200 pt-3">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`min-h-11 rounded text-sm font-medium ${
                  language === item.code ? "bg-primary text-white" : "bg-gray-100"
                }`}
                onClick={() => changeLanguage(item.code)}
                aria-pressed={language === item.code}
              >
                {item.full}
              </button>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-3 flex min-h-12 items-center justify-center rounded bg-primary text-base font-medium text-white"
          >
            {t("nav.getQuote")}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
