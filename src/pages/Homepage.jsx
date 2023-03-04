import React from 'react'
import { useState } from 'react'
import Calculatematrix from '../components/Calculatematrix'
import './Homepage.css'
import InputDate from '../components/UI/Input/InputDate'

function Homepage() {
  const [day, setDay] = useState([])
  const [month, setMonth] = useState([])
  const [year, setYear] = useState([])
  const [loading, setLoading] = useState('false')
  const [date, setDate] = useState('')
  
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    
    setDay(date.split('.')[0].replace(/^0+/, '').split('').map((digit) => parseInt(digit)))
    setMonth(date.split('.')[1].replace(/^0+/, '').split('').map((digit) => parseInt(digit)))
    setYear(date.split('.')[2].split('').map((digit) => parseInt(digit)))
    setLoading('true')
  }

  const handleDateChange = (value)=>{
    setDate(value)
  }
  
  return (
    <div className='container'>
      <h1>Матрица</h1>
      <form >
        <label>
          <h3>
            Дата рождения
          </h3>
          <hr/>
          <InputDate onChange={handleDateChange} />
        </label>
        <button  type="submit" onClick={handleSubmit}>Подсчитать</button>
        
      </form>
      {loading === 'false'
        ? <p className='clue'>"Введите дату рождения"</p>
        : <Calculatematrix day={day} month={month} year={year} /> 
      }
    </div>
    
  );
}

export default Homepage;