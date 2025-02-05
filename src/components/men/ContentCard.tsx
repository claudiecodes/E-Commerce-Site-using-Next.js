"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { fetchGetMen } from "@/lib/actions";
import { Men } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContentCard() {
  const [menCard, setMenCard] = useState<Men[]>([]);

  const fetchMenCard = async () => {
    try {
      const fetchedMen = await fetchGetMen();

      setMenCard(fetchedMen);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchMenCard();
  }, []);
  return (
    <>
      {menCard.map((men) => (
        <Card key={men.id} className="w-[350px]">
          <Image src={men.image} height={500} width={500} alt="Card Content" />

          <div className="p-2">
            <CardTitle>{men.title}</CardTitle>
            <CardDescription>{men.price}</CardDescription>
          </div>
        </Card>
      ))}
    </>
  );
}
