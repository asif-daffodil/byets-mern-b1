import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router';

const Layouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layouts;