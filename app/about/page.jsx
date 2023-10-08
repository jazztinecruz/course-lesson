import Hero from "@/components/hero";
import Mission from "./_components/mission";
import Partnerships from "./_components/partners";
import Promotions from "./_components/promotions";
import Quote from "./_components/quote";
import dbData from "@/data/db.json";

export const metadata = {
  title: "NuCamp | About",
};

const AboutPage = () => {
  let partners = [];
  let promotions = [];

  try {
    partners = dbData.partners;
    promotions = dbData.promotions;
  } catch (err) {
    throw new Error("Fetch Data Failed from About Page.");
  }

  return (
    <div className="grid gap-16">
      <Hero
        title="Get to Know Us Better."
        description="Discover Our Story and Mission. Learn about who we are, what we
            stand for, and our passion for connecting with the great companies.
            Join us on this journey."
      />
      <Mission />
      <Quote />
      <Partnerships partners={partners} />
      <Promotions promotions={promotions} />
    </div>
  );
};
export default AboutPage;
