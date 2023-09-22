import Hero from "./_components/hero";
import Mission from "./_components/mission";
import Partnerships from "./_components/partnerships";
import Quote from "./_components/quote";

const AboutPage = () => (
  <div className="grid gap-16">
    <Hero />
    <Mission />
    <Quote />
    <Partnerships />
  </div>
);

export default AboutPage;
