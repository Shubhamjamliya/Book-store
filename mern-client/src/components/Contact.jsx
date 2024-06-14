import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="mt-16 help-form w-1/2 mx-auto my-10 px-6 py-4 bg-blue-100 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center mb-4">CONTACT US</h2>
    <p className="text-center mb-4">Need a helping hand finding your next great read? Have a question about our library services? We're here for you! Drop us a line and our friendly staff will be happy to assist you :)</p>
    <form action="#" method="POST" className="grid gap-4">
        <div className="flex gap-14 justify-between">
        <label for="name" className="font-bold">Name:</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" className="rounded-lg px-3 py-2 border border-gray-300 w-full"/>
        </div>

        <div className="flex gap-14 justify-between">
        <label for="email" className="font-bold">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Your Email" className="rounded-lg px-3 py-2 border border-gray-300 w-full"/>
        </div>

        <div className="flex gap-14 justify-between">
        <label for="p" className="font-bold">Phone:</label>
        <input type="tel" id="p" name="p" required placeholder="Your Phone Number" className="rounded-lg px-3 py-2 border border-gray-300 w-full"/>
        </div>

        <div className="flex gap-14 justify-between">
        <label for="subject" className="font-bold">Subject:</label>
        <input type="text" id="subject" name="subject" required placeholder="Subject" className="rounded-lg px-3 py-2 border border-gray-300 w-full"/>
        </div>

        <label for="description" className="font-bold">Question:</label>
        <textarea id="description" name="description" rows="4" required placeholder="Your Question" className="rounded-lg px-3 py-2 border border-gray-300"></textarea>

        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
    </form>
</div>
  )
}

export default Contact