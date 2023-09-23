import Link from "next/link";

const Card = ({ campsite }) => {
  return (
    <div className="relative border rounded p-8 flex flex-col gap-4 shadow group">
      <div className="bg-slate-100 rounded-full w-12 h-12"></div>
      <h2 className="text-xl font-bold">{campsite.name}</h2>
      <p className="text-gray-500">{campsite.description}</p>
      <Link
        href={`/directory/campsites/${campsite.id}`}
        className="text-sm text-gray-500 font-semibold hover:underline">
        Read More
      </Link>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink group-hover:w-full duration-500" />
    </div>
  );
};

export default Card;
