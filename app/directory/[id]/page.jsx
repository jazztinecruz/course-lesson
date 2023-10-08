"use client";

import Details from "@/app/directory/[id]/_components/details";
import Comments from "@/app/directory/[id]/_components/comments";
import CommentForm from "@/app/directory/[id]/_components/form";
import dbData from "@/data/db.json";
import { useState, useEffect } from "react";

const CampsitePage = ({ params: { id } }) => {
  const [comments, setComments] = useState([]);
  const [campsite, setCampsite] = useState({});

  useEffect(() => {
    try {
      const campsites = dbData.campsites;
      const commentsData = dbData.comments;
      const selectedCampsite = campsites.find(
        (camp) => camp.id === parseInt(id)
      );
      const selectedComments = commentsData.filter(
        (comment) => comment.campsiteId === parseInt(id)
      );

      setCampsite(selectedCampsite);
      setComments(selectedComments);
    } catch (error) {
      throw new Error("Fetch Data Failed from Campground Page");
    }
  }, []);

  if (!campsite) return null;

  return (
    <div className="space-y-4">
      <Details campsite={campsite} />
      <div className="grid lg:grid-cols-2 items-start gap-6">
        <Comments comments={comments} />
        <CommentForm setComments={setComments} campsiteId={campsite.id} />
      </div>
    </div>
  );
};

export default CampsitePage;
