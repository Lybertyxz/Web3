import { useState, useEffect } from "react";
import { apiService } from "../../utils/api";
import PostCard from "../../components/PostCard";
import { Post } from "../../utils/types";

// const postData: Post[] = [
//   {
//     title: "titre",
//     desc: "description",
//   },
//   {
//     title: "titre2",
//     desc: "description",
//   },
//   {
//     title: "titre3",
//     desc: "description",
//   },
//   {
//     title: "titre4",
//     desc: "description",
//   },
//   {
//     title: "titre5",
//     desc: "description",
//   },
// ];

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await apiService.listPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        <div className="grid gap-3 p-4">
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                id={post.ID.toString()}
                title={post.title}
                desc={post.desc}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="flex h-screen items-center justify-center text-xl">
          No posts found
        </p>
      )}
    </div>
  );
};

export default PostsPage;
