import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { PageMeta } from "@/components/PageMeta";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

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
      className="block overflow-hidden rounded-lg bg-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="aspect-video relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-1">Types:</h4>
            <p className="text-gray-700 line-clamp-2">
              {product.types.join(", ")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-600 mb-1">Material Grades:</h4>
            <p className="text-gray-700 line-clamp-2">
              {product.materialGrades.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.types.some(type => type.toLowerCase().includes(search.toLowerCase())) ||
        product.materialGrades.some(grade => grade.toLowerCase().includes(search.toLowerCase()))
      : true;

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <PageMeta
        title={`${t("products.title")} | Zeen International`}
        description={t("products.metaDescription")}
        path="/products"
      />
      <div className="min-h-screen bg-[#f5f7fa] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-condensed text-3xl font-bold sm:text-4xl">
              {t("products.title")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {t("products.subtitle")}
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("products.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-h-12 pl-10 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`min-h-11 rounded-full px-4 text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t("products.filters.all")}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-11 rounded-full px-4 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                {t("products.noResults")}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Products;
