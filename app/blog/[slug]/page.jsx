import Link from "next/link";
export const revalidate = 60;

// Fetch single post by slug
async function getPost(slug) {
  const res = await fetch(
    `https://mainstreetdental.com.au/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data[0];
}

// Fetch related posts (excluding current)
async function getRelatedPosts(currentId) {
  const res = await fetch(
    `https://mainstreetdental.com.au/wp-json/wp/v2/posts?per_page=4&_embed&exclude=${currentId}`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) return <p className="text-center py-10">Post not found</p>;

  const relatedPosts = await getRelatedPosts(post.id);

  return (
    <main className="max-w-8xl mx-auto px-6 py-10 bg-[#C7EFFF]"  style={{ fontFamily: 'OptimaModoki, sans-serif' }}>
      {/* Title */}
      <h1
        className="text-4xl font-bold text-[#1C4C57] mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      {/* Image + Sidebar in 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
  {/* Featured Image - 70% */}
  <div className="lg:col-span-7">
    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
      <div className="mb-8">
        <img
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
          className="w-full rounded-lg shadow"
        />
      </div>
    )}
  </div>

{/* Related Blogs - 20% */}
<div className="lg:col-span-3 ">
  <aside className="space-y-6">
    <h2 className="text-xl font-semibold text-[#1C4C57] mb-4">
      Related Blogs
    </h2>
    <div className="space-y-6">
      {relatedPosts.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item.slug}`}
          className="flex items-center gap-4 p-3 rounded shadow bg-[#93D9E6] hover:bg-[#7bc6d4] transition"
        >
          {item._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <img
              src={item._embedded["wp:featuredmedia"][0].source_url}
              alt={item.title.rendered}
              className="w-20 h-16 object-cover rounded"
            />
          )}
          <p
            className="text-sm text-[#1C4C57] font-medium"
            dangerouslySetInnerHTML={{ __html: item.title.rendered }}
          />
        </Link>
      ))}

      <div className="mt-10">
        <Link href="/blog">
          <button className="w-full bg-[#1C4C57] text-white py-3 rounded-lg shadow hover:bg-[#163a44] transition text-lg font-semibold">
            View All Related Health Blogs
          </button>
        </Link>
      </div>
    </div>
  </aside>
</div>

</div>


      {/* Post Content */}
{/* Post Content */}
<article
  className="prose max-w-none text-[#1C4C57]
    prose-h1:text-5xl prose-h1:font-extrabold prose-h1:mb-8 prose-h1:mt-12
    prose-h2:text-4xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-10
    prose-h3:text-3xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8
    prose-p:text-xl prose-p:leading-relaxed prose-p:mb-6 prose-p:font-medium
    prose-strong:font-extrabold prose-strong:text-[#163a44]
    prose-li:text-xl prose-li:mb-2 prose-li:marker:text-[#1C4C57]
    prose-blockquote:text-2xl prose-blockquote:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-[#93D9E6] prose-blockquote:pl-6 prose-blockquote:italic
    prose-table:border prose-table:border-[#1C4C57] prose-table:border-collapse
    prose-th:border prose-th:border-[#1C4C57] prose-th:bg-[#93D9E6] prose-th:p-4 prose-th:text-[#1C4C57] prose-th:font-bold prose-th:text-xl
    prose-td:border prose-td:border-[#1C4C57] prose-td:p-4 prose-td:text-[#1C4C57] prose-td:text-xl
    prose-a:text-[#0d6efd] prose-a:underline hover:prose-a:text-[#093f6b]"
  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
/>


    </main>
  );
}
