import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAPI } from "../lib/api";
import Card from "../components/Card";

export default function CategoryPage() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAPI(
      `/api/articles?filters[categories][slug][$eq]=${slug}&populate=cover&populate=author&populate=categories&populate=tags`
    )
      .then((json) => setArticles(json.data || []))
      .catch(console.error);
  }, [slug]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="
          inline-flex items-center gap-2 
          text-gray-300 hover:text-white 
          mb-6 text-sm font-medium transition
        "
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-extrabold mb-10 capitalize">
        {slug} Articles
      </h1>

      {articles.length === 0 ? (
        <p className="text-gray-400 text-lg">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
