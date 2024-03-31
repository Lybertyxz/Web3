import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apiService } from "../../utils/api";
import { Post } from "../../utils/types";

function Post() {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (postId) {
      const fetchData = async () => {
        try {
          const fetchedPost = await apiService.getPost(postId as string);
          setPost(fetchedPost);
        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };

      fetchData();
    }
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.desc}</p>
    </div>
  );
}

export default Post;
