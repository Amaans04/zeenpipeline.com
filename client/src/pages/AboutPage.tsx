import About from "@/components/About";
import { useTranslation } from "react-i18next";
import PageTransition from "@/components/PageTransition";
import { PageMeta } from "@/components/PageMeta";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <>
        <PageMeta
          title={`${t("about.title")} | Zeen International`}
          description={t("about.metaDescription")}
          path="/about"
        />
        <About />
      </>
    </PageTransition>
  );
}