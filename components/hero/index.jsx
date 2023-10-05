const Hero = ({ title, description }) => {
  return (
    <section className="p-4 relative bg-gradient-to-b from-blue to-pink bg-opacity-50 text-white grid place-items-center text-center py-20">
      <div className="max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-semibold">{description}</p>
      </div>
    </section>
  );
};

export default Hero;
