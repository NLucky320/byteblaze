import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div className="mx-auto h-full border-2 p-2  border-opacity-30 group hover:no-underline focus:no-underline">
      <Link to={`/blog/${blog.id}`} className="h-full">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={blog.cover_image || placeholderImage}
        />
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {blog.tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>

        <div className=" space-y-2">
          <a href={blog.url}  target="-blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {blog.title}
          </a>
                  
                  <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
                
      
        </div>
      </Link>
    </div>
  );
};

export default Content;
