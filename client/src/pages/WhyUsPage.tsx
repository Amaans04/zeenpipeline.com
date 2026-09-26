import WhyChooseUs from "@/components/WhyChooseUs";
import { useTranslation } from "react-i18next";
import PageTransition from "@/components/PageTransition";
import { PageMeta } from "@/components/PageMeta";

export default function WhyUsPage() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <>
        <PageMeta
          title={`${t("whyUs.title")} | Zeen International`}
          description={t("whyUs.metaDescription")}
          path="/why-us"
        />
        <WhyChooseUs />
      </>
    </PageTransition>
  );
}