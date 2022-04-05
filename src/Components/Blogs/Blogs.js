import React from "react";

const Blogs = () => {
  return (
    <section>
      {/* <div className="flex my-4">
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
          <Link to="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full p-4">
              <p className="text-indigo-500 text-2xl font-medium">
                Should You Get Online Education?
              </p>
              <p className="text-gray-800 text-sm font-medium mb-2">
                A comprehensive guide about online education.
              </p>
              <p className="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having
                instant access to information at...
                <Link className="inline-flex text-indigo-500" to="#">
                  Read More
                </Link>
              </p>
              <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #online
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #internet
                </span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                  #education
                </span>
              </div>
              <div className="flex items-center mt-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                />

                <div className="pl-3">
                  <div className="font-medium">Jean Marc</div>
                  <div className="text-gray-600 text-sm">CTO of Supercars</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
            <Link to="#" className="w-full block h-full">
              <img
                alt="blog photo"
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white w-full p-4">
                <p className="text-indigo-500 text-2xl font-medium">
                  Should You Get Online Education?
                </p>
                <p className="text-gray-800 text-sm font-medium mb-2">
                  A comprehensive guide about online education.
                </p>
                <p className="text-gray-600 font-light text-md">
                  It is difficult to believe that we have become so used to
                  having instant access to information at...
                  <Link className="inline-flex text-indigo-500" to="#">
                    Read More
                  </Link>
                </p>
                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #online
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #internet
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #education
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  />

                  <div className="pl-3">
                    <div className="font-medium">Jean Marc</div>
                    <div className="text-gray-600 text-sm">
                      CTO of Supercars
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer mx-4 my-4">
            <Link to="#" className="w-full block h-full">
              <img
                alt="blog photo"
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white w-full p-4">
                <p className="text-indigo-500 text-2xl font-medium">
                  Should You Get Online Education?
                </p>
                <p className="text-gray-800 text-sm font-medium mb-2">
                  A comprehensive guide about online education.
                </p>
                <p className="text-gray-600 font-light text-md">
                  It is difficult to believe that we have become so used to
                  having instant access to information at...
                  <a className="inline-flex text-indigo-500" href="#">
                    Read More
                  </a>
                </p>
                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #online
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #internet
                  </span>
                  <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                    #education
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                  />

                  <div className="pl-3">
                    <div className="font-medium">Jean Marc</div>
                    <div className="text-gray-600 text-sm">
                      CTO of Supercars
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>What is Context API? </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  The Context API is a React structured who gives us permission
                  to share information one component to another. and solving a
                  big issue called prop-drilling. React Context API is a way to
                  share data or information effectively and less code repeating.
                  Context API is a (kind of) new feature added in version 16.3
                  of React that allows one to share state across the entire app
                  (or part of it) lightly and with ease. we have to use this
                  function React.createContext(). and has provider key to share
                  data to own childrens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion w-4/5	mt-10 mx-auto" id="accordionExample mt-5">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>What's are Inline Block Element?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              Inline Block is a feature of html5. Some of them are inline block
              and some of are block element. an inline block element only take
              space where it's stand for.Inline-block elements are similar to
              inline elements, except they can have padding and margins added on
              all four sides. You'll have to declare display: inline-block in
              your CSS code. One common use for using inline-block is for
              creating navigation links horizontally, as shown below.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
