import { useEffect, useState } from "react";

function getBlogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/posts"
        );

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h2>{post.slug}</h2>
        </div>
      ))}
    </div>
  );
}

export default getBlogs;