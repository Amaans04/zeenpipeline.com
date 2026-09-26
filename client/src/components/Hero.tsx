import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative flex min-h-[calc(100svh-4rem)] items-end lg:min-h-[calc(100svh-4.5rem)] lg:items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/ZeenWebBackground.jpeg"
          alt="Industrial pipe yard with overhead crane"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-8 sm:pb-20 lg:py-24">
        <div className="max-w-3xl text-white">
          <h1 className="mb-4 font-condensed text-[2rem] font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mb-8 max-w-xl text-lg font-light leading-snug text-white/90 sm:text-2xl">
            {t("hero.tagline")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition-transform duration-150 hover:bg-primary/90 active:scale-[0.98]"
            >
              <span>{t("hero.getQuote")}</span>
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 font-medium text-white transition-colors duration-150 hover:bg-white/20"
            >
              {t("hero.viewProducts")}
            </Link>
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {t("hero.proof")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
