import Banner from "@/components/Banner";
import ContentCard from "@/components/men/ContentCard";
import Navbar from "@/components/Navbar";
import SectionBanner from "@/components/SectionBanner";

export default function MenPage() {
  return (
    <>
      <Banner />
      <Navbar />
      <SectionBanner title={"MEN"} />
      <div className="flex justify-center gap-10">
        <ContentCard />
      </div>
    </>
  );
}
