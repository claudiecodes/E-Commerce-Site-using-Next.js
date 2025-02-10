import Banner from "@/components/Banner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Summer Dress",
    originalPrice: "Rp 1.000.000",
    discountedPrice: "Rp 750.000",
    validUntil: "2025-12-31",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Formal Suit",
    originalPrice: "Rp 1.500.000",
    discountedPrice: "Rp 1.200.000",
    validUntil: "2025-12-25",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Winter Jacket",
    originalPrice: "Rp 1.800.000",
    discountedPrice: "Rp 1.500.000",
    validUntil: "2025-12-20",
    image:
      "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Denim Overalls",
    originalPrice: "Rp 600.000",
    discountedPrice: "Rp 450.000",
    validUntil: "2025-12-28",
    image:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function SalePage() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Sale Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-red-600 font-bold">
                    {product.discountedPrice}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Valid until:{" "}
                  {new Date(product.validUntil).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center absolute bottom-5 w-full">
        <Footer />
      </div>
    </>
  );
}
