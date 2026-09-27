import { Canvas } from "@react-three/fiber";
import Dog from "./components/Dog";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./index.css";
import Section1 from "./components/section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";


const App = () => {
  gsap.registerPlugin(useGSAP);
  return (
    <main
      id="html"
      className="bg-black w-screen overflow-y-scroll overflow-x-scroll hide-scrollbar relative "
    >
      <Canvas
        style={{
          height: "99vh",
          width: "99vw", // fixed spelling
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0, // canvas at the back
          backgroundImage: "url(/images/background-m.png)",
          backgroundRepeat: "no-repat",
          backgroundSize: "cover",
        }}
        className="bg-black"
      >
        <Dog />
      </Canvas>

      <section
        id="Section-1"
      >
       <Section1/>
      </section>
      <section
        id="Section-2"
      >
        <Section2/>
      </section>
      <section
        id="Section-3"
      >
        <Section3/>
      </section>
    </main>
  );
};

export default App;
