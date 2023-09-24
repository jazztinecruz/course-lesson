import CardSkeleton from "../components/skeleton/card";
import Hero from "@/components/hero";

const LoadingPage = () => {
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
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </ul>
    </div>
  );
};

export default LoadingPage;
