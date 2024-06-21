import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="w-full mt-4 max-w-screen-lg">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="comment"
            className="w-full mb-4 pt-2 px-0 text-sm text-gray-900 bg-grey-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            placeholder="Title..."
            required
          ></input>
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );

              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="pt-4 mt-3 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <div className="  bg-white rounded-b-lg border     ">
        <label className="sr-only">Publish post</label>
        <textarea
          onChange={onChange}
          id="editor"
          rows={8}
          className="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0 pl-2 focus:outline-none "
          placeholder="Write an article..."
          required
        ></textarea>
      </div>
    </div>
  );
}
