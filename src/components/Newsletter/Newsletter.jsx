import '../../App.css';
import Estilos from './Newsletter.module.css';
function Newsletter () {

    return (
        
        <section className={Estilos.newsletter}>
            <div className={`contenedor ${Estilos.contenido_newsletter}`}>
                <div className={`${Estilos.texto_newsletter}`}>
                    <h2 className={`text_center degradado_verde`}>Recibe Actualizaciones</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam blanditiis nisi omnis nesciunt animi aspernatur obcaecati sunt eos, fuga veritatis rerum tenetur laudantium laborum nemo ut deleniti in unde?</p>

                    <form className={`${Estilos.formulario}`}>
                        <div className={Estilos.input}>
                            <input type='text' placeholder='Tu email'/>
                        </div>
                        <input type='submit'value='Inscribirme'/>


                    </form>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;