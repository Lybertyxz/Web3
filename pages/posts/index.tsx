import { useState, useEffect } from "react";
import { apiService } from "../../utils/api";
import PostCard from "../../components/PostCard";
import { Post } from "../../utils/types";

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
        posts.map((post) => (
          <div key={post.id}>
            <PostCard title={post.title} desc={post.desc} />
          </div>
        ))
      ) : (
        <p className="flex h-screen items-center justify-center text-xl">
          No posts found
        </p>
      )}
    </div>
  );
};

export default PostsPage;
