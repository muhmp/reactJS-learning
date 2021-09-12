import React, {Component} from 'react'

/* Lesson 1

class Table extends Component{
    render(){//render method
        return( //return with parentheses
            //elemnt
            <table>
                <thead>
                <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>John</td>
            <td>Backend developer</td>
          </tr>
          <tr>
            <td>David</td>
            <td>Scientist</td>
          </tr>

            </tbody>
          </table>

        )
    }
}
export default Table

*/



/*Lesson 2 */

//Header
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

/*
//body
const TableBody = () => {
    return(
        <tbody>
            <tr>
                <td>Matt</td>
                <td>Web developer</td>
            </tr>
            <tr>
                <td>David</td>
                <td>Front end developer</td>
            </tr>
        </tbody>
    )
}
 */





/*Lesson 3: Props 
//table body
const TableBody = () => {
    return <tbody />
}
*/

// Lesson 3 main component
class Table extends Component {
    render() {
      const {characterData} = this.props //called using props
  
        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
            </table>
        )
    }
}
 

//3.1 main component using props (advanced)
//accessing the rows variabe
const TableBody =(props) => { //accessing the row element (please pay attention at the value of the row and the parantheses)
    const rows = props.characterData.map((row, index) => {
        return( //accessing the row & access the header of name and job
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default Table