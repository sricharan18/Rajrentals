import React, {useEffect} from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';
import Testimonals from '../components/testimonals';
import Footer from '../components/footer';
import ContactBanner from '../components/contactBanner';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Testimonals />
            <ContactBanner text='Got more questions?'/>
            <Footer />
        </div>
    )
}

export default Home;