import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="h-[100vh] flex-center">
            <h1>Welcome to My React App</h1>
        </div>
    );
};

export default App;
