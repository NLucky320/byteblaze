import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const savedBlogs = getBlogs()
    setBlogs(savedBlogs)
    }, [])
    const handleDelete = id => {
    
        deleteBlog(id); 
        const savedBlogs = getBlogs()
    setBlogs(savedBlogs)
    }
if(blogs.length<1)return <EmptyState message='No Bookmarks Available!' address='/blogs' label='Go To Blogs'></EmptyState>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deleteable={true}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
	
    );
};

export default Bookmarks;