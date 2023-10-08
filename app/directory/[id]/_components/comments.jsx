"use client";

const Comments = ({ comments }) => {
  if (!comments) return null;

  return (
    <div className="space-y-4">
      <h2 className="font-semibold">All Comments ({comments.length})</h2>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="flex flex-col gap-4 border rounded p-4">
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center uppercase font-bold border border-pink text-sm">
                {comment.author?.slice(0, 2) ?? ""}
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{comment.author}</h3>
                <div className="flex items-center">
                  {Array(parseInt(comment?.rating ?? 0))
                    .fill()
                    .map((_, index) => (
                      <div key={index}>⭐</div>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-sm">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
