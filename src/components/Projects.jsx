import React, { useState, useEffect } from "react";
import { client } from "/sanityClient";
import { urlFor } from "/imageURL";
import Heading from "./Heading.jsx";

const POSTS_QUERY = `
  *[_type == "caseStudy" && defined(slug.current) ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    heroImage,
  }
`;

export default function Projects() {
  const [posts, setPosts] = useState([]);
  console.log("Posts:", posts);

  useEffect(() => {
    client.fetch(POSTS_QUERY).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="projects" className="h-auto p-8 relative">
      <Heading
        sub={"Case studies"}
        smallTextColor={"text-gray-500"}
        heading={"My Projects"}
        textColor={"text-gray-700"}
      />

      <div className="projectTilesContainer grid grid-cols-[360px_360px] h-auto p-11 grid-rows-1fr gap-11 justify-center max-sm:grid-cols-1 max-sm:gap-12 max-sm:p-6 max-md:grid-cols-1 [@media(min-width:768px)_and_(max-width:1024px)]:gap-0">
        {posts.map((post) => {
          return (
            <div
              key={post._id}
              className="projects relative w-auto h-auto p-4 max-sm:p-2"
            >
              {" "}
              <div className="imgTile w-fit h-fit cursor-pointer">
                <a
                  href={`https://blog.kennethkafunya.com/${post.slug.current}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={urlFor(post.heroImage).width(400).height(300).url()}
                    alt={post.title}
                    className="grayscale-90"
                    format="webp"
                  />
                </a>
              </div>
              <div className="flex flex-col max-w-[400px] fit-content h-auto p-2">
                <a
                  href={`https://blog.kennethkafunya.com/${post.slug.current}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <p className="font-medium text-gray-500 pt-2">
                    {post.publishedAt}
                  </p> */}
                  <span className="text-left text-lg font-medium flex flex-col items-center justify-center h-fit py-6 pt-2 rounded-b-2xl text-gray-800  max-sm:h-auto max-sm:text-lg">
                    {post.title}{" "}
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
