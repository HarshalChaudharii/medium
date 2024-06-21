import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center cursor-pointer font-bold">
        <Link to={"/blogs"}>Medium</Link>
      </div>

      <div className="flex">
        <Link to={"/publish"}>
          <button
            type="button"
            className=" mr-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            New
          </button>
        </Link>
        <div>
          <Avatar name={"Ananymous"} size={"big"} />
        </div>
      </div>
    </div>
  );
};
