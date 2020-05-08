import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './containers/BulletinBoard/BulletinBoard'
import ButtonContext from './context/ButtonContext'

class App extends Component {
  state = {
    currentColor: "yellow",
    currentID: 1,
    notes: [],
  }

  addNewNote = () => {
    let notes = [...this.state.notes];
    notes.push({ color: "yellow", text: "", iden: this.state.currentID });
    this.setState((prevState) => { 
      return { notes: notes,
      currentID: prevState.currentID+1 } });
  }

  deleteNote = (index) => {
    let notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({ notes: notes });
  }

  resizeNote = (event, index) => {
    let img = new Image()
    img.src = " "
    event.dataTransfer.setDragImage(img, 0, 0);
    const mouseX = event.pageX;
    const mouseY = event.pageY - 66;
    console.log(mouseX + " " + mouseY)
    //console.log("offset: " + event.target.offsetTop + " " + event.target.offsetLeft)
    let notes = [...this.state.notes];
    notes[index].width = (notes[index].width > 99) ? (mouseX - notes[index].left) : 100;
    notes[index].height = (notes[index].height > 99) ? (mouseY - notes[index].top) : 100;
    //console.log(notes[index].width + " " + notes[index].height)
    this.setState({ notes: notes });
  }

  render() {
    return (
      <ButtonContext.Provider value={{
        addNote: this.addNewNote,
      }}>
        <Layout>
          <BulletinBoard notes={this.state.notes} delete={this.deleteNote} resize={this.resizeNote} />
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
