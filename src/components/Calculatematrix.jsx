import React from "react";
import './table.css'

function Calculatematrix(props) {
  const day = props.day
  const month = props.month
  const year = props.year

 

  const extraNumber1 = (day.reduce((acc, digit) => acc + digit, 0))
    + (month.reduce((acc, digit) => acc + digit, 0))
    + (year.reduce((acc, digit) => acc + digit, 0))

  const extraNumber2 = extraNumber1 % 10 + Math.floor(extraNumber1 / 10)

  const extraNumber3 = extraNumber1 -(2*day[0])

  const extraNumber4 = extraNumber3 % 10 + Math.floor(extraNumber1 / 10)

  const digits = (extraNumber1.toString()+extraNumber2.toString()+extraNumber3.toString()+extraNumber4.toString()).split('').map((digit) => parseInt(digit))
  console.log(digits)

  const allDigits = []
  allDigits.push(...day)
  allDigits.push(...month)
  allDigits.push(...year)
  allDigits.push(...digits)
  console.log(allDigits)
  
  const character = allDigits.filter((digit=> digit === 1))
  const energy = allDigits.filter((digit=> digit === 2))
  const interest = allDigits.filter((digit=> digit === 3))
  const helth = allDigits.filter((digit=> digit === 4))
  const logic = allDigits.filter((digit=> digit === 5))
  const work = allDigits.filter((digit=> digit === 6))
  const luck = allDigits.filter((digit=> digit === 7))
  const duty = allDigits.filter((digit=> digit === 8))
  const memory = allDigits.filter((digit => digit === 9))
  const temperament =interest.length +logic.length + luck.length
  const purposefulness =character.length +helth.length + luck.length
  const family =energy.length +logic.length + duty.length
  const habits = interest.length + work.length + memory.length
  const life = helth.length + logic.length + work.length
  const destiny = extraNumber2 % 10 + Math.floor(extraNumber2 / 10)
  
  return (
    <div className="container">
      <table>
      <tr className="cell-important">
          <td colSpan="3" className="info">
            Дата Рождения: {day}.{month}.{year} <br />
            Дополнительнные числа: {extraNumber1}, {extraNumber2}, {extraNumber3}, {extraNumber4} <br />
            Число судьбы: {destiny}
          </td>
        <td>Темперамент <br/> {temperament} </td>
      </tr>

      <tr>
        <td> Характер <br/> {character} </td>
        <td>Здоровье <br/> {helth}</td>
        <td>Удача <br/> {luck}</td>
        <td className="cell-important">Целеустремленность <br/> {purposefulness}</td>
      </tr>

      <tr>
        <td>Энергия <br/> {energy}</td>
        <td>Логика <br/> {logic}</td>
        <td>Долг <br/> {duty}</td>
        <td className="cell-important">Семья <br/> {family}</td>
      </tr>

      <tr>
        <td>Интерес <br/> {interest}</td>
        <td>Труд <br/> {work}</td>
        <td>Память <br/> {memory}</td>
        <td className="cell-important">Привычки <br/> {habits}</td>
      </tr>

      <tr>
        <td></td>
        <td>Быт <br/> {life}</td>
        <td></td>
        <td className="cell-important"></td>
      </tr>
      
    </table>
    </div>
  )
}

export default Calculatematrix