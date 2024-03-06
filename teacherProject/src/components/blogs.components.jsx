import { Blog } from './blog.component';
import { blogs as _blogs } from '../data/blogs';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Blogs = () => {

    const [blogs, setBlogs] = useState(_blogs);

    const updateBlog = (id, likes) => {
        // שליפה של הבלוג לעידכון
        const blogToUpdate = blogs.find(b => b.id === id);
        // עדכון של הערך 
        blogToUpdate.likes = likes;
        // בשביל רינדור חובה לקרוא לפונקציית סט עם ערך חדש
        setBlogs([...blogs]);
    }

    return <div>
        <ul>
            {/* רינדור של רשימות - עי פונקציית map
            יש להוסיף לכל אלמנט ברשימה את המאפיין key
            עם ערך ייחודי לכל אלמנט - אין להשתמש באינדקס!! */}
            { blogs.map(blog => <li key={blog.id}> <Blog blog={blog} color="#093f76" updateBlog={updateBlog} /> </li>) }
        </ul>


        <Outlet />
    </div>
}