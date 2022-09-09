import Detail from "../components/Detail/Detail";
import Index from "../components/Index/Index";
import About from "../components/About/About";
import '../App.css';
import Choose from "../components/Choose/Choose";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from '../components/Footer/Footer';
function Home () {
    
    return (
        <>
        <Index/>
        <Detail/>
        <About/>
        <Choose/>
        <Newsletter/>
        <Footer/>
        </>
    )

}

export default Home;