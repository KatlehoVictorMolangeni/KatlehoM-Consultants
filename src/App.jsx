import React, {useEffect, useState}from "react";
import Navbar from "./Components/Navigation";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if (window.pageYOffset > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    useEffect(() =>{
        window.addEventListener('scroll', toggleVisibility);
        return() => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []
);

    return (
        <div className="App">
            <Navbar />
            <About/>
            <Service/>
            <Contact/>
            <Footer/>
            {isVisible &&(
                <button onClick={scrollToTop} className="scroll-to-top">↑ Top</button>
            )}
        </div>
        
    );
}

export default App;
