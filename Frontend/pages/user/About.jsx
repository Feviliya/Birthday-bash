import { Gallery } from "../../components/user/Gallery"
import '../../assets/css/user/Gallery.css'
import { Navbar } from "../../components/user/Navbar"
import { Footer } from "../../components/user/Footer"
import { useEffect } from "react"
export const About = () => {
    useEffect(() => {
        const handleIntersection = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        });
    
        const target = document.querySelector(".desc-about");
    
        if (target) {
          observer.observe(target);
        }
    
        return () => {
          observer.disconnect();
        };
      }, []);
  return (
    <div className="About fade-in">
        <Navbar></Navbar>
        <div className="desc-about">
        <div className="landing-desc-about">
            <h2>About us</h2>
            <p>
            Embarking on the journey of birthday event management is like orchestrating a symphony of joy! 
            Celebrating birthdays is our specialty! We infuse joy into every detail, from colorful decorations to delightful surprises, creating a day filled with laughter and cherished memories. Let us make your birthday celebration a hassle-free, joyous occasion that leaves everyone smiling! 🎉
            <br></br><br></br>
            We meticulously plan and coordinate, ensuring the celebration is a seamless blend of laughter, surprises, and, of course, the sweet crescendo of birthday melodies. Let the festivities begin, as we weave a tapestry of delight that transforms a simple day into a cherished memory!🍾💃
            With a passion for creating unforgettable moments, we meticulously plan and coordinate, ensuring the celebration is a seamless blend of laughter, surprises, and, of course, the sweet crescendo of birthday melodies. Let the festivities begin, as we weave a tapestry of delight that transforms a simple day into a cherished memory!
            <br></br><br></br>
            Our dedicated team orchestrates a symphony of vibrant decorations, delectable treats, and lively entertainment, ensuring that every element harmonizes to create an atmosphere that captures the essence of celebration. With meticulous attention to detail, we navigate through the intricacies of planning, allowing you to relish the festivities stress-free. Join us in crafting an unforgettable 🎂 birthday experience, where every moment is a treasure and every smile is a testament to our commitment to excellence.
            </p>
        
        </div>
        </div>
        <center><h3>Gallery</h3><p>Here is a glimpse what we provide! </p></center>
        <Gallery></Gallery>
        <Footer></Footer>
    </div>
  )
}
