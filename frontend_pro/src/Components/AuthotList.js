import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function AuthotList() {
    const [authors,setauthor]=useState([]);
    async function getauthors() {
        const Result = await axios.get('http://127.0.0.1:8000/app1/author/');
        console.log(Result.data)
        setauthor(Result.data)
      
    }
    useEffect(()=>{
        getauthors();

    },[])
  return (
   <>
   <center><h1 style={{color:'red'}}>AUTHOR DETAILS LIST...</h1></center>
   <table className='table table-dark'>
    <thead>
        <tr>
            <th>AUTHOR-ID</th>
            <th>AUTHOR-NAME</th>
            <th>AUTHOR-BOOK</th>
            <th>AUTHOR-ADDRESS</th>
            <th>ACTION</th>

        </tr>

    </thead>
    <tbody>
        
        {authors.map(author=>{
             return <tr key={author.id}>
             <td>{author.Aid}</td>
             <td>{author.Auth_name}</td>
             <td>{author.Auth_book}</td>
             <td>{author.Auth_address}</td>
             <td>
                <NavLink to={`/Services/Update/${author.id}`}><button type='button' className='btn btn-outline-warning me-3'>Update</button></NavLink>
                <NavLink to={`/Services/Delete/${author.id}`}><button type='button' className='btn btn-outline-danger'>Delete</button></NavLink>
                
                </td>
         </tr>

        })}
       
    </tbody>
   </table>

   </>
  )
}

export default AuthotList;