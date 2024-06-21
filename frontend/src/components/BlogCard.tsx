import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  autherName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  autherName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const truncatedContent =
    content.length > 100 ? content.slice(0, 100) + "..." : content;
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4">
        <div className="flex">
          <Avatar name={autherName} size={"small"} />
          <div className="font-extralight pl-2 text-sm">{autherName}</div>

          <div className="flex flex-col pl-2 justify-center">
            <Circle />
          </div>

          <div className="pl-2 font-thin text-slate-00 text-sm">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{truncatedContent} </div>
        <div className="text-sm text-slate-500 font-thin pt-4 ">
          {`${Math.ceil(content.length / 100)} minutes(s)`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
        } `}
      >
        <span
          className={`text-xs font-medium text-gray-600 dark:text-gray-300 `}
        >
          {name[0]}
        </span>
      </div>
    </div>
  );
}
