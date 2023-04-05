import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DeleteAuthor() {
    const {authorid} = useParams();
    const navigate = useNavigate();
    const [authors,setauthor] = useState({});
    async function getauthors() {
        const Result = await axios.get(`http://127.0.0.1:8000/app1/author/${authorid}`);
        setauthor(Result.data);
    }
    useEffect(()=>{
        getauthors();
    },[])

    function Deleteauthor(){
        axios.delete(`http://127.0.0.1:8000/app1/author/${authorid}/`);
        navigate('/Services/Show/');
    }

  return (
   <>
   <div className='container'>
   <center><h1>DELETE AUTHOR RECORDS...</h1>
   <form onSubmit={()=>Deleteauthor()}>
   <h1>Do You Really want to delete <span style={{color:'red'}}>{authors.Auth_name}</span>&nbsp;Records?</h1>
   <input type='submit' value='YES' className='btn btn-outline-danger col-3 me-3'/>
   <NavLink to='/Services/Show/'><input type='submit' value='NO' className='btn btn-outline-success col-3'/></NavLink>
    </form>
    </center>
    </div>
    
   </>
  )
}

export default DeleteAuthor;