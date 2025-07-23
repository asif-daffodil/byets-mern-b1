import { useNavigate } from "react-router";
import { motion } from "motion/react"
import sazzad from "../assets/images/images.png";
import { useState } from "react";
import Swal from 'sweetalert2'

const HomeHero = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false)

    const handleContactClick = () => {
        navigate('/contact');
    }

    const siamHandle = () => {
        Swal.fire({
            title: 'Siam',
            text: 'This is a custom alert for Siam!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <motion.div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'linear' }} viewport={{ once: true, amount: 0.5 }} >
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        <br className="hidden lg:inline-block" />readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={siamHandle}>Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={handleContactClick}>Contact</button>
                    </div>
                </motion.div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <motion.img className="object-cover object-center rounded" animate={{ rotate: hover ? 0:360, transition: { duration: 2, repeat: hover? 0:Infinity } }} alt="hero" src={ sazzad } onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;