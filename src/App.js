import React from "react";
import './App.css';
import Header from './Components/Header'
import List from './Components/List'
import Filter from './Components/Filter'
import Mapa from './Components/Mapa'
import data from './parkingi.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    this.sortBy = this.sortBy.bind(this)
  }
  delItem = (id) => {
    console.log(id)
  }

  sortBy() {
    this.setState({
      data: data.sort((a, b) => a > b)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Filter data={this.state.data} sortBy={this.sortBy} />
          <List delItem={this.delItem} />
          <Mapa />
        </div>
      </div >
    );
  }

}

export default App;
