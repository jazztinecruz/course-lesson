const CardSkeleton = () => {
  return (
    <div className="relative border rounded p-8 flex flex-col gap-4 shadow">
      <div className="bg-slate-100 rounded-full w-12 h-12 animate-pulse" />
      <h2 className="bg-slate-100 w-32 rounded-full h-6 animate-pulse" />
      <h2 className="bg-slate-100 w-full rounded-full h-6 animate-pulse" />
    </div>
  );
};

export default CardSkeleton;
