import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br /> que entregamos <br /> até você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            escolha seu pedido e em poucos minutos <br />
                            levaremos ate sua porta
                        </h3>
                        <Link to="/orders" className=" home-btn-order" >
                            FAZER PEDIDO
                        </Link>
                    </div>
                    <div className="main-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;