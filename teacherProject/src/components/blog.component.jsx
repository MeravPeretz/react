import { useState } from 'react';
import {authors, blogs } from '../data/blogs';
import { Link } from 'react-router-dom';


// props - משתנה שכל קומפוננטה מקבלת, ומכיל את כל המאפיינים שנשלחו אליה
export const Blog = (props) => {
    const blog = props.blog;
    const color = props.color;
    const updateOutBlog = props.updateBlog;

    const author = authors.find(au => au.id === blog.author);
    
    // יצירה של משתנה סטיט
    // משתנה סטייט זה משתנה ששינוי ערך שלו גורם לרינדור חדש של הקומפונמנטה
    // הפונקציה מקבלת כפרמטר את הערך הראשוני
    // ומחזירה מערך של שני מקומות, מקום ראשון הערך של המשתנה, מקום שני פונקציה שדרכה ניתן לשנות את הערך
    // אין לשנות משתנה סטייט ישירות, רק דרך הפונקציה!!
    const [authorShown, setAuthorShown] = useState(true);
    const [enableLikes, setEnableLikes] = useState(false);
    const [likes, setLikes] = useState(blog.likes);


    const style = {
        color,
        backgroundColor: '#faabc6',
    }

    const showAuthor = () => {
        setAuthorShown(!authorShown);
        // alert(`author: ${author.name}`);
    }

    const updateBlog = () => {
        setTimeout(() => {
            updateOutBlog(blog.id, likes)
        }, 0);
       
        setEnableLikes(false)
    }

    return <div style={style}>
        <h3> { blog.title } </h3>
        { authorShown ? <h4> Author: { author.name } </h4> : ''}
        <p> {blog.content} </p>
        <div onClick={() => setEnableLikes(true)}> likes: 
            { enableLikes || <span>{ blog.likes }</span> }
            { enableLikes && <input type="number" 
                value={likes} autoFocus 
                onBlur={() => updateBlog()}
                onChange={(e) => setLikes(e.target.value)}
            />}
            </div>
            <div><Link to={"" + blog.id}>Blog details</Link></div>
        <button onClick={showAuthor} > { authorShown ? 'hide' : 'show' } author </button>
    </div>
}