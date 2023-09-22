type Props = {
  children: React.ReactNode;
};

const Hero = ({children }: Props) => {
  return (
    <section className="relative bg-gradient-to-b from-blue to-pink bg-opacity-50 text-white grid place-items-center text-center py-20">
      <div className="max-w-xl">{children}</div>
    </section>
  );
};

export default Hero;
