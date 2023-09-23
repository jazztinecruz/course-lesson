"use client";

import { useEffect, useState } from "react";

const Comments = ({ campsiteId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const handleFetchComments = async () => {
      const commentsResponse = await fetch(`http://localhost:3001/comments`);
      const comments = await commentsResponse.json();
      setComments(
        comments.filter((comment) => comment.campsiteId === campsiteId)
      );
      return comments;
    };

    handleFetchComments();
  }, []);

  return (
    <div className="space-y-4 ">
      <h2 className="font-semibold">All Comments ({comments.length})</h2>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex flex-col gap-4 border rounded p-4">
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center uppercase font-bold border border-pink text-sm">
                {comment.user.slice(0, 2)}
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{comment.user}</h3>
                <div className="flex items-center">
                  {Array(parseInt(comment.rating))
                    .fill()
                    .map((_, index) => (
                      <div key={index}>⭐</div>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-sm">{comment.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
