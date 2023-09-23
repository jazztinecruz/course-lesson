import { PARTNERSHIPS } from "@/constants/about";
import Image from "next/image";

const Partnerships = async () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-bold">Our Community Partners</h2>

      <ul className="grid md:grid-cols-2 gap-16 py-4 max-w-7xl">
        {PARTNERSHIPS.map((partner) => (
          <div
            key={partner.alt}
            className="flex flex-col justify-center items-center text-center gap-4">
            <Image
              src={partner.link}
              alt={partner.alt}
              width={90}
              height={70}
            />
            <h2 className="text-lg font-semibold">{partner.alt}</h2>
            <p className="max-w-xs -mt-2">{partner.description}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Partnerships;
