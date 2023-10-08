import Card from "@/components/cards";

const Partners = ({ partners }) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-xl md:text-2xl font-bold">
        Our Community Partners
      </h2>

      <ul className="grid lg:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <Card data={partner} key={partner.id} />
        ))}
      </ul>
    </section>
  );
};

export default Partners;
