import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SingleNews from "../components/SingleNews";
import { data } from "../data/data";

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(25);
  const [news, setNews] = React.useState(data.news.slice(0, itemsPerPage));
  console.log({ itemsPerPage });
  console.log({ news: news.length });

  useEffect(() => {
    setNews(data.news.slice(0, itemsPerPage));
  }, [itemsPerPage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredNews = data.news.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setNews(filteredNews);
  };

  const name = localStorage.getItem("name");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        type: "spring",
        damping: 20,
      }}
      className="max-w-screen-xl mx-auto py-6 px-2"
    >
      <h1 className="text-4xl text-center mb-2 text-red-600 font-semibold">
        Welcome to News Room
      </h1>
      <p className="text-center text-gray-700 font-semibold mb-10">
        Bringing you news with or without the internet.
      </p>

      <div className="flex items-center justify-between mb-10 ">
        <div className="w-1/3  rounded">
          <input
            type="text"
            className="w-full outline-none rounded p-2"
            onChange={handleChange}
            placeholder="Search for news"
          />
        </div>
        {name ? (
          <p className="font-semibold text-teal-500">Welcome {name} 👋🏼</p>
        ) : (
          <div className="flex gap-4">
            {/* <Link
              to={"/login"}
              className="bg-teal-500 py-2 px-14 text-white rounded-md hover:bg-teal-600 transition-all duration-200 active:bg-teal-700"
            >
              Sign In
            </Link> */}
            <Link
              to={"/signup"}
              className="bg-teal-500 py-2 px-5 text-white rounded-md hover:bg-teal-600 transition-all duration-200 active:bg-teal-700"
            >
              Create Account
            </Link>
          </div>
        )}
      </div>

      <motion.ul className="">
        {news.map((item) => (
          <SingleNews key={item.id} newsContent={item} />
        ))}
      </motion.ul>

      <div>
        <button
          onClick={() => {
            setItemsPerPage((prev) => prev + 25);
            // setNews(data.news.slice(0, itemsPerPage));
          }}
          className="bg-teal-500 py-2 px-5 text-white rounded-md hover:bg-teal-600 transition-all duration-200 active:bg-teal-700"
        >
          Load More
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
