import React, { useContext } from "react"
import Style from "styled-components"
import { ContextValue } from "../hooks/context"

const SelectCategory = Style.select`
  height: 58px;
  margin: 32px 0 16px;
  padding: 16px;
  border: solid 1px gray;
  background-color: white;
  border-radius : 10px;
  font-size : 16px;
  color : #c4c4c4;
}`

const Option = Style.option`
   background-color: #e9e9e9;
   border : none
   position : absolute;
  
`

function Categories({ onChange }) {
  const { categoryName } = useContext(ContextValue)

  return (
    <SelectCategory name="categories" id="categories-select" placeholder="Categories" onChange={onChange}>
      <Option value=''>Select category</Option>
      {categoryName?.value?.map((cat, index) => {
        return <Option key={index} value={cat}>{cat}</Option>
      })}
    </SelectCategory>
  )
}
export default Categories