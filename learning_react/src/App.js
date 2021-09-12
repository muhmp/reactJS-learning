//import part
import React, {Component} from 'react'
import Table from './Table'

/*Lesson 1 & 2: Components, creating simple table 
class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
*/

/*Lesson 3: using props (handling) */
class App extends Component {
  render(){
    const characters = [
      {
        name: 'Matt',
        job: 'Web developer',
       },
      {
        name: 'David',
        job: 'Software Engineer',
      },
    ]

   return ( //store variable in another variable
      <div className="container"> 
        <Table characterData={characters} />
      </div>
    )
  }
}
export default App