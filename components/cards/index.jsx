import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/constants/url";

const Card = ({ data, hasReadMore }) => {
  return (
    <div
      key={data.id}
      className="relative border rounded p-8  grid lg:grid-cols-2 gap-4 shadow group">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-xl font-bold">{data.name}</h2>
        <p className="text-gray-500 text-sm">{data.description}</p>

        <div className="flex flex-wrap gap-2">
          {data.featured && (
            <div className="bg-pink text-white rounded px-3 py-1 w-fit text-xs">
              Featured
            </div>
          )}
          {data.elevation && (
            <div className="bg-slate-200  rounded px-3 py-1 w-fit text-xs">
              Elevation: {data.elevation}
            </div>
          )}
        </div>

        {hasReadMore && (
          <Link
            href={`/directory/${data.id}`}
            className="text-sm text-gray-500 font-semibold hover:underline mt-auto">
            Read More
          </Link>
        )}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink group-hover:w-full duration-500" />
      </div>
      <div className="w-full h-64 lg:h-full relative">
        <Image
          src={`${BASE_URL}${data.image}`}
          alt={data.image}
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default Card;
