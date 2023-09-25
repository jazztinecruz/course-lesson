import Hero from "@/components/hero";
import Mission from "./_components/mission";
import Partnerships from "./_components/partnerships";
import Quote from "./_components/quote";

export const metadata = {
  title: "NuCamp | About",
};

const AboutPage = async () => {
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
      <Partnerships />
    </div>
  );
};
export default AboutPage;
