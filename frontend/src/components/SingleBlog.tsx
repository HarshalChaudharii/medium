import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const SingleBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex ml-24 mr-32 space-x-7 justify-center">
      <div className="flex flex-col  md:flex-row w-full px-10 max-w-screen-xl pt-12 space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-2/3">
          <div className="text-3xl font-extrabold">{blog.title}</div>

          <div className="text-slate-300">Posted on 2nd December 2023</div>
          <div className=" pt-4 ">{blog.content}</div>
        </div>
      </div>

      <div className="md:w-1/3">
        <div className="text-slate-600 text-lg">Author</div>
        <div className="flex items-center mt-4">
          <div className="flex-shrink-0 pr-4">
            <Avatar name={blog.auther.name[0] || "A"} size={"small"} />
          </div>
          <div>
            <div className="text-xl font-bold">
              {blog.auther.name || "Anonymous"}
            </div>
            <div className="pt-2 text-slate-500">
              Random catchphrase about an author's ability to grab attention.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
