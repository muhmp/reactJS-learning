/*All
//import
import React, {Component} from 'react'
*/

/*Lesson 4 : creating form 
class Form extends Component {
    intialState = {//variable
    name:'',
    job:'',
}
    state = this.initialState // refers to the object it belongs to. 

//handle
handleChange= (event) => {
    const {name,value} = event.target

    this.setState({
        [name]: value,
    })
}
//render part
render(){
    const {name, job} = this.state;
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />

            <label htmlFor="job">Job</label>
            <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
            <input type="text" name="job" id="job" value={job}  onChange={this.handleChange} />
                <button type="submit">  Submit </button>

        </form>
        );
    }
}

export default Form;
*/

/*From github */
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;