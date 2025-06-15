import React from "react";
import { Star, Clock, Award, Droplet, MapPin } from "lucide-react";
import Marquee from "react-fast-marquee";
import ProductCard from "@/components/home/ProductCard";
import ProductReviewComponent from "@/components/product/ProductReviewComponent";
import ProductDetailsAccordian from "@/components/product/ProductDetailsAccordian";
import ProductActions from "@/components/product/ProductActions";
import ImageCarousel from "@/components/product/ImageCarousel";
import { getProductBySlug, getRelatedProducts } from "@/actions/product";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const productResult = await getProductBySlug(params.slug);

  if (!productResult.success || !productResult.data) {
    notFound();
  }

  const product = productResult.data;

  // Fetch related products
  const relatedProductsResult = await getRelatedProducts(
    product.categoryId,
    product.id
  );
  const relatedProducts =
    relatedProductsResult.success && relatedProductsResult.data
      ? relatedProductsResult.data
      : [];

  return (
    <div>
      {/* Announcement Marquee */}
      <Marquee className="bg-[#FFF579] flex justify-between gap-[50px] p-4 sm:hidden">
        <p className="para mx-4">✨ Free delivery on all PrePaid Orders</p>
        <p className="para mx-4">
          🎁 Buy Any 3 products and get 1 gift for free
        </p>
        <p className="para mx-4">
          1 Body wash cleanser + 5 SKINCARE PRODUCTS @ ₹1500
        </p>
      </Marquee>

      {/* Main container */}
      <div className="max-w-7xl ownContainer pb-6 px-6 pt-2">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-[20px]">
          {/* Product Image Carousel */}
          <div className="w-full lg:w-1/2">
            <ImageCarousel images={product.images} title={product.title} />
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Product Title */}
            <h1 className="text-2xl lg:subHeading">{product.title}</h1>

            {/* Product Category */}
            <p className="text-xs lg:text-sm text-gray-500">
              {product.category.name}
            </p>

            {/* Short Description */}
            <p className="text-sm text-gray-700">{product.description}</p>

            {/* Product Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({product.numReviews} Reviews)
              </span>
            </div>

            {/* Product Actions (Size Selection, Quantity, Add to Cart) */}
            <ProductActions
              sizes={product.sizes}
              discount={product.discount}
              productId={product.id}
              productName={product.title}
              productImage={product.images[0]?.url || ""}
            />

            {/* Product Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Clock, text: "LONG-LASTING" },
                { icon: Award, text: "CERTIFIED" },
                { icon: Droplet, text: "QUALITY CHECKED OILS" },
                { icon: MapPin, text: "MADE IN INDIA" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  className="flex flex-col items-center text-center bg-gray-100 px-1 py-8 justify-center"
                  key={index}
                >
                  <div className="rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs mt-2">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <ProductDetailsAccordian
          description={product.description}
          longDescription={product.longDescription}
          benefits={product.benefits}
          ingredients={product.ingredients}
        />

        {/* Product Review Component */}
        <ProductReviewComponent
          reviews={product.productReviews}
          productId={product.id}
          productSlug={product.slug}
        />

        {/* Related Products Section */}
        <ProductCard
          heading="YOU MAY ALSO LIKE"
          shop
          products={relatedProducts}
        />
      </div>
    </div>
  );
}

export default ProductPage;
