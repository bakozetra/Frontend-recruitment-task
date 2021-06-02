import React from "react"
import style from "styled-components"


const InputStyle = style.input`
  height: 58px;
  margin: 32px 0 16px;
  border: solid 1px gray;
  background-color: white;
  border-radius : 10px;`

export function Input({ onChange, placeholder, value }) {
  return (
    <InputStyle
      type="text"
      id="name" name="name"
      value={value}
      placeholder={placeholder}
      onChange={onChange} />
  )
}
