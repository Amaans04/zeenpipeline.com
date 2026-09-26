import Industries from "@/components/Industries";
import { useTranslation } from "react-i18next";
import { PageMeta } from "@/components/PageMeta";

export default function IndustriesPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={`${t("industries.title")} | Zeen International`}
        description={t("industries.metaDescription")}
        path="/industries"
      />
      <Industries />
    </>
  );
}