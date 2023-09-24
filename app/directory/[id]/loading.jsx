import CommentSkeleton from "../../../components/skeleton/comment";

const CampsiteLoadingPage = () => {
  return (
    <div className="space-y-4">
      <div className="relative h-96 grid p-4 bg-slate-100 animate-pulse" />

      <div className="grid lg:grid-cols-[2fr,1fr] items-start gap-6">
        <div className="space-y-4">
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
          <CommentSkeleton />
        </div>
        <CommentForm campsiteId={campsite.id} />
      </div>
    </div>
  );
};

export default CampsiteLoadingPage;
