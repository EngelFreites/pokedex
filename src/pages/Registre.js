import {Formik, Form, Field, ErrorMessage} from "formik";
import '../component/formulario.css'
import '../component/btn.css'


const Registre = () =>{

  return(
    <div className="container">
      <Formik
        initialValues={{name:'', lastName:'', email:'', nickName:'', password:'' }}
        onSubmit={values=>{
          console.log(`Bienvenido ${values.name}`)
        }}
      >
        <Form className="formulario">
          <img src="../gengar.png" alt="pokemones"/>
          <div className="content-formulario">
            <h1>Registrate</h1>
            <Field 
              className='input' 
              name='name' 
              type='text' 
              placeholder='Nombre'
            />
            <Field 
              className='input' 
              name='lastName' 
              type='text' 
              placeholder='Apellido'
            />
            <Field 
              className='input' 
              name='email' 
              type='text'
              placeholder='Email'
            />
            <Field 
              className='input' 
              name='password' 
              type='password'
              placeholder='Contraseña'
            />
            <Field 
              className='input' 
              name='nickName' 
              type='text' 
              placeholder='Nick Name'
            />
            <button type="submit" className="btn">Registrar</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Registre