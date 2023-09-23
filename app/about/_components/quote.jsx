import Image from "next/image";

const Quote = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center px-4 h-64">
      <Image src="/images/icons/quote.png" alt="Quote Icon" width={40} height={40} />
      <p className="max-w-2xl text-lg font-medium">
        I will not follow where the path may lead, but I will go where there is
        no path, and I will leave a trail.
      </p>
      <span>
        - Muriel Strode, &apos;Wind-Wafted Wild Flowers&apos; - The Open Court, 1903
      </span>
    </section>
  );
};

export default Quote;
