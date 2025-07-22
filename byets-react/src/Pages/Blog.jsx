import { Helmet } from "react-helmet";
import { motion } from "motion/react";
import LoadingBar from "../Components/LoadingBar";

const Blog = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: "-100vw" }} transition={{ duration: 0.5 }}>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Read our latest blog posts" />
            </Helmet>
            <LoadingBar />
            This is blog page
        </motion.div>
    );
};

export default Blog;