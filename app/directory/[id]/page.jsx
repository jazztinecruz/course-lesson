import Details from "@/app/directory/[id]/_components/details";
import CommentForm from "@/app/directory/[id]/_components/form";
import Comments from "@/app/directory/[id]/_components/comments";

export const getCampsitePageData = async ({ params: { id } }) => {
  try {
    const response = await fetch(`http://localhost:3001/campsites/${id}`);
    const campsite = await response.json();
    return campsite;
  } catch (error) {
    console.error(error);
  }
};

const CampsitePage = async ({ campsite }) => {
  if (!campsite) return null;

  return (
    <div className="space-y-4">
      <Details campsite={campsite} />
      <div className="grid lg:grid-cols-[2fr,1fr] items-start gap-6">
        <Comments campsiteId={campsite?.id} />
        <CommentForm campsiteId={campsite?.id} />
      </div>
    </div>
  );
};

export default CampsitePage;
