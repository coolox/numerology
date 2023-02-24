import React from 'react'
import { useState } from 'react'
import Calculatematrix from '../components/Calculatematrix'
import Table from '../components/Table'
import './Homepage.css'

function Homepage() {
  const [day, setDay] = useState([])
  const [month, setMonth] = useState([])
  const [year, setYear] = useState([])
  const [loading, setLoading] = useState('false')
  
  const handleSubmit = (event)=>{
    event.preventDefault()
    setLoading('true')
  }

  function handleKeyPress(event) {
    if (event.key === '.' || event.key === '-' ) {
      event.preventDefault();
    }
  }
  
  
  
  const handleDayChange = (event) => {
    setDay(((event.target.value).replace(/^0+/, '')).split('').map((digit) => parseInt(digit)))
  }
  
  const handleMonthChange = (event) => {
   setMonth(((event.target.value).replace(/^0+/, '')).split('').map((digit) => parseInt(digit)))
  }
  
  const handleYearChange = (event) => {
   setYear((event.target.value).split('').map((digit) => parseInt(digit)))
  }
 
  return (
    <div className='container'>
      <h1>Матрица</h1>
      <form >
        <label>
          Дата рождения
          <hr/>
          <input type="number" name="day" min='1' max='31' maxLength="2" step="1" placeholder='число' onKeyDown={handleKeyPress} onChange={handleDayChange} />
          <span>/</span>
          <input type="number" name="month" min="1" max="12" maxLength="2" step="1" onKeyDown={handleKeyPress} placeholder='месяц' onChange={handleMonthChange} />
          <span>/</span>
          <input type="number" name="year" placeholder='год' min="1800" max="2023" step="1" onKeyDown={handleKeyPress} onChange={handleYearChange} />
        </label>
        <button type="submit" value="Submit" onClick={handleSubmit}>Подсчитать</button>
      </form>
      {loading === 'false'
        ? "Введите дату рождения"
        : <Calculatematrix day={day} month={month} year={year} /> 
      }
      
      
  
    </div>
    
  );
}

export default Homepage;