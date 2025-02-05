export default function SectionBanner({ title }: { title: string }) {
  return (
    <div className="flex h-32 justify-center items-center">
      <h1 className="scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl lg:font-black">
        {title}
      </h1>
    </div>
  );
}
