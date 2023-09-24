const CommentSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 border rounded p-4">
      <div className="flex items-center gap-4">
        <div className="bg-slate-100 rounded-full w-12 h-12 animate-pulse" />
        <div className="flex flex-col">
          <h2 className="bg-slate-100 w-32 rounded-full h-6 animate-pulse" />
          <h2 className="bg-slate-100 w-32 rounded-full h-6 animate-pulse" />
        </div>
      </div>
      <h2 className="bg-slate-100 w-full rounded-full h-6" />
    </div>
  );
};

export default CommentSkeleton;
