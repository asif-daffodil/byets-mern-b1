import { Helmet } from "react-helmet";
import HomeHero from "../Components/HomeHero";
import Products from "../Components/Products";
import { motion } from "motion/react"
import LoadingBar from "../Components/LoadingBar";

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: "-100vw" }} transition={{ duration: 0.5 }}>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Welcome to our online store" />
            </Helmet>
            <LoadingBar />
            <HomeHero />
            <h2 className="container mx-auto text-4xl font-bold my-8 p-4">Featured Products</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </div>
        </motion.div>
    );
};

export default Home;