"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Get unique tags from all blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter((post) => !selectedTag || post.tags.includes(selectedTag))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <section id="blog" className="min-h-screen section-padding bg-earth-cream">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">Latest Articles</h2>
            <div className="flex space-x-4">
              <Dropdown
                trigger={
                  <Button variant="outline">
                    {selectedTag || "All Topics"}
                  </Button>
                }
                items={[
                  {
                    label: "All Topics",
                    onClick: () => setSelectedTag(null),
                  },
                  ...allTags.map((tag) => ({
                    label: tag,
                    onClick: () => setSelectedTag(tag),
                  })),
                ]}
              />
              <Dropdown
                trigger={
                  <Button variant="outline">
                    {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                  </Button>
                }
                items={[
                  {
                    label: "Newest First",
                    onClick: () => setSortOrder("newest"),
                  },
                  {
                    label: "Oldest First",
                    onClick: () => setSortOrder("oldest"),
                  },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-earth-brown mt-8"
            >
              No articles found for the selected topic.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
