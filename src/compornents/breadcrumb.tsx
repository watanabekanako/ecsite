import Link from 'next/link';
import styles from '../styles/breadcrumb.module.css';




 export const Breadcrumb = ({lists}:any) => {

    return (
        <ul className={`${styles.lists}`}>
            {lists.map(({name,path}:any,index:any) => (
            <li key={index}>
                {lists.length - 1 !== index ? (
            <Link href={path}><a className={`${styles.link}`}>{name}&nbsp;&nbsp;</a></Link>
            ) : (<span className={`${styles.border}`}>{name}</span>
                )}
            </li>
            )
        )}
        </ul>
    )}

















// import { useEffect } from "react";
// import React, { useState } from 'react';


// export default function Breadcrumb() {

//     const [page,setPage] = useState('');
//     const [page2,setPage2] = useState('');

//     useEffect(() => {
//         let state = history.state.as;
//         // console.log(state);

//         var ref = document.referrer;
//         console.log(ref,'あ');

//         // let previous = window.history.previous
        

//         if(ref.includes('login')){
//             // console.log('ログイン');
//             let pageName = 'ログイン';
//             setPage(pageName);
//         }
//         if(state.includes('cart')){
//             // console.log('ログイン');
//             let pageName2 = 'ショッピングカート';
//             setPage2(pageName2);
//         }
//     },[])

//     return (
//         <div>{page2}&nbsp;&nbsp;{page}</div>
//     );
// }
