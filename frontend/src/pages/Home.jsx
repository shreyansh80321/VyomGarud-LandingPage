import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import { fetchAPI } from "../lib/api";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAPI(
      "/api/articles?populate=cover&populate=author&populate=categories&populate=tags&pagination[pageSize]=50"
    )
      .then((json) => setArticles(json.data || []))
      .catch(console.error);
  }, []);

  // 🔍 Search Function
  const filteredArticles = articles.filter((a) => {
    const t = search.toLowerCase();
    return (
      a.title?.toLowerCase().includes(t) ||
      a.excerpt?.toLowerCase().includes(t) ||
      JSON.stringify(a.content)?.toLowerCase().includes(t)
    );
  });

  // Category filtering based on filteredArticles only
  const travelItems = filteredArticles.filter((a) =>
    a.categories?.some((c) => c.slug === "travel")
  );

  const techItems = filteredArticles.filter((a) =>
    a.categories?.some((c) => c.slug === "technology")
  );

  const lifestyleItems = filteredArticles.filter((a) =>
    a.categories?.some((c) => c.slug === "lifestyle")
  );

  return (
    <>
      <Hero search={search} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-6">
        <Carousel title="Travel" slug="travel" items={travelItems} />
        <Carousel title="Technology" slug="technology" items={techItems} />
        <Carousel title="Lifestyle" slug="lifestyle" items={lifestyleItems} />
      </div>
    </>
  );
}
