import CommentSkeleton from "../../../components/skeleton/comment";

const CampsiteLoadingPage = () => {
  return (
    <div className="space-y-4">
      <div className="relative h-96 grid p-4 bg-slate-100 animate-pulse" />

      <div className="space-y-4">
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
      </div>
    </div>
  );
};

export default CampsiteLoadingPage;
