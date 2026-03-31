// import { useState } from "react";
// import Header from "./components/Header/Header";
// import Services from "./Sections/Services";
// import Portfolio from "./Sections/Portfolio";
// import Pricing from "./Sections/Pricing";
// import Testimonials from "./Sections/Testimonials";
// import Clients from "./Sections/Client";
// import Team from "./Sections/Team";
// import Blogs from "./Sections/Blogs";
// import Faq from "./Sections/Faq";
// import Contact from "./Sections/Contact";
// import Footer from "./components/Navbar/Footer";
// import WhyChoose from "./Sections/WhyChoose";
// import Navbar from "./components/Navbar/Navbar";
// import Terms from "./Sections/Terms";

// function App() {
//   const [page, setPage] = useState("home");

//   return (
//     <>
   
//         <Navbar setPage={setPage} page={page} />
//         {page === "home" && <Header />}

//         {page === "home" && (
//           <>
//             <Services />
//             <WhyChoose />
//             <Portfolio />
//             <Pricing />
//             <Testimonials />
//             <Clients />
//             <Team />
//             <Faq />
//             <Blogs />
//             <Contact />
//           </>
//         )}

//         {page === "services" && <Services />}
//         {page === "portfolio" && <Portfolio />}
//         {page === "team" && <Team />}
//         {page === "news" && <Blogs />}
//         {page === "contact" && <Contact />}
//         {page === "pricing" && <Pricing />}
//         {page === "pricing-page" && <Pricing />}
//         {page === "faqs" && <Faq />}
//         {page === "terms" && <Terms />}

//         <Footer />
//     </>
//   );
// }
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Header/Login";
import Admin from "./Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
