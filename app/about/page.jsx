import Hero from "@/components/hero";
import Mission from "./_components/mission";
import Partnerships from "./_components/partners";
import Promotions from "./_components/promotions";
import Quote from "./_components/quote";
import { BASE_URL } from "@/constants/url";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "NuCamp | About",
};

const AboutPage = async () => {
  let partners = [];
  let promotions = [];

  try {
    const partnerResponse = await fetch(`${BASE_URL}partners`);
    partners = await partnerResponse.json();

    const promotionResponse = await fetch(`${BASE_URL}promotions`);
    promotions = await promotionResponse.json();
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
