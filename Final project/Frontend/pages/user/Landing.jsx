import { Navbar } from "../../components/user/Navbar"
import '../../assets/css/user/Landing.css'
import { useEffect } from "react";
import {Bcard} from "../../components/user/Bcard";
import { Footer } from "../../components/user/Footer";


export const Landing = () => {

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

    const target = document.querySelector(".landing-desc");

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);







  return (
    <div id="landing">
      <Navbar></Navbar>
      <div id="desc">
        <div className="landing-desc">
          <img src="https://img.freepik.com/premium-photo/happy-birthday_605905-5900.jpg"></img>
          <p>
          Celebrating birthdays is our specialty! We infuse joy into every detail, from colorful decorations to delightful surprises, creating a day filled with laughter and cherished memories. Let us make your birthday celebration a hassle-free, joyous occasion that leaves everyone smiling! 🎉
          <br></br><br></br>
          We meticulously plan and coordinate, ensuring the celebration is a seamless blend of laughter, surprises, and, of course, the sweet crescendo of birthday melodies. Let the festivities begin, as we weave a tapestry of delight that transforms a simple day into a cherished memory!🍾💃
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <center><h4>Services and packages</h4>
      <p>Experience the joy of our outstanding services and unbeatable packages!</p></center>
      <br></br>
      <div className="packages">
        <Bcard image="https://t4.ftcdn.net/jpg/06/15/94/47/360_F_615944706_YjLpmT0NBQ5aTGoFLgRU2smQNGSoNHbw.jpg" package="Silver" desc="For 5 to 10 members with cool events and party with delicious delights" ></Bcard>
        <Bcard image="https://img.freepik.com/premium-photo/birthday-cake-with-candle-centerpiece-birthday-parties-ancient-greece-when-birth-artemis-goddess-moon-hunting-was-celebrated-time-they-prepared-round-cake_695181-1393.jpg" package="Gold" desc="For 20 to 50 members, make your birthday a memorable one"></Bcard>
        <Bcard image="https://30birthdayideas.com/wp-content/uploads/2020/03/happy-Birthday-wishes-for-friend-768x458.jpg" package="Diamond" desc="For 60 to 100 members with unlimited fun,party which you will never forget"></Bcard>
      </div>
      <Footer></Footer>
    </div>
    
  )
}
