import React from "react"
import { useState } from "react";
import classes from './InputDate.module.css'

const InputDate = ({onChange}) => {
  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')

  const handleChange = (event) => {
    const input = event.target.value

    // Remove any non-digit characters from the input
    const cleanedInput = input.replace(/\D/g, '')

    // Ensure the day component doesn't exceed 31
    let formattedInput = ''
    if (cleanedInput.length > 0) {
      if (cleanedInput.length === 1) {
        if (cleanedInput.slice(0, 1) > 3) {
          setDay(cleanedInput.slice(0, 1))
          formattedInput = '0' + cleanedInput.slice(0, 1)
        } else {
          formattedInput = cleanedInput.slice(0, 1)
        }
      } else {
        formattedInput = cleanedInput.slice(0, 2)
        }
      

        if (+formattedInput > 31) {
          formattedInput = 31
          setDay(formattedInput)
        }
        else { setDay(formattedInput) }

      if (cleanedInput.length >= 3) {
        formattedInput += '.' + cleanedInput.slice(2, 4)
        setMonth(cleanedInput.slice(2, 4))
        
        if (cleanedInput.length === 3) {
          if (cleanedInput.slice(2, 3) > 1) {
            setMonth(cleanedInput.slice(2, 3))
            formattedInput = day + '.0' + cleanedInput.slice(2, 3)
          }
        }

        if (+month > 12) {
          formattedInput = day + '.' + "12"
          setMonth('12')
        }
        
        if (cleanedInput.length >= 5) {
          formattedInput += '.' + cleanedInput.slice(4, 8)
        }
      }
    }
    
    setDate(formattedInput)
    onChange(formattedInput)
    
  };

  return (
    <input
      value={date}
      type="text"
      placeholder="dd.mm.yyyy"
      maxLength="10"
      onChange={handleChange}
    />
  );
}

export default InputDate;
