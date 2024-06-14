import React, { useEffect } from 'react'
import Img1 from "../assets/about-images/img1.jpg";
import Img2 from "../assets/about-images/img2.jpg";
import Img3 from "../assets/about-images/img3.jpg";

const About = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <section className="about-us mt-20 bg-[#d5f5f6]">
    <h2 className="text-center font-serif text-4xl my-12"><b>About Bibliotheca: Get into your own world of fantasy !</b></h2>
    <p className="text-center">Bibliotheca is more than just a library; it's a vibrant community dedicated to fostering a love of reading and lifelong learning. We provide a welcoming space for readers of all ages and backgrounds to explore a vast collection of materials, attend engaging programs, and connect with fellow bookworms.</p>
    <div className="flex justify-center gap-8 my-8">
        <img className="w-64 h-64 rounded-full hover:opacity-80" src={Img1} alt=""/>
        <img className="w-64 h-64 rounded-full hover:opacity-80" src={Img2} alt=""/>
        <img className="w-64 h-64 rounded-full hover:opacity-80" src={Img3} alt=""/>
    </div>

    <h3 className="text-2xl font-bold mt-8">Our Mission</h3>
    <ul className="list-disc ml-8 mb-4">
        <li>To curate a diverse and dynamic collection of books, ebooks, audiobooks, and other resources for the enrichment of our community.</li>
        <li>To provide exceptional customer service and expert assistance in finding the perfect read.</li>
        <li>To host engaging programs and events that spark conversation, ignite curiosity, and celebrate the power of storytelling.</li>
        <li>To cultivate a welcoming and inclusive environment where everyone feels comfortable exploring the world of literature.</li>
    </ul>

    <h3 className="text-2xl font-bold">Our Values</h3>
    <ul className="list-disc ml-8 mb-4">
        <li><span className="font-bold">Literacy for All:</span> We believe that access to knowledge is essential, and we strive to remove barriers to reading for all members of our community.</li>
        <li><span className="font-bold">Lifelong Learning:</span> We encourage continuous learning and personal growth through the exploration of diverse perspectives and ideas.</li>
        <li><span className="font-bold">Community Engagement:</span> We foster a vibrant space where people can connect, share their love of books, and participate in enriching experiences.</li>
        <li><span className="font-bold">Excellence in Service:</span> We are committed to providing exceptional customer service and ensuring a positive experience for every visitor.</li>
    </ul>

    <h3 className="text-2xl font-bold">Why Choose Bibliotheca?</h3>
    <p>Bibliotheca offers a unique blend of traditional library services and innovative resources. Here's what sets us apart:</p>
    <ul className="list-disc ml-8 mb-4">
        <li><span className="font-bold">Extensive Collection:</span> Explore our vast collection of fiction, non-fiction, children's literature, and more, in various formats to suit your preference.</li>
        <li><span className="font-bold">Expert Staff:</span> Our knowledgeable librarians are passionate about books and can help you find the perfect read or resource.</li>
        <li><span className="font-bold">Engaging Programs:</span> We host a variety of programs and events throughout the year, from author talks and book clubs to story times and educational workshops.</li>
        <li><span className="font-bold">Digital Resources:</span>  Enjoy the convenience of accessing ebooks, audiobooks, and online databases from the comfort of your home. </li>
        <li><span className="font-bold">Community Hub:</span>  Bibliotheca is more than just a library; it's a place to connect with your neighbors, participate in discussions, and discover new perspectives.</li>
    </ul>
    <p className="text-center">We invite you to visit Bibliotheca and embark on a literary adventure with us!</p>
</section>
  )
}

export default About
