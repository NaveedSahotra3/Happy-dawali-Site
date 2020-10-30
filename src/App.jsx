import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Navigation from './components/navigation';
import JsonData from './data/data.json';
import Body from './newComponent/body/body'





export class App extends Component {
  state = {
    landingPageData: {},

    Name: ""

  }

  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>






        {/* <Navigation /> */}
        {/* <Route exact path="/" component={Navigation} /> */}
        <Body />


      </div>
    )
  }
}

export default App;
