import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Marquees from './components/Marquees';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Stripes from './components/Stripes';
import Work from './components/Work';

function App() {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });
    }, []);

    return (
        <div
            className='w-full h-screen bg-zinc-900 font-["Satoshi Variable"]  text-white'
            data-scroll-container
        >
            <NavBar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
