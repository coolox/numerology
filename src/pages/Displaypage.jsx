import React from "react";
import Calculatematrix from "../components/Calculatematrix";

function Displaypage(props) {
  let day = props.day
  if (day.startsWith("0")) {
    day  = day.slice(1)
  }

  const month = props.month
  const year = props.year
  
  console.log('Day:',day)
  console.log('Month:', month)
  console.log('Year:', year)

  
  return (
    <div>
      <h2>ваш день рождения</h2>
      {day}/{month}/{year}
      <Calculatematrix day={day} month={month} year={year} />
    </div>
  )
}

export default Displaypage