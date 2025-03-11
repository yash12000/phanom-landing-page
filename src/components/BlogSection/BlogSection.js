import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "../BlogSection/BlogSection.css";
import img1 from "../../assets/blog1.png";
import img2 from "../../assets/blog2.png";
import img3 from "../../assets/blog3.png";

const blogs = [
  {
    id: 1,
    category: "Insight",
    title: "Future of IT Solutions",
    image: img1,
    comments: 3,
    views: "400+",
    date: "1 month ago",
  },
  {
    id: 2,
    category: "Blog #14",
    title: "Vital for Business Growth",
    image: img2,
    comments: 18,
    views: "6.5k+",
    date: "2 months ago",
  },
  {
    id: 3,
    category: "News",
    title: "Smart UI/UX Design",
    image: img3,
    comments: 9,
    views: "1k+",
    date: "5 months ago",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-heading">
        Our <span className="blog-highlight">Blog</span> and{" "}
        <span className="articles-highlight">Articles</span>
      </h2>
      <p className="blog-description">
        Take a look at our Company’s Blog Series or read some professional
        insights and news.
      </p>
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
