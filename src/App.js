import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './containers/BulletinBoard/BulletinBoard'
import ButtonContext from './context/NoteContext'

class App extends Component {
  state = {
    currentColor: "yellow",
    currentID: 1,
    currentZIndex: 0,
    notes: [{ color: "yellow", text: "s", iden: 2}, { color: "yellow", text: "d", iden: 3}],
  }

  addNewNote = () => {
    let notes = [...this.state.notes];
    notes.push({ color: "yellow", text: "", iden: this.state.currentID});
    this.setState((prevState) => { 
      return { notes: notes,
      currentID: prevState.currentID+1,
      currentZIndex: prevState.currentZIndex+1 } });
  }

  deleteNote = (index) => {
    let notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({ notes: notes });
  }

  updateZIndex = () => {
    let newZIndex = this.state.currentZIndex+1;
    this.setState({currentZIndex: newZIndex})
  }

  render() {
    return (
      <ButtonContext.Provider value={{
        addNote: this.addNewNote,
        zIndex: this.state.currentZIndex,
        updateZIndex: this.updateZIndex,
      }}>
        <Layout>
          <BulletinBoard notes={this.state.notes} delete={this.deleteNote} resize={this.resizeNote}/>
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
