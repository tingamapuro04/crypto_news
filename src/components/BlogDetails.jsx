import { useParams } from "react-router-dom";
import blogs from "../data/blog";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
