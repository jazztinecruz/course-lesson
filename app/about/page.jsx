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
      <Hero>
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Get to Know Us Better.</h1>
          <p className="text-lg font-semibold">
            Discover Our Story and Mission. Learn about who we are, what we
            stand for, and our passion for connecting with the great companies.
            Join us on this journey.
          </p>
        </div>
      </Hero>

      <Mission />
      <Quote />
      <Partnerships />
    </div>
  );
};
export default AboutPage;
