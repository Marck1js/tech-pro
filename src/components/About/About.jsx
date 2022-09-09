import '../../App.css';
import Estilos from './About.module.css';
function About () {
    return (
        
        <section className={`${Estilos.sobre_tech}`}>
                <div className={`contenedor ${Estilos.sobre_tech_grid}`}>
                    <div className={`${Estilos.texto_sobre_tech}`}>
                        <h2>Sobre los <span>TechPRO</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate vero delectus enim! Harum, ex exercitationem vero assumenda eius nisi neque fuga, rem vitae, soluta quasi eligendi iure consectetur accusamus.</p>

                    </div>
                </div>
        </section>


    )
}

export default About;