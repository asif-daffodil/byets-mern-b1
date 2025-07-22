import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import LoadingBar from "../Components/LoadingBar";

const Gallery = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: "-100vw" }} transition={{ duration: 0.5 }}>
            <Helmet>
                <title>Gallery</title>
                <meta name="description" content="Explore our gallery of products" />
            </Helmet>
            <LoadingBar />
            This is Gallery page
        </motion.div>
    );
};

export default Gallery;