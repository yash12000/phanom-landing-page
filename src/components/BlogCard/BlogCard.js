import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p className="blog-category">{blog.category}</p>
      <h3 className="blog-title">{blog.title}</h3>
      <div className="blog-info">
        <span>💬 {blog.comments}</span>
        <span>👁️ {blog.views}</span>
        <span>📅 {blog.date}</span>
      </div>
      <p className="blog-description">
        {blog.id === 1 &&
          "Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success."}
        {blog.id === 2 &&
          "Off-the-shelf software may address basic needs, but custom IT solutions offer tailored benefits that align perfectly with your business goals. Learn how personalized development ensures scalability, enhances productivity, and provides a competitive edge."}
        {blog.id === 3 &&
          "User experience is at the heart of any successful application or platform. Smart UI/UX design not only boosts user engagement but also increases conversion rates."}
      </p>
    </div>
  );
};

export default BlogCard;
