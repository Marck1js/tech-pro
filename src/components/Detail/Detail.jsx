import styles from './Detail.module.css'; 
import '../../App.css';
import iconoSonido from '../../assets/07-audifonos/07-audifonos/img/icono-sonido.svg';
import iconoGarantia from '../../assets/07-audifonos/07-audifonos/img/icono-garantia.svg';
import iconoBateria from '../../assets/07-audifonos/07-audifonos/img/icono-bateria.svg';
function Detail (){

    return (

        <div className={styles.main}>
            <div className={`contenedor ${styles.contenido_main}`}>
                <div>
                    <div><img src={iconoSonido} alt='sonido' width={60} height={60}/> </div>
                    <h3 className={`text_center`}>GRAN SONIDO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum atque sed, officia eos quaerat facere eius possimus esse odio autem. Doloremque magni animi inventore iure adipisci quo minus praesentium.</p>
                </div>
                <div>
                    <div><img src={iconoGarantia} alt='sonido' width={60} height={60}/></div>
                    <h3 className={`text_center `}>GARANTIA DE POR VIDA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum atque sed, officia eos quaerat facere eius possimus esse odio autem. Doloremque magni animi inventore iure adipisci quo minus praesentium.</p>
                </div>
                <div>
                    <div><img src={iconoBateria} alt='sonido' width={60} height={60}/></div>
                    <h3 className={`text_center`}>+20 HORAS DE BATERIA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum atque sed, officia eos quaerat facere eius possimus esse odio autem. Doloremque magni animi inventore iure adipisci quo minus praesentium.</p>
                </div>
            </div>
        </div>

    )

}


export default Detail;