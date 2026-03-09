import Header from "./components/Header/Header";
import Portfolio from "./Sections/Portfolio";
import Pricing from "./Sections/Pricing";
import Services from "./Sections/Services";
import Testimonials from "./Sections/Testimonials";
import WhyChoose from "./Sections/WhyChoose";
import Clients from "./Sections/Client";
import Team from "./Sections/Team";
import Blogs from "./Sections/Blogs";
import Faq from "./Sections/Faq";
import Contact from "./Sections/Contact";
import Footer from "./components/Navbar/Footer";

function App() {
  return (
    <>
      <Header />

      {/* <div id="home" className="section">home Section</div> */}
      {/* <div id="services" className="section">Services Section</div>
      <div id="about" className="section">About Section</div>
      <div id="contact" className="section">Contact Section</div> */}
      <Services/>
      <WhyChoose/>  
      <Portfolio/>
      <Pricing/>
      <Testimonials/>
      <Clients/>
      <Team/>
      <Faq/>
      <Blogs/>
      <Contact/>
      <Footer/> 
    </>
  );
}

export default App;