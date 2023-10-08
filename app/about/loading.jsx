import CardSkeleton from "@/components/skeletons/card";
import Hero from "@/components/hero";

const AboutLoadingPage = () => {
  return (
    <div className="space-y-4">
      <Hero
        title="Get to Know Us Better."
        description="Discover Our Story and Mission. Learn about who we are, what we
            stand for, and our passion for connecting with the great companies.
            Join us on this journey."
      />

      <ul className="grid lg:grid-cols-2 gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </ul>
    </div>
  );
};

export default AboutLoadingPage;
