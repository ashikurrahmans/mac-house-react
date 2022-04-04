import React from "react";
import { Link } from "react-router-dom";
import Review from "../Reviews/Review";
import useReviews from "./../../Hooks/useReviews";

const Home = () => {
  const [reviews, setReviews] = useReviews([]);

  return (
    <section>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              New guts. More glory.
            </h1>
            <p className="mb-8 leading-relaxed">
              The Apple M1 chip takes our most versatile, do-it-all desktop into
              another dimension. With up to 3x faster CPU performance. Up to 6x
              faster graphics. An advanced Neural Engine for up to 15x faster
              machine learning. Get ready to work, play, and create on Mac mini
              with speed and power beyond anything you ever imagined.
            </p>
            <div className="flex justify-center">
              <Link
                to="/reviews"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Check Reviews
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.apple.com/v/mac-mini/o/images/overview/hero__x8ruukomx2au_large.jpg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-auto mt-10 mb-10">
        {reviews.slice(0, 3).map((review) => (
          <Review review={review} key={review.id}></Review>
        ))}
      </div>

      <Link
        to="/reviews"
        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        All Reviews
      </Link>
    </section>
  );
};

export default Home;
