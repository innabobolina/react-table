import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: '1',
        job: 'React',
      },
      {
        name: '2',
        job: 'Data Structures',
      },
      {
        name: '3',
        job: 'JavaScript',
      },
      {
        name: '4',
        job: 'Python',
      },
    ]

  return (
    <div className="container">
      <Table characterData={characters} />
    </div>
  )
  }
}

export default App