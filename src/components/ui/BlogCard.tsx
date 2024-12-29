"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

interface BlogCardProps {
  index: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
}

const BlogCard = ({
  title,
  excerpt,
  date,
  tags,
  url,
  index,
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <div className="p-6 flex-1 flex flex-col">
          <motion.h3
            className="text-xl font-semibold text-earth-dark mb-2 hover:text-earth-brown cursor-pointer"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.open(url, "_blank")}
          >
            {title}
          </motion.h3>
          <p className="text-earth-brown/80 mb-4 flex-1">{excerpt}</p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  text={tag}
                  variant={index % 2 === 0 ? "default" : "outline"}
                />
              ))}
            </div>
            <div className="text-earth-sage text-sm">{date}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
