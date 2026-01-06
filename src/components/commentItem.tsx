import type { Comment } from "../lib/commentTree";

interface CommentItemProps {
  comments: Comment[];
}

export default function CommentIem({ comments }: CommentItemProps) {
  function renderComments(comments: Comment[], nestingLevel: number) {
    return (
      <>
        {comments.map((c, i) => {
          return (
            <div key={i}>
              <div
                style={{ marginLeft: nestingLevel * 16 }}
                className={`flex flex-col gap-2 border border-gray-500 bg-gray-400 rounded-md w-fit  py-2 px-4 my-2`}
              >
                <h3 className="text-2xl font-semibold">{c.user.name}</h3>
                <p>{c.value}</p>
                <p>{c.likes}</p>
              </div>
              {renderComments(c.children, nestingLevel + 1)}
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className="flex flex-col gap-2">{renderComments(comments, 0)}</div>
  );
}
