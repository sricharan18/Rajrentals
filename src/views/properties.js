import React, {useEffect} from 'react';
import Header from '../components/header';
import PropertyList from '../components/propertyList';
import Footer from '../components/footer';

const Properties = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <Header />
            <PropertyList />
            <Footer />
        </div>
    )
}

export default Properties;