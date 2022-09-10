import {Formik, Form, Field, ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";


const Search = ({setName}) =>{

  const navegeitor = useNavigate()

  return(
    <div>
      <Formik
        initialValues={{search:''}}
        onSubmit={values =>{
          navegeitor(`/look/${values.search}`)
        }}
      >
        <Form>
          <Field name='search' placeholder='Buscar' />
        </Form>
      </Formik>
    </div>
  )
}

export default Search