import CommentIem from "./components/commentItem";
import type { Comment, User } from "./lib/commentTree";

const userA: User = { name: "Ahmed" };
const userB: User = { name: "Sara" };
const userC: User = { name: "Youssef" };

const exampleComments: Comment[] = [
  {
    value: "This is the first comment",
    likes: 5,
    user: userA,
    children: [
      {
        value: "Reply to first comment",
        likes: 2,
        user: userB,
        children: [
          {
            value: "Nested reply",
            likes: 1,
            user: userC,
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: "Second top-level comment",
    likes: 3,
    user: userC,
    children: [],
  },
];
function App() {
  return (
    <div>
      <CommentIem comments={exampleComments}></CommentIem>
    </div>
  );
}

export default App;
