import './styles.css';
import {ReactComponent as MainImage} from './main.svg';
function Home(){
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br/> que entregamos <br/> até você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        escolha seu pedido e em poucos minutos <br/>
                        levaremos ate sua porta
                    </h3>
                    <a href="orders" className=" home-btn-order" >
                        FAZER PEDIDO
                    </a>
                </div>
                <div className="main-image">
                    <MainImage />
                </div>
            </div>
        </div>
    )
}

export default Home;