// components/blogs/BlogListClient.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MeetTheTeam from "@/components/team";

export default function BlogListClient() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://mainstreetdental.com.au/wp-json/wp/v2/posts?_embed&per_page=20"
      );
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (posts.length === 0) return <p>Loading blog posts...</p>;

  return (
    <div>
    <div className="px-10 py-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post) => {
        const featuredImage =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <article
            key={post.id}
            className="bg-[#1C4C57] rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {featuredImage && (
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex flex-col flex-1">
              <h2
                className="text-xl font-semibold mb-2 text-[#93D9E6] hover:underline"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p
                className="text-white text-lg  mb-4 flex-1"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#93D9E6] font-medium hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
    <MeetTheTeam/>
    </div>
  );
}
