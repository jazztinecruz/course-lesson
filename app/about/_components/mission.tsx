import { metrics } from "@/constants/about";

const Mission = () => {
  return (
    <div className="flex flex-col items-center gap-16 px-4">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-2xl font-bold">Our Mission</h1>
        <p className="max-w-3xl">
          We present a curated database of the best campsites in the vast woods
          and backcountry of the World Wide Web Wilderness. We increase access
          to adventure for the public while promoting safe and respectful use of
          resources. The expert wilderness trekkers on our staff personally
          verify each campsite to make sure that they are up to our standards.
          We also present a platform for campers to share reviews on campsites
          they have visited with each other.
        </p>
      </div>

      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="relative group border rounded-md px-4 py-8 flex flex-col text-center items-center">
            <div className="h-1 bg-pink absolute top-0 left-0 w-0 group-hover:w-full duration-500" />
            <span className="text-xl text-pink font-bold">{metric.value}</span>
            <span className="text-sm text-gray-500">{metric.name}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Mission;
