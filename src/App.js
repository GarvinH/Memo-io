import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './containers/BulletinBoard/BulletinBoard'
import ButtonContext from './context/ButtonContext'

class App extends Component {
  state = {
    currentColor: "yellow",
    notes: [],
  }

  addNewNote = () => {
    let notes = [...this.state.notes];
    notes.push({ left: 200, top: 200 + notes.length * 250, width: 200, height: 200, color: "yellow", text:""});
    this.setState({ notes: notes });
  }

  render() {
    return (
      <ButtonContext.Provider value={{
        addNote: this.addNewNote,
      }}>
        <Layout>
          <BulletinBoard notes={this.state.notes} />
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
