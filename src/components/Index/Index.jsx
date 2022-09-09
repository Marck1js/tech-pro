import styles from './Index.module.css';
import '../../App.css';
import header_jng from '../../assets/07-audifonos/07-audifonos/img/header.png';
// import header_avif from '../../assets/07-audifonos/07-audifonos/img/header.avif';
// import header_webp from '../../assets/07-audifonos/07-audifonos/img/header.webp';
function Index () {
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.contenido_header}`}>
                <div className={styles.imagen_header}>
                        <img loading='lazy' decoding='async' src={header_jng} alt='imagen' width={500} height={300}/>
                </div>
                {/* Fin imgagen */}

                <div className={`${styles.text_header}`}>
                    <p className={`${styles.tagline_producto}`}>Sonido Profesional</p>
                    <h1 className={`degradado_verde ${styles.nombre_producto}`}>TechPRO</h1>
                    <p className={`${styles.descripcion_producto}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus dolores corporis dolorem harum, voluptatem eveniet quos dolorum dolore mollitia aspernatur, facere alias nostrum, nisi corrupti repudiandae dolor perferendis iusto.</p>
                    <p className={`${styles.precio_producto}`}>Desde <span>$299</span></p>
                </div>
                {/* Fin Descripcion */}

            </div>
        </header>
    )
};


export default Index;