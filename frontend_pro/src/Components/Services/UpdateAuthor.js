import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UpdateAuthor() {
  const {authorid} = useParams();
  const {register,handleSubmit,setValue} = useForm();
  const navigate = useNavigate();


  async function getauthors() {
    const Result = await axios.get(`http://127.0.0.1:8000/app1/author/${authorid}`);
    setValue('Aid',Result.data.Aid);
    setValue('Auth_name',Result.data.Auth_name);
    setValue('Auth_book',Result.data.Auth_book);
    setValue('Auth_address',Result.data.Auth_address);
  }
 
  function AuthorSave(data){
    axios.put(`http://127.0.0.1:8000/app1/author/${authorid}/`,data);
    navigate('/Services/Show/');

  }
  useEffect(()=>{
    getauthors();
  },[]);
  return (
    <>
    <div className='container'>
   <center><h1 style={{color:'red'}}>UPDATE AUTHOR FORM...</h1></center>
   <form onSubmit={handleSubmit(AuthorSave)}>
    <label htmlFor='aid'>ENTER AUTHOR-ID</label>
    <input type='number' id='aid' className='form-control'
    {...register('Aid')}/>
    <br/>
    <br/>
    <label htmlFor='anm'>ENTER AUTHOR-NAME</label>
    <input type='text' id='anm' className='form-control'
     {...register('Auth_name')}/>
    <br/>
    <br/>
    <label htmlFor='abk'>ENTER AUTHOR-BOOK</label>
    <input type='text' id='abk' className='form-control'
    {...register('Auth_book')}/>
    <br/>
    <br/>
    <label htmlFor='addr'>ENTER AUTHOR-ADDRESS</label>
    <input type='text' id='addr' className='form-control'
    {...register('Auth_address')}/>
    <br/>
    <br/>
    <center><input type='submit' value='UPDATE-AUTHOR' className='btn btn-outline-success col-3 me-3'/>
    <input type='reset' value='RESET-AUTHOR' className='btn btn-outline-warning col-3'/></center>

   </form>
   </div>
    </>
  )
}

export default UpdateAuthor;