import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddAuthor() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    function AuthorSave(data){
        axios.post('http://127.0.0.1:8000/app1/author/',data);
        navigate('/Services/Show/');
    }
  return (
   <>
   <div className='container'>
   <center><h1 style={{color:'red'}}>ADD AUTHOR FORM...</h1></center>
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
    <center><input type='submit' value='ADD-AUTHOR' className='btn btn-outline-success col-3 me-3'/>
    <input type='reset' value='RESET-AUTHOR' className='btn btn-outline-warning col-3'/></center>

   </form>
   </div>
   </>
  )
}

export default AddAuthor;