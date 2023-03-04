import React from "react"
import './table.css'

const Table = (props) => {
  return (
    <div>
       <table>
        <tr className="cell-important">
          <td colSpan="3">Data Info</td>
          <td>ExtraNum: </td>
        </tr>

        <tr>
          <td>Character</td>
          <td>Helth</td>
          <td>Luck</td>
          <td className="cell-important">Tseleustremlennost</td>
        </tr>

        <tr>
          <td>Energy</td>
          <td>Logic</td>
          <td>Dolg</td>
          <td className="cell-important">Family</td>
        </tr>

        <tr>
          <td>Interes</td>
          <td>Work</td>
          <td>Memory</td>
          <td className="cell-important">Privichki</td>
        </tr>

        <tr>
          <td>Empty</td>
          <td>Bit</td>
          <td>Empty</td>
          <td className="cell-important">Empty</td>
        </tr>
        
      </table>
      
    </div>
  )
};

export default Table;
