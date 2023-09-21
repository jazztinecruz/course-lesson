import Hero from "./_component/hero";
import Mission from "./_component/mission";
import Partnerships from "./_component/partnerships";
import Quote from "./_component/quote";

const AboutPage = () => (
  <div className="grid gap-16">
    <Hero />
    <Mission />
    <Quote />
    <Partnerships />
  </div>
);

export default AboutPage;
