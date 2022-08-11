import {Formik, Form, Field, ErrorMessage} from "formik";


const Search = ({setName}) =>{
  return(
    <div>
      <Formik
        initialValues={{search:''}}
        onSubmit={values => setName(values)}
      >
        <Form>
          <Field name='search' placeholder='Buscar' />
        </Form>
      </Formik>
    </div>
  )
}

export default Search