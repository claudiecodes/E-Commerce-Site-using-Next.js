import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slides from "@/components/Slides";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="flex justify-center p-10">
        <Slides />
      </div>
      <div className="flex justify-center">
        <h2 className="font-bold text-xl">NEW ARRIVAL</h2>
      </div>
      <div className="flex justify-center absolute bottom-5 w-full">
        <Footer />
      </div>
    </>
  );
}
