import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";

import { data } from "../data/data";

const NewsContent = () => {
  const { id } = useParams();
  const [feedbackInput, setFeedbackInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const news = data.news.find((item) => item.id === id);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!feedbackInput) {
      toast.error("Feedback cannot be empty");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setFeedbackInput("");
      toast.success("Feedback submitted successfully");
    }, 2000);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4">
      <Link
        to="/"
        className="border border-gray-400 py-2 px-6 hover:bg-gray-400 hover:text-white shadow-sm rounded-md"
      >
        Go back
      </Link>

      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -500 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          type: "spring",
          damping: 20,
        }}
      >
        <h1 className="text-4xl mb-2 text-red-600 font-semibold mt-7">
          {news?.title}
        </h1>
        <p className="">{news?.story_content}</p>

        {!ratingSubmitted && (
          <div className="flex items-center gap-4 mt-10 ">
            <p className="text-lg font-semibold">Rate this news</p>
            <select
              name=""
              id=""
              className="bg-inherit border-black border p-2 rounded outline-none"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>

            <button
              onClick={() => {
                setTimeout(() => {
                  setLoading(false);
                  setFeedbackInput("");
                  toast.success("Rating submitted successfully");
                  setRatingSubmitted(true);
                }, 2000);
              }}
              className="bg-teal-500 py-2 px-5 text-white rounded hover:bg-teal-600 active:bg-teal-700 transition-all duration-200"
            >
              Submit rating
            </button>
          </div>
        )}

        <div className="mt-10 max-w-screen-md">
          <h3 className="text-2xl">Give feedback</h3>
          <form action="" className="" onSubmit={handleSubmit}>
            <textarea
              name=""
              id=""
              rows={4}
              value={feedbackInput}
              onChange={handleChange}
              placeholder="Give your feedback"
              className="resize-none w-full rounded-sm shadow-sm mt-4 p-4 outline-none text-lg placeholder:text-lg mb-4"
            ></textarea>

            <button
              type="submit"
              className="bg-teal-500 py-2 px-6 rounded text-white hover:bg-teal-600 active:bg-teal-700 transition-all duration-200 float-right disabled:opacity-40 disabled:hover:bg-teal-500 disabled:cursor-not-allowed"
              disabled={!feedbackInput || loading}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsContent;
