import { CheckBox, ColorBox, SelectBox, Switch } from 'devextreme-react'
import React from 'react'

const colores = ['blue', 'red', 'green']

const Editors = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', gap: '1rem'}}>
        <CheckBox defaultValue={true} text='CheckBox'/>
        <CheckBox text='OtroCheckBox'/>
      </div>
      <ColorBox defaultValue="#fff"/>
      <SelectBox items={colores} />
      <div style={{display: 'flex', gap: '1rem'}}>
        <Switch defaultValue={true}/>
        <Switch />
        <Switch disabled={true}/>
      </div>
    </div>
  )
}

export default Editors