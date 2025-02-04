import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Slides() {
  return (
    <>
      <Carousel
        className="w-full max-w-sm"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4">
            <Image
              src="https://images.pexels.com/photos/30325910/pexels-photo-30325910/free-photo-of-elegant-black-and-white-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={500}
              height={500}
              alt="Picture 1"
            />
          </CarouselItem>
          <CarouselItem className="pl-4">
            <Image
              src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={500}
              height={500}
              alt="Picture 2"
            />
          </CarouselItem>
          <CarouselItem className="pl-4">
            <Image
              src="https://images.pexels.com/photos/17040865/pexels-photo-17040865/free-photo-of-a-woman-in-a-trench-coat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={500}
              height={500}
              alt="Picture 3"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
