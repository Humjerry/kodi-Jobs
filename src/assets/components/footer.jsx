import React from 'react'
import KiteImg from "../../images/Vector.png"
import Facebookimg from "../../images/facebook.png"
import Twitterimg from "../../images/twitter.png"
import Githubimg from "../../images/github.png"
import Instagramimg from "../../images/instagram.png"

function Footer() {
  return (
    
    <section className='footerdiv'>
        <article>
        <ul className='divul'>
            <h1>Company</h1>
            <li>Jobs</li>
            <li>Categories</li>
            <li>Blogs</li>
            <li>Testimonials</li>
        </ul>
        <ul className='divul'>
            <h1>Help</h1>
            <li>Customer suppport</li>
            <li>Contact Us</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
        </ul>
        <ul className='divul'>
            <h1>Company</h1>
            <li>Jobs</li>
            <li>Categories</li>
            <li>Blogs</li>
            <li>Testimonials</li>
        </ul>
        <ul className='divul'>
            <h1>Help</h1>
            <li>Customer suppport</li>
            <li>Contact Us</li>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
        </ul>
        <figure> <img src={KiteImg} alt="" className='footerkite' /></figure> 
        </article>
        <div className="footerright">
            <h1>KodiJobs <span className='sp'>by HUJETECH</span></h1>
            <p>© Copyright 2024, All Rights Reserved by KodiJobs</p>
            <div className="socialmedia">
                <img src={Instagramimg} alt="" />
            <img src={Githubimg} alt="" />
                <img src={Facebookimg} alt="" />
                <img src={Twitterimg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Footer
