import Image from "next/image";

const Partnerships = async () => {
  const response = await fetch("http://localhost:3001/partners");
  const partnerships = await response.json();

  console.log({ partnerships });

  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-bold">Our Community Partners</h2>

      <ul className="grid md:grid-cols-2 gap-16 py-4 max-w-7xl">
        {partnerships.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col justify-center items-center text-center gap-4">
            <Image
              src={partner.image}
              alt={partner.name}
              width={90}
              height={70}
            />
            <h2 className="text-lg font-semibold">{partner.name}</h2>
            <p className="max-w-xs -mt-2">{partner.description}</p>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Partnerships;