import { Form } from "devextreme-react"
import { ButtonItem, GroupItem, RequiredRule, SimpleItem } from "devextreme-react/form"
import { useState } from "react"

const userModel = {
  name: '',
  mail: '',
  birthdate: '',
  city: '',
  address: '',
  password: ''
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
          <GroupItem colCount={3}>
            <SimpleItem dataField="name" />
            <SimpleItem dataField="mail"/>
            <SimpleItem dataField="birthdate" editorType="dxDateBox"/>
          </GroupItem>
          <GroupItem colCount={2}>
            <GroupItem>
              <SimpleItem dataField="city"/>
              <SimpleItem dataField="address"/>
            </GroupItem>
            <SimpleItem dataField="password" editorOptions={{
              mode: 'password'
            }}>
              <RequiredRule message="Password is required" />
            </SimpleItem>
          </GroupItem>
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