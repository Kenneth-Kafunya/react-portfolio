import React from "react";
import { AppWindow, Apple } from "lucide-react";

export default function ProjectCard({ post, urlFor }) {
  const title = post.title || "Untitled Project";
  const subtitle = post.subtitle || "Case Study";
  const description = post.description || "No description provided.";

  // Construct dynamic links using your slug pattern
  const projectUrl = `https://blog.kennethkafunya.com/${post.slug?.current || ""}`;
  const appStoreUrl = post.appStoreUrl || "#";

  // Build Sanity image URL dynamically, falling back to an Unsplash placeholder if heroImage is missing
  const imageUrl = post.heroImage
    ? urlFor(post.heroImage).width(1200).quality(85).auto("format").url()
    : "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="w-[380px] rounded-4xl border border-gray-100 bg-white p-4 shadow-xl font-sans max-sm:w-full max-sm:p-3">
      {/* Top Image Container */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-3xl">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="px-2 pt-5 pb-2">
        {/* Title & Subtitle */}
        <h2 className="m-0 text-2xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
        <p className="mt-0.5 text-sm font-medium text-gray-500">{subtitle}</p>

        {/* Project Description */}
        <p className="mt-4 text-[14px] leading-relaxed text-gray-600 line-clamp-3">
          {description}
        </p>

        {/* Dual Info Badges */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {/* App Store Redirect Block */}
          {post.appStoreUrl ? (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-3 text-center border border-gray-100 transition-colors hover:bg-gray-100 text-decoration-none group"
            >
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 flex items-center gap-1">
                <Apple className="h-3 w-3" /> App Store
              </span>
              <span className="mt-1 text-[13px] font-semibold text-blue-600 group-hover:underline">
                Download
              </span>
            </a>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-3 text-center border border-gray-100 opacity-50">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 flex items-center gap-1">
                App Store
              </span>
              <span className="mt-1 text-[13px] font-semibold text-gray-400">
                Web Only
              </span>
            </div>
          )}
        </div>

        {/* Primary Action Button */}
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 text-decoration-none"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
}
