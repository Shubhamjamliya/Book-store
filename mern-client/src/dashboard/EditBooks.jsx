import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData();
  const bookCategory=[
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
 ]

 const [selectedBookCategory, setselectedBookCategory] = useState(bookCategory[0]);

 const handleChangeSelectedValue=(event)=> {
  // console.log(event.target.value);
  setselectedBookCategory(event.target.value);
 }

//  handle book submission
const handleUpdate=(event)=>{
  event.preventDefault();
  const form=event.target;

  const bookTitle=form.bookTitle.value;
  const authorName=form.authorName.value;
  const imageURL=form.imageURL.value;
  const category=form.categoryName.value;
  const bookDescription=form.bookDescription.value;
  const bookPDFURL=form.bookPDFURL.value;

  const updateBookObj= {
    bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
  }

  // Update Book Data
  fetch(`http://localhost:5000/book/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(updateBookObj)
  }).then(res=>res.json()).then(data=>{
    alert("Book is Updated Successfully!!!");
    form.reset();
  })
}

return (
  <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold '>Update The Book Data</h2>
    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row */}
      <div className='flex gap-8'>
        {/* Book Name */}
        <div className='lg:w-1/2 '>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book name" required />
        </div>

        {/* Author Name */}
        <div className='lg:w-1/2 '>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" defaultValue={authorName} name='authorName' type="text" placeholder="Author name" required />
        </div>
      </div>

      {/* 2nd Row */}
      <div className='flex gap-8'>
        {/* Book Image URL */}
        <div className='lg:w-1/2 '>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name='imageURL' defaultValue={imageURL} type="text" placeholder="Book Image URL" required />
        </div>

        {/* Category */}
        <div className='lg:w-1/2 '>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category " />
          </div>
          <select id="inputState" name='categoryName'  className='w-full rounded' value={selectedBookCategory}
          onChange={handleChangeSelectedValue}>
            {
              bookCategory.map((option)=><option key={option} value={option}>{option}</option>
              )
            }

          </select>
        </div>


      </div>

      {/* bookDescription */}
      <div>
      <div className="mb-2 block">
        <Label htmlFor="bookDescription" value="Book Description" />
      </div>
      <Textarea className='w-full' id="bookDescription" defaultValue={bookDescription} name='bookDescription' placeholder="write your book description..." required rows={6} />
    </div>

    {/* Book Pdf Link */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="bookPDFURL" value="Book PDF URL"/>
      </div>
      <TextInput id="bookPDFURL" name='bookPDFURL' defaultValue={bookPDFURL} type="text" placeholder="book pdf url" required />
    </div>

    <Button type="submit" className='mt-5'>Update Book</Button>

    </form>
  </div>
)
}

export default EditBooks