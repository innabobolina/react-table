import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  
  state = {
    characters: [
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
    ],
  }

removeCharacter = index => {
  const { characters } = this.state

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

export default App