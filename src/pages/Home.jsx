import Navbar from "../components/HomeComponent/Navbar";
import Slider from "../components/HomeComponent/Hero.jsx";
import Sponsor from "../components/HomeComponent/Sponsor.jsx";
import Main from "../components/HomeComponent/Main.jsx";
import Pricing from "../components/HomeComponent/Pricing.jsx";
import Experience from "../components/HomeComponent/Experience";
import Footer from "../components/HomeComponent/Footer.jsx"

function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Sponsor/>
      <Main/>
      <Pricing/>
      <Experience/>
      <Footer/> 
    </>
  )
}
export default Home;
