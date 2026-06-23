import React, { useState, useEffect } from "react";
import { client } from "/sanityClient";
import { urlFor } from "/imageURL";
import Heading from "./Heading.jsx";
import ProjectCard from "./ProjectCard.jsx";

const POSTS_QUERY = `
  *[_type == "caseStudy" && defined(slug.current) ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    heroImage,
    subtitle,
    appStoreUrl,
    tags
  }
`;

export default function Projects() {
  const [posts, setPosts] = useState([]);
  //console.log("Posts:", posts);

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

      {/* Grid container wrapping the dynamic cards */}
      <div className="projectTilesContainer grid grid-cols-[360px_360px] h-auto p-11 grid-rows-1fr gap-14 justify-center max-sm:grid-cols-1 max-sm:gap-12 max-sm:p-2 max-md:grid-cols-1 [@media(min-width:768px)_and_(max-width:1024px)]:gap-0">
        {posts.map((post) => (
          <ProjectCard key={post._id} post={post} urlFor={urlFor} />
        ))}
      </div>
    </section>
  );
}
