// import Form from 'react-bootstrap/Form';

// function ColorPickerExample() {
//   return (
//     <>
//       <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
//       <Form.Control
//         type="color"
//         id="exampleColorInput"
//         defaultValue="#563d7c"
//         title="Choose your color"
//       />
//     </>
//   );
// }

import { Fragment, useEffect, useState } from 'react'
import { colors } from '../../enum/twColors'

function ThemeComboBox(props) {
  const { selected, setSelected } = props

  const handleChange = (event) => {
    setSelected(event.target.value)
  }

  return (
    <div className='fixed top-16 w-72'>
      <select
        id='bgcolor'
        name='bgcolor'
        className='mt-2 text-black block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
        value={selected}
        onChange={handleChange}
      >
        {colors.map((color) => {
          return (
            <option key={color} className={color}>
              {color}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default ThemeComboBox
