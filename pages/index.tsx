import Featured from "./Featured";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notification from "./Notification";
import Offer from "./Offer";
import Slider from "./Slider";





export default function Home() {
  return (
    <>
      <main>
        <Notification />
        <Navbar />
       <Slider />
       <Featured />
       <Offer />
        <Footer />
      </main>
     
      
    </>
  )
}
