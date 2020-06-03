import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './components/BulletinBoard/BulletinBoard'
import ButtonContext from './context/NoteContext'
import Modal from './components/UI/Modal/Modal'

import Login from './components/UI/Login/Login'
import Registration from './components/UI/Registration/Registration'
import ChooseColor from './components/UI/ChooseColor/ChooseColor'

const COLOR_OPTIONS = ["yellow", "#ff7eb9", "#7afcff", "#ADFF2F", "#fbad4b"];

class App extends Component {

  state = {
    currentColor: COLOR_OPTIONS[0],
    currentID: 1,
    currentZIndex: 0,
    notes: [],
    modalState: 0 ,//0 nothing, 1 login, 2 registration, 3 color chooser
  }

  addNewNote = () => {
    let notes = [...this.state.notes];
    notes.push({ color: this.state.currentColor, text: "", iden: this.state.currentID, zIndex: this.state.currentZIndex});
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

  changeColor = (color) => {
    this.setState({currentColor: color})
  }

  updateModalState = (newState) => {
    this.setState({modalState: newState})
  }

  modalSelector = () => {
    switch (this.state.modalState) {
      case (1):
        return <Login />
      case (2):
        return <Registration />
      case (3):
        return <ChooseColor currentColor={this.state.currentColor} colorOptions={COLOR_OPTIONS}/>
      default:
        return null
    }
  }

  render() {
    const modalOutput = this.modalSelector()

    return (
      <ButtonContext.Provider value={{
        addNote: this.addNewNote,
        changeColor: this.changeColor,
        zIndex: this.state.currentZIndex,
        updateZIndex: this.updateZIndex,
        updateModal: this.updateModalState,
      }}>
        <Layout>
          <Modal show={this.state.modalState} style={{zIndex: this.state.currentZIndex+100}} updateModal={this.updateModalState}>
            {modalOutput}
          </Modal>
          <BulletinBoard notes={this.state.notes} deleted={this.deleteNote} resize={this.resizeNote} changed={this.updateText} updateZ={this.updateZIndex}/>
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
