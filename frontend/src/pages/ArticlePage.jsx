import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAPI, getFullMediaUrl } from "../lib/api";
import { blocksToHtml } from "../utils/blocksToHtml";

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetchAPI(
      `/api/articles?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=cover&populate=author&populate=categories&populate=tags`
    )
      .then((json) => setArticle(json.data?.[0] ?? null))
      .catch(console.error);
  }, [slug]);

  if (!article)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        Loading...
      </div>
    );

  const attrs = article;
const img =
  attrs.cover?.url || // direct url
  attrs.cover?.formats?.medium?.url || // better quality
  attrs.cover?.formats?.small?.url ||
  attrs.cover?.formats?.thumbnail?.url;

  const coverUrl = img ? getFullMediaUrl(img) : null;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link to="/" className="text-gray-300 hover:text-white">
        ← Back
      </Link>
      <h1 className="text-5xl font-extrabold mt-4">{attrs.title}</h1>
      {coverUrl && (
        <img
          src={coverUrl}
          alt={attrs.title}
          className="w-full h-[420px] object-cover rounded-xl mt-6"
        />
      )}
      <p className="mt-6 text-gray-300 italic">{attrs.excerpt}</p>

      <div
        className="prose prose-invert lg:prose-xl mt-8"
        dangerouslySetInnerHTML={{ __html: blocksToHtml(attrs.content) }}
      />

      <div className="mt-10 text-gray-300">
        <p>
          <strong>Author:</strong> {attrs.author?.name}
        </p>
        <p>
          <strong>Categories:</strong>{" "}
          {attrs.categories?.map((c) => c.name).join(", ")}
        </p>
        <p>
          <strong>Tags:</strong> {attrs.tags?.map((t) => t.name).join(", ")}
        </p>
      </div>
    </main>
  );
}
