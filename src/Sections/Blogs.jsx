import React from "react";
import blog1 from "../assets/images/blog-1.jpg";
import blog2 from "../assets/images/blog-2.jpg";
import blog3 from "../assets/images/blog-3.jpg";

import "./Blogs.css";

const Blogs = () => {
  const posts = [
    {
      img: blog1,
      category: "Domain & Hosting",
      title: "How to host website on any hosting provider?",
      author: "William Bla",
      date: "Feb 1, 2026",
    },
    {
      img: blog2,
      category: "Advertisement",
      title: "How to create add on google adwords?",
      author: "Jobi Ret",
      date: "Oct 5, 2026",
    },
    {
      img: blog3,
      category: "Marketing",
      title: "What is digital marketing and why is important?",
      author: "Main Dow",
      date: "Dec 22, 2026",
    },
  ];

  return (
    <section id="news" className="blog-section container">
      <div className="section-header text-center">
        <h2>Blogs</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div className="blog-list">
        {posts.map((post, i) => (
          <div className="blog-row" key={i}>
            <div className="blog-image">
              <img src={post.img} alt={post.title} />
            </div>

            <div className="blog-info">
              <p className="post-category">{post.category}</p>
              <h3 className="title">
                <a href="/blog-details">{post.title}</a>
              </h3>

              <div className="row-meta">
                <span className="post-author">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;