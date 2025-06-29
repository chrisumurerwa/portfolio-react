// src/components/Blog.jsx
import React from 'react';
import '../Styles/Blog.css';

// 1. Define the blogPosts array
const blogPosts = [
  {
    id: 1,
    title: 'Why TypeScript is a Game Changer for React Developers',
    content:
      'TypeScript adds static typing to JavaScript, helping developers catch errors early and write more maintainable code. In this post, we explore how to integrate TypeScript with React, define prop types, and structure your project for scalability.',
    imageUrl: 'https://via.placeholder.com/300x150',
    category: 'TypeScript',
  },
  {
    id: 2,
    title: 'Setting Up Your React Project with TypeScript',
    content:
      'This article walks you through setting up a React project with TypeScript from scratch, configuring tsconfig.json, installing necessary packages, and converting components from .jsx to .tsx with proper type annotations.',
    imageUrl: 'https://via.placeholder.com/300x150',
    category: 'TypeScript',
  },
];

// 2. Blog component
const Blog = () => {
  return (
    <div className="blog-container" id="blog">
      <h1 className="blog-title">My Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p className="category">{post.category}</p>
            <p className="content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
