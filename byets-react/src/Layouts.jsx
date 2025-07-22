import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';

const Layouts = () => {
    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Outlet />
            </AnimatePresence>
            <Footer />
        </>
    );
};

export default Layouts;