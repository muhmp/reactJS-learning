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

//main component
class Table extends Component {
    render(){
        return(
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

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

export default Table