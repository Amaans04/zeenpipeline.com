import { useTranslation } from "react-i18next";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";
import { PageMeta } from "@/components/PageMeta";

const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <PageTransition>
      <>
        <PageMeta
          title={`${t("contact.title")} | Zeen International`}
          description={t("contact.metaDescription")}
          path="/contact"
        />
        
        <Contact />
      </>
    </PageTransition>
  );
};

export default ContactPage;