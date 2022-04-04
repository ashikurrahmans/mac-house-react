import React from "react";

const Blog = () => {
  return (
    <div>
      <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-60 bg-gray-400 rounded-lg w-500">
            <img
              src="https://miro.medium.com/max/1000/1*pd9XqkTCXjNzmV3FTS85tw.jpeg"
              alt=""
            />
          </div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">
              Google Security Misconfiguration
            </h4>
            <p class="text-sm">
              Thank you for taking the time to read about “ Google Security
              Misconfiguration Leads to Account Takeover !
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-indigo-600 text-xs uppercase text-white px-4"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg"></div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">Heading</h4>
            <p class="text-sm">
              Some text about the thing that goes over a few lines.
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg"></div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">Heading</h4>
            <p class="text-sm">
              Some text about the thing that goes over a few lines.
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
          <div class="h-40 bg-gray-400 rounded-lg"></div>
          <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">Heading</h4>
            <p class="text-sm">
              Some text about the thing that goes over a few lines.
            </p>
            <a
              class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
