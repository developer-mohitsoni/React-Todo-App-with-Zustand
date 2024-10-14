import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// export interface PostsSlice {
//   usernames: string;
// }

// export const createPostsSlice: StateCreator<PostsSlice> = (set) => ({
//   usernames: "mohit_2",
// });

// export const createUserSlice: StateCreator<UserSlice> = (set) => ({
//   username: "mohit",
//   email: "gta",
//   setUsername: (username: string) => set(() => ({ username })),
//   setEmail: (email: string) => set(() => ({ email })),
// });

// export const useAppStore = create(
//   devtools<UserSlice & PostsSlice>((...a) => ({
//     ...createUserSlice(...a),
//     ...createPostsSlice(...a),
//   }))
// );

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        email: "",
        setUsername: (username: string) => set(() => ({ username })),
        setEmail: (email: string) => set(() => ({ email })),
      }),
      { name: "user-storage" }
    ),
    { name: "user", store: "user" }
  )
);

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostsStore {
  posts: Post[] | [];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}

export const usePostsStore = create<PostsStore>()(
  devtools(
    persist(
      immer((set) => ({
        posts: [],
        setPosts: (posts: Post[]) => set(() => ({ posts })),
        addPost: (post: Post) =>
          set((state) => ({ posts: [...state.posts, post] })),
        removePost: (id: string) =>
          set((state) => ({
            posts: state.posts.filter((post: Post) => post.id !== id),
          })),
      })),
      { name: "post-storage" }
    ),
    { name: "posts", store: "posts" }
  )
);
