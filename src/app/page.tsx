import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slides from "@/components/Slides";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Banner />
      <Navbar />
      <div className="flex-1 flex items-center justify-center gap-4">
        <h2 className="font-bold text-xl mr-[70px] animate-slide-out-left">
          NEW
        </h2>
        <Slides />
        <h2 className="font-bold text-xl ml-[70px] animate-slide-out-right">
          ARRIVAL
        </h2>
      </div>
      <div className="flex justify-center w-full py-5">
        <Footer />
      </div>
    </div>
  );
}
