import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
export const SingleBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-10 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-300">Post on 2nd December 2023</div>
            <div className=" pt-4 ">{blog.content}</div>
          </div>

          <div className="col-span-4 ">
            <div className=" text-slate-600 text-lg">Auther</div>

            <div className="w-full flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.auther.name[0] || "A"} size={"small"} />
              </div>
              <div className="flex">
                <div className="">
                  <div className="text-xl font-bold">
                    {blog.auther.name || "Anonymous"}
                  </div>
                  <div className="pt-2 text-slate-500">
                    Random cathch phrase aboout a auther's ability to grab the
                    attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
