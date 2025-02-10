import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Banner from "@/components/Banner";

const products = [
  {
    id: 1,
    title: "Elegant Evening Dress",
    price: "Rp 1.200.000",
    image:
      "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Casual Summer Dress",
    price: "Rp 850.000",
    image:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Office Blazer Set",
    price: "Rp 1.500.000",
    image:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Winter Coat",
    price: "Rp 1.800.000",
    image:
      "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function WomenPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Women&apos;s Collection
        </h1>
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
                <p className="text-gray-600">{product.price}</p>
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
