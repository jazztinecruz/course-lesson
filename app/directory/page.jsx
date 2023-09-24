import Hero from "@/components/hero";
import Card from "./_components/card";

export const metadata = {
  title: "NuCamp | Directory",
};

const DirectoryPage = async () => {
  const response = await fetch("http://localhost:3001/campsites");
  const campsites = await response.json();

  return (
    <div className="space-y-4">
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4 flex flex-col">
            <span>Bootcamp Campsites</span>
            <span>Explore Your Options</span>
          </h1>
          <p className="font-semibold">
            Welcome to our bootcamp campsites page! Here, you can find a list of
            all available campsites for your coding bootcamp experience. Choose
            the one that suits you best and start your coding journey today.
          </p>
        </div>
      </Hero>

      <ul className="grid lg:grid-cols-2 gap-4">
        {campsites.map((campsite) => (
          <Card key={campsite.id} campsite={campsite} />
        ))}
      </ul>
    </div>
  );
};

export default DirectoryPage;
