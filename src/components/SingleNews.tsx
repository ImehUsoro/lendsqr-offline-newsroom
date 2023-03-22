import { Link } from "react-router-dom";
import { NewsType } from "../types/NewsType";

interface SingleNewsProps {
  newsContent: NewsType;
}

const SingleNews = ({ newsContent }: SingleNewsProps) => {
  return (
    <Link to={`/news/${newsContent.id}`}>
      <div className="bg-white shadow-sm rounded-md my-4 py-6 p-3 hover:bg-gray-300 transition duration-200">
        <h2 className="text-lg font-semibold text-red-500">
          {newsContent.title}
        </h2>
        <p>{newsContent.excerpt}</p>
      </div>
    </Link>
  );
};

export default SingleNews;
