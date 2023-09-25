import Details from "@/app/directory/[id]/_components/details";
import Comments from "@/app/directory/[id]/_components/comments";
import CommentForm from "@/app/directory/[id]/_components/form";
import { BASE_URL } from "@/constants/url";

const CampsitePage = async ({ params: { id } }) => {
  let campsite = {};

  try {
    const response = await fetch(`${BASE_URL}/campsites/${id}`);
    campsite = await response.json();
  } catch (error) {
    console.log(error);
  }

  if (!campsite) return null;

  return (
    <div className="space-y-4">
      <Details campsite={campsite} />
      <div className="grid lg:grid-cols-[2fr,1fr] items-start gap-6">
        <Comments campsiteId={campsite.id} />
        <CommentForm campsiteId={campsite.id} />
      </div>
    </div>
  );
};

export default CampsitePage;
