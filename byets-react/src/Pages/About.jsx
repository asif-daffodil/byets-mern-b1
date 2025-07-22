import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import LoadingBar from "../Components/LoadingBar";

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: "-100vw" }} transition={{ duration: 0.5 }}>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Learn more about our company" />
            </Helmet>
            <LoadingBar />
            This is about Page
        </motion.div>
    );
};

export default About;