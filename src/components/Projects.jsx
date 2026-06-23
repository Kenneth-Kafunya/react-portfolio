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

      {/* Grid container wrapping the dynamic cards */}
      <div className="projectTilesContainer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto p-11 gap-11 justify-center items-start max-sm:p-6">
        {posts.map((post) => (
          <ProjectCard key={post._id} post={post} urlFor={urlFor} />
        ))}
      </div>
    </section>
  );
}
