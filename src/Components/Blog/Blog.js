import React from "react";
import { useLoaderData } from "react-router-dom";
import NewBlog from "../NewBlog/NewBlog";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div className="my-24 grid lg:grid-cols-2">
      {blogs.map((blog) => (
        <NewBlog key={blog.id} blog={blog}></NewBlog>
      ))}
    </div>
  );
};

export default Blog;
