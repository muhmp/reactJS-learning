//import part
import React, {Component} from 'react'
import Table from './Table'

//main component
class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        // the rest of the data
      },
    ],
  }
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}





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

/*Lesson 3: using props (handling) 
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
*/

export default App