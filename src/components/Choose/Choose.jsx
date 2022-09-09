import '../../App.css';
import Estilos from './Choose.module.css';
function Choose () {
    return (
        <main className={`contenedor ${Estilos.modelos}`}>
            <h2 className={`text_center degradado_verde ${Estilos.header_modelos}`}>Elige tus TechPRO</h2>

            <div className={`${Estilos.listado_modelos}`}>
                    <div className={`${Estilos.modelo} ${Estilos.modelo_x}`}>
                        <h3>TechPRO X</h3>
                        <p className={`${Estilos.precio}`}>$299</p>
                    </div>

                    <div className={`${Estilos.modelo} ${Estilos.modelo_y}`}>
                        <h3>TechPRO Y</h3>
                        <p className={`${Estilos.precio}`}>$399</p>
                    </div>

                    <div className={`${Estilos.modelo} ${Estilos.modelo_z}`}>
                        <h3>TechPRO Z</h3>
                        <p className={`${Estilos.precio}`}>$499</p>
                    </div>


            </div>

        </main>

    )
};


export default Choose;