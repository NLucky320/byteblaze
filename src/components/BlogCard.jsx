import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
 import placeholderImage from '../assets/404.jpg'
import { deleteBlog } from "../Utils";
const BlogCard = ({ blog, deleteable, handleDelete }) => {
    
    return (
        <div className=''>
            <div className='max-w-sm mx-auto h-full transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary flex relative hover:border-secondary group hover:no-underline focus:no-underline'>
                <Link to={`/blog/${blog.id}`} className="h-full">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{ blog.title}</h3>
					<span className="text-xs dark:text-gray-600">{ new Date(blog.published_at).toLocaleDateString()}</span>
					<p>{blog.description} </p>
				</div>
                </Link>
               {
                    deleteable && (
                        <div onClick={()=>handleDelete(blog.id)} className='absolute bg-primary p-3 rounded-full hover:scale-105 hover:bg-secondary -top-5 -right-5'>
                   <MdDelete size={20}  className="text-secondary group hover:text-primary "/>
                </div>
                    )
              }
            </div>
             

        </div>
    );
};

export default BlogCard;