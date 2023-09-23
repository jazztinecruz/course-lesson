import Hero from "@/components/hero";

const serverUrls = [
  "http://localhost:3001/campsites",
  "http://localhost:3001/partners",
  "http://localhost:3001/promotions",
];

const HomePage = async () => {
  const response1 = await fetch(serverUrls[0]);
  const campsites = await response1.json();

  const response2 = await fetch(serverUrls[1]);
  const partners = await response2.json();

  const response3 = await fetch(serverUrls[2]);
  const promotions = await response3.json();

  const featured = [
    ...campsites
      .filter((campsite) => campsite.featured)
      .map((campsite) => campsite),
    ...partners.filter((partner) => partner.featured).map((partner) => partner),
    ...promotions
      .filter((promotion) => promotion.featured)
      .map((promotion) => promotion),
  ];

  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Embark on Your Tech Journey Today.
          </h1>
          <p className="text-lg font-semibold">
            Unlock Your Coding Potential with the Highest-Rated and
            Budget-Friendly Coding Bootcamps. Transform into a software engineer
            with our cutting-edge curriculum, adaptable learning hours, seasoned
            mentors, and cost-effective tuition.
          </p>
        </div>
      </Hero>

      <ul className="grid lg:grid-cols-2 gap-4">
        {featured.map((featured) => (
          <div
            key={featured.id}
            className="relative border rounded p-8 flex flex-col gap-4 shadow group">
            <div className="bg-slate-100 rounded-full w-12 h-12"></div>
            <h2 className="text-xl font-bold">{featured.name}</h2>
            <p className="text-gray-500">{featured.description}</p>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink group-hover:w-full duration-500" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
