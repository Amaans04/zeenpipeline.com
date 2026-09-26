import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { PageMeta, SITE_URL } from "@/components/PageMeta";
import { ArrowRight, Star, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LeadGenerationForm from "@/components/LeadGenerationForm";
import LeadFormOverlay from "@/components/LeadFormOverlay";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";


const ClientMarquee = () => {
  // List of notable clients/companies served with their logos
  const clients = Array.from({ length: 8 }, (_, i) => ({
    name: `Company ${i + 1}`,
    logo: `/logos/clients/cmpimg (${i + 1}).png`
  }));


  return (
    <div className="bg-white py-6 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <p className="mb-2 text-center font-condensed text-xl font-bold text-primary">
          Our Trusted Clients
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      <div className="animate-marquee whitespace-nowrap">
        {clients.map((client, index) => (
          <div key={index} className="inline-block mx-12">
            <img 
              src={client.logo} 
              alt=""
              className="h-12 w-auto object-contain grayscale sm:h-16"
            />
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {clients.map((client, index) => (
          <div key={index + 100} className="inline-block mx-12">
            <img 
              src={client.logo} 
              alt=""
              className="h-12 w-auto object-contain grayscale sm:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SupplierMarquee = () => {
  // List of notable Supplier/companies served with their logos
  const supplier = Array.from({ length: 10 }, (_, i) => ({
    name: `Company ${i + 1}`,
    logo: `/logos/cmpimg-${i + 1}.webp`
  }));

  return (
    <div className="bg-white py-6 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <p className="mb-2 text-center font-condensed text-xl font-bold text-primary">
          Our Trusted Suppliers
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </div>
      <div className="animate-marquee whitespace-nowrap">
        {supplier.map((supplier, index) => (
          <div key={index} className="inline-block mx-6">
            <img 
              src={supplier.logo} 
              alt=""
              className="h-12 w-auto object-contain grayscale sm:h-16"
            />
          </div>
        ))}
        {/* Duplicate for seamless looping */}
        {supplier.map((supplier, index) => (
          <div key={index + 100} className="inline-block mx-6">
            <img 
              src={supplier.logo} 
              alt=""
              className="h-12 w-auto object-contain grayscale sm:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const FeatureCard = ({ title, description, icon, link }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-condensed mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={link} 
        className="text-secondary hover:text-primary transition-all font-medium flex items-center"
      >
        <span>Learn More</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

interface Product {
  id: string;
  category: string;
  name: string;
  types: string[];
  materialGrades: string[];
  image: string;
  features?: string[];
  sizes?: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/products/${encodeURIComponent(product.id)}`}
      className="block overflow-hidden rounded-lg bg-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
        <p className="mb-3 line-clamp-2 text-gray-600">{product.types.join(", ")}</p>
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">{product.materialGrades.join(", ")}</p>
        <span className="flex items-center font-medium text-primary">
          View details
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-6">
        <div className="mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`inline-block h-5 w-5 ${
                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/10 rotate-180" />
          <p className="text-gray-700 mb-6 relative z-10 italic">"{testimonial.text}"</p>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-secondary font-bold">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">
              {testimonial.title}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition>
      <PageMeta
        title={t("meta.title")}
        description={t("meta.description")}
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zeen International Pipeline Supply",
          url: SITE_URL,
          email: "sales@zeenpipeline.com",
          telephone: "+917738812758",
          description: t("meta.description"),
        }}
      />
      
      {/* Lead Form Overlay - displays 10 seconds after page load */}
      <LeadFormOverlay />
      
      <Hero />
 
      <SupplierMarquee />
      
      {/* About Us Section */}
      <section className="bg-[#f5f7fa] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div>
                <img 
                  src="/products/hero img.webp" 
                  alt="Steel Pipes" 
                  className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Premier Steel Pipe Supplier
                </h2>
                <p className="text-gray-700 mb-4">
                  Zeen International Pipeline Supply, a premier <span className="text-primary font-semibold">steel pipe supplier</span>, excels in delivering 
                  comprehensive piping solutions to a variety of industries including oil and gas, petrochemical, 
                  power, civil, and process sectors. As a renowned <span className="text-primary font-semibold">valve supplier</span>, we also offer an 
                  extensive selection of pipes, fittings, flanges, and valves, along with other necessary 
                  accessories to fulfill the diverse needs of our clients.
                </p>
                <p className="text-gray-700 mb-6">
                  Our presence as a leading <span className="text-primary font-semibold">flanges supplier</span> is strengthened by our strong regional and global footprint, 
                  with offices in key cities across over 60 countries. With a rich legacy spanning over 45 years in the pipe fittings 
                  industry, Zeen is committed to providing quality-assured, internationally-certified products 
                  and services. Upholding our brand promise of "Your Business, Our Commitment," we are 
                  dedicated to ensuring excellence and reliability in every engagement.
                </p>
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all inline-flex items-center"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-condensed">
              {t("home.featuredProducts.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.featuredProducts.subtitle")} 
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.slice(0, 3).map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg">
                {t("home.featuredProducts.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <ClientMarquee />
      {/* Testimonials Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-condensed">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.testimonials.subtitle")}
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
              
            ))}
          </motion.div>
        </div>
      </section>
      {/* Lead Generation Form Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >

            <LeadGenerationForm />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
