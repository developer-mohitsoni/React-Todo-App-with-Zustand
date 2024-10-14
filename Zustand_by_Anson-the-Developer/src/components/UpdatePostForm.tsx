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
        e.preventDefault();
        addPost({ title, content, id: postIdCounter.toString() });
        setPostIdCounter((prev) => prev + 1);
        setTitle("");
        setContent("");
      }}
    >
      <div className="space-y-5">
        <input
          type="text"
          className="w-full h-12 p-3 rounded-lg bg-[#333] text-white placeholder-gray-400 border border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
          value={title}
          placeholder="Write your title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full h-12 p-3 rounded-lg bg-[#333] text-white placeholder-gray-400 border border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
          value={content}
          placeholder="Write your content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="w-full h-12 font-bold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Post
        </button>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-yellow-500 mb-4">Posts</h2>
          <div className="space-y-5">
            {posts.map((post: Post) => (
              <div
                key={post.id}
                className="p-4 rounded-lg bg-[#333] border border-gray-600"
              >
                <h3 className="text-lg font-bold text-pink-400">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.content}</p>
                <button
                  className="mt-4 w-full h-10 font-bold bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
