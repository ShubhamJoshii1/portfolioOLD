import { useState } from "react";
import { Suspense ,lazy} from "react";
const Aboutme = lazy(()=> import("./Components/Aboutme"));
const Certificate = lazy(()=> import("./Components/Certificate"));
const ContactMe = lazy(()=> import("./Components/ContactMe"));
const Footer = lazy(()=> import("./Components/Footer"));
const FrontPage = lazy(()=> import("./Components/FrontPage"));
const Projects = lazy(()=> import("./Components/Projects"));
const Skills = lazy(()=> import("./Components/Skills"));
const Loading = lazy(()=> import("./Components/Loading"));
import "./Styles/main.scss";
function App() {
  const [activeNavbar, setActiveNavbar] = useState('Home');
  return (
    <>
      {/* <Loading /> */}
      <Suspense fallback={<Loading />}>
        <FrontPage activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
        <Aboutme setActiveNavbar={setActiveNavbar} />
        <Skills setActiveNavbar={setActiveNavbar} />
        <Projects setActiveNavbar={setActiveNavbar} />
        <Certificate setActiveNavbar={setActiveNavbar} />
        <ContactMe setActiveNavbar={setActiveNavbar} />
        <Footer setActiveNavbar={setActiveNavbar} activeNavbar={activeNavbar} />
      </Suspense>
    </>
  );
}

export default App;