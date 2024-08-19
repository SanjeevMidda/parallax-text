// importing all relevant modules to use in the code
import "./index.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  // creating reference to DOM elements to animate
  let containerOne = useRef();
  let containerTwo = useRef();
  let containerThree = useRef();

  // creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  // creating animation for elements using gsap
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elementOne = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
        // markers: true,
      },
    });

    elementOne
      .from(containerOne.current, {})
      .to(containerOne.current, { transform: `translateX(20%)` }, 0);

    const elementTwo = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
        // markers: true,
      },
    });

    elementTwo
      .from(containerTwo.current, {})
      .to(containerTwo.current, { transform: `translateX(-20%)` }, 0);

    const elementThree = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=400px",
        scrub: true,
        // markers: true,
      },
    });

    elementThree
      .from(containerThree.current, {})
      .to(containerThree.current, { transform: `translateX(20%)` }, 0);
  });

  return (
    <ReactLenis root>
      <div className="App">
        <div className="space"></div>
        <div className="mainContainer">
          <div className="textContainer" ref={containerOne}>
            <h1>Hello</h1>
            <h1>how</h1>
            <h1>are</h1>
            <h1>you</h1>
            <h1>today</h1>
            <h1>😜</h1>
            <h1>how</h1>
            <h1>are</h1>
            <h1>you</h1>
            <h1>today</h1>
          </div>

          <div className="textContainer" ref={containerTwo}>
            <h1>Seoul</h1>
            <div className="shape">/ / /recovery</div>
            <h1>Shanghai</h1>
            <h1>Tokyo</h1>
            <h1>Bangkok</h1>
            <h1>Paris</h1>
            <h1>New York</h1>
            <h1>Berlin</h1>
            <h1>Delhi</h1>
            <h1>Oslo</h1>
          </div>

          <div className="textContainer" ref={containerThree}>
            <h1>안녕하세요</h1>
            <h1>친구</h1>
            <h1
              style={{
                background: "purple",
                borderRadius: "200px",
                padding: "10px",
              }}
            >
              dfghfgh
            </h1>
            <h1>잘 자요</h1>
            <h1>잘 먹겠습니다</h1>
            <h1>귀엽다</h1>
            <h1>대박</h1>
            <h1>뭐해</h1>
            <h1>몰라요</h1>
            <h1>네</h1>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </ReactLenis>
  );
}

export default App;
