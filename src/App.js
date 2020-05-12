import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './containers/BulletinBoard/BulletinBoard'
import ButtonContext from './context/NoteContext'
import Modal from './components/UI/Modal/Modal'
import Login from './components/UI/Login/Login'

class App extends Component {
  state = {
    currentColor: "yellow",
    currentID: 1,
    currentZIndex: 0,
    notes: [],
  }

  addNewNote = () => {
    let notes = [...this.state.notes];
    notes.push({ color: "yellow", text: "", iden: this.state.currentID, zIndex: this.state.currentZIndex});
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

  updateZIndex = (index) => {
    let notes = [...this.state.notes];
    let note = notes[index];
    note.zIndex = this.state.currentZIndex;
    let newZIndex = this.state.currentZIndex+1;
    this.setState({notes: notes, currentZIndex: newZIndex})
  }

  updateText = (event, index) => {
    let notes = [...this.state.notes];
    let note = notes[index];
    note.text = event.target.value;
    this.setState({notes: notes})
  }

  render() {
    return (
      <ButtonContext.Provider value={{
        addNote: this.addNewNote,
        zIndex: this.state.currentZIndex,
        updateZIndex: this.updateZIndex,
      }}>
        <Layout>
          <Modal style={{zIndex: this.state.currentZIndex+100}}>
            <Login></Login>
          </Modal>
          <BulletinBoard notes={this.state.notes} delete={this.deleteNote} resize={this.resizeNote} changed={this.updateText} updateZ={this.updateZIndex}/>
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
