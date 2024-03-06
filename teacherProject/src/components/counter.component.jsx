import { useState, useEffect } from 'react';

let i = 0;
export const Counter = () => {
    const  [counter, setCounter] = useState(0);

    // useEffect
    // (() => {
    //     setInterval(() => {
    //         console.log('in interval');
    //         setCounter(counter + 1);
    //     }, 1000);
    // }, []);


    useEffect(() => {
        setTimeout(() => {
            console.log('in interval');
            setCounter(counter + 1);
        }, 1000);
    }, [counter]);

    // הפעלה בצורה כזו היא בעייתית 
    // מכיוון שהיא תקרה בכל רינדור שהוא של כל משתנה ולא רק של counter
    // setTimeout(() => {
    //     console.log('in interval');
    //     setCounter(counter + 1);
    // }, 1000);

    // ייצור בעיה מכיוון שכל רינדור יוצר אינטרוול חדש וכך ץהיה כמות גדולה של אינטרוולים שפועלים במקביל
    // setInterval(() => {
    //     setCounter(counter + 1);
    // }, 1000);

    return <div> { counter } </div>
}