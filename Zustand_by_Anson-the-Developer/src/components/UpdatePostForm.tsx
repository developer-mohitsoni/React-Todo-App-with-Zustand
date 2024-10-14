import { useState } from "react";
import { Post, usePostsStore } from "../store/store";

const UpdatePostForm = () => {
  const { posts, addPost, removePost } = usePostsStore();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postIdCounter, setPostIdCounter] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent form from submitting
        setTitle("");
        setContent("");
      }}
    >
      <div className="mt-5">
        <input
          type="text"
          className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-blue-700 border border-blue-700 mb-5 placeholder-orange-500"
          value={title}
          placeholder="Write your title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-blue-700 border border-blue-700 placeholder-orange-500"
          value={content}
          placeholder="Write your content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={() => {
            addPost({ title, content, id: postIdCounter.toString() });
            setPostIdCounter((prev) => prev + 1);
            setTitle("");
            setContent("");
          }}
          className="font-bold text-red-700 mt-5 bg-black rounded-lg w-full h-12"
        >
          Add Post
        </button>

        <div className="mt-5 text-xl">
          <h1 className="text-yellow-500">Posts:-</h1>
          <div className="text-pink-500">
            {posts.map((post: Post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>

                <button
                  className="font-bold text-red-700 mt-5 bg-black rounded-lg w-full h-12"
                  onClick={() => removePost(post.id)}
                >
                  Delete Post
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdatePostForm;
