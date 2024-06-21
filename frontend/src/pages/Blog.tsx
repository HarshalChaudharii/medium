import { Appbar } from "../components/Appbar";
import { SingleBlog } from "../components/SingleBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  return (
    <div>
      <Appbar />
      {loading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <Spinner />
          </div>
        </div>
      ) : blog ? (
        <SingleBlog blog={blog} />
      ) : (
        <div>Blog not found or still loading...</div>
      )}
    </div>
  );
};
