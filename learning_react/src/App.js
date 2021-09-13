/*import part
import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
*/

/*Lesson 3: using state function to hold the dynamic data 
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
*/




/*Lesson 1: Components, creating simple table 
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

/*Lesson 2: using props (handling) 
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

/*Lesson 4: Submitting form data

//main component
class App extends Component {
      state = {
          characters: []
      };

      handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
      }

      render() {
          
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
          </div>
        );
    }
    }

export default App
 */

/*import from github*/
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;