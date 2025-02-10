"use client";
import { Women } from "@/lib/types";

export default function ContentCard() {
  const [womenCard, setWomenCard] = useState<Women[]>([]);

  const fetchWomenCard = async () =>{
    try {
        const fetchedWomen = await fetchGetWomen()
    } catch (error) {
        
    } finally{

    }
  }
  return <></>;
}
