export const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className=" animate-pulse">
        <div className="p-4 border-b border-slate-200 pb-4">
          <div className="flex">
            <div className="h-6 w-6 bg-gray-200 rounded-full  mb-4"></div>
            {/*    */}
            <div className="max-w-xl w-full flex flex-col justify-center ml-3">
              <div className="flex flex-col pl-2 justify-center"></div>
              <div className=" w-full h-2 bg-gray-200 rounded-full  mb-2.5"></div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            </div>
          </div>
          <div className="text-xl font-semibold pt-2">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="text-md font-thin"></div>
          <div className="text-sm text-slate-500 font-thin pt-4 ">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
