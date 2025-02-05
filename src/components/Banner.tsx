import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex h-32 justify-center items-center">
      <Link href="/">
        <h1 className="scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl lg:font-black">
          E-COMMERCE SITE
        </h1>
      </Link>
    </div>
  );
}
