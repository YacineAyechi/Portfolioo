"use client";

import React, { useEffect } from "react";
import "./blog.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import blogsData from "@/data/blogsData";

const Blog = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const totalArticles = blogsData.length;

  return (
    <div className="blog-container">
      <div className="blogFlex">
        <h1 className="blogTitle">Blog</h1>
        <p className="totalArts">{totalArticles} Articles</p>
      </div>
      <div className="blog-grid">
        {blogsData.map((blog, index) => (
          <div className="blog-card" data-aos="fade-up" key={index}>
            <Link href={`/blog/${blog.id}`}>
              <h1 className="blog-title">{blog.title}</h1>
              <p className="blog-parag">{blog.description}</p>
              <div className="meta">
                <strong>{blog.readingTime} min read.</strong>

                <span>{blog.date}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
