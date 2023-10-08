import Image from "next/image";

const Details = ({ campsite }) => {
  return (
    <div className="relative h-96 grid p-4">
      <Image
        src={campsite.image}
        alt={campsite.name}
        fill
        className="-z-10 rounded-md object-cover"
      />

      <div className="flex flex-col mt-auto gap-2 z-10">
        <h2 className="text-2xl font-bold text-white">{campsite.name}</h2>
        <p className="text-white opacity-75 font-semibold max-w-2xl">
          {campsite.description}
        </p>
        <span className="text-white text-sm opacity-75 font-semibold">
          Elevation: {campsite.elevation}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black/75 to-transparent rounded-md" />
    </div>
  );
};

export default Details;
