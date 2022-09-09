import Estilos from './Footer.module.css';
import '../../App.css';
function Footer () {
    return (
        <footer className={Estilos.footer}>
            <p className={Estilos.rights}>Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer;