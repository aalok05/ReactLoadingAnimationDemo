import React, { Component } from 'react';

var Loading = require('react-loading');
import '../App.css';

class App extends Component {

  state = {type: 'balls'};
  handleChange = event =>  this.setState({type: event.target.value});
     
  render() {
    return (
      <div className="App">
        <div className="App-header">   
          <h2>Loading Demo in React</h2>
        </div>
        <div className="Loading">
            <Loading type={this.state.type} color='#2b7cff' height='128px' width='128px'/>
        </div>
        <div className="Form">
            <label>
            <input
                type="radio"
                name="choice"
                value="bars"
                onChange={this.handleChange} />
            bars
            </label>
            <br />
            <label>
            <input
                type="radio"
                name="choice"
                value="balls"
                onChange={this.handleChange}
                defaultChecked={true} />
            balls
            </label>
            <br />
            <label>
            <input
                type="radio"
                name="choice"
                value="bubbles"
                onChange={this.handleChange} /> 
            bubbles
            </label>
            <br />
            <label>
            <input
                type="radio"
                name="choice"
                value="cubes"
                onChange={this.handleChange} /> 
            cubes
            </label>
            <br />
             <label>
            <input
                type="radio"
                name="choice"
                value="cylon"
                onChange={this.handleChange} /> 
            cylon
            </label>
            <br />
             <label>
            <input
                type="radio"
                name="choice"
                value="spin"
                onChange={this.handleChange} /> 
            spin
            </label>
            <br />
             <label>
            <input
                type="radio"
                name="choice"
                value="spinning-bubbles"
                onChange={this.handleChange} /> 
            spinning-bubbles
            </label>
            <br />
             <label>
            <input
                type="radio"
                name="choice"
                value="spokes"
                onChange={this.handleChange} /> 
            spokes
            </label>
            <br />
            <br />           
        </div>       
      </div>
    );
  }

}
App.propTypes = {
  type: React.PropTypes.string
};

export default App;
