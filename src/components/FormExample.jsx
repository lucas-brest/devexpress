import { Form } from "devextreme-react"
import { ButtonItem, SimpleItem } from "devextreme-react/form"
import { useState } from "react"

const userModel = {
  name: '',
  mail: '',
  birthdate: '',
  city: '',
  address: '',
}

const FormExample = () => {
  const [user, setUser] = useState(userModel)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form formData={user}>
          <SimpleItem dataField="name" />
          <SimpleItem dataField="mail"/>
          <SimpleItem dataField="birthdate" editorType="dxDateBox"/>
          <SimpleItem dataField="city"/>
          <SimpleItem dataField="address"/>
          <ButtonItem buttonOptions={{
            text: 'Submit',
            type: 'default',
            useSubmitBehavior: true
          }}/>
        </Form>
      </form>
    </>
  )
}

// {
//   text: 'Register',
//   type: 'success',
//   useSubmitBehavior: true,
// }

export default FormExample