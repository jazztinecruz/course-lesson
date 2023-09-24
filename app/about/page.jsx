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
          <h1 className="text-3xl font-bold mb-4 flex flex-col">
            <span>Coding Bootcamps Designed for </span>
            <span>Work-Life Balance</span>
          </h1>
          <p className="font-semibold">
            The complete software engineering bootcamp path brings together
            everything Nucamp has to offer in the web development space.
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
