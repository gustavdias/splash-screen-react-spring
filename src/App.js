import React, { useRef } from "react";
import { useSpring, animated, useChain } from "react-spring";
import './App.css';

function App() {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const imgRef = useRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);

  const imgStyle = useSpring({
    to: {
      opacity: 1
    },
    from: {
opacity: 0
    },
    ref: imgRef

  })


  // To use it in multiple places, you create a new component with it
  //   const text1Style = useSpring({
  // from: {
  //   opacity: 0
  // },
  // to: {
  //   opacity: 1
  // },
  // ref: text1Ref
  //   });

  // Array of animations coming one after the other
  useChain([text1Ref, text2Ref, text3Ref, imgRef]);

  return (
    <div className="App">
      <p>hello</p>
      <animated.h1 style={text1Style}>Welcome</animated.h1>
      <animated.h1 style={text2Style}>To</animated.h1>
      <animated.h1 style={text3Style}>The</animated.h1>
      <animated.img src="https://images.unsplash.com/photo-1500004621732-74cd4ad4d53e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" height={200} width='100%' alt="" style={imgStyle} />
    </div>
  );
}

//New React component

const useAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      position: 'absolute',//to get the ext in the same place
      transform: 'scale(0.2)'
    },
    to: [
      {
        opacity: 1,
        transform: 'scale(2.0)'

      },
      { opacity: 0,
        transform: 'scale(0.2)'

      },
    ],
    ref: ref,
  });
  return spring;
};

export default App;
