import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Gallery from "./Gallery";
import Hr from "./Hr";
import Moments from "./Moments";
import Rotator from "./Rotator";
import Static from "./Static";
import Footer from "./Footer";

import Confetti from "react-confetti";
import { useRef, useEffect } from "react";

function App(){

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
    }, []);

    return(

        <div ref={confetiRef}>
            <Confetti numberOfPieces={150} width={width} height={height} />
            <Header />
            <Home />
            <Hr />
            <Gallery />
            <Moments />
            <Rotator />
            <Static />
            <Footer />
        </div>

    );
    
}

export default App;