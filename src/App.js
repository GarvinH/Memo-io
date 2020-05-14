import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BulletinBoard from './containers/BulletinBoard/BulletinBoard'
import ButtonContext from './context/NoteContext'
import Modal from './components/UI/Modal/Modal'

import Login from './components/UI/Login/Login'
import Registration from './components/UI/Registration/Registration'
import ChooseColor from './components/UI/ChooseColor/ChooseColor'

class App extends Component {
  state = {
    currentColor: "yellow",
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

  render() {
    let modalOutput = null;
    switch (this.state.modalState) {
      case (1):
        modalOutput = <Login />
        break;
      case (2):
        modalOutput = <Registration />
        break;
      case (3):
        modalOutput = <ChooseColor currentColor={this.state.currentColor}/>
        break;
      default:
        break;
    }
    /* RE: declaration of modalOutput:
      I know a null/uninitialized `let` declaration followed by some form of branching logic to set the final value is a common 
      pattern, but it's something I prefer to avoid. Use of a `let` should indicate that the variable *will* be mutated at some point.
      When it's just used in the process of dynamically assigning an initial value, it leaves things ambiguous as to wether
      the variable will or will not be mutated again later. As a rule, I try to always declare variables as `const` to signify and
      (for literals) enforce immutability. 

      Why am I hung up on `let`s/mutation? Mutations are dangerous! Especially as inherient complexity or number of developers on 
      a code base grows, they're a major source of bugs. Any unintended state reachable by a program is a bug; use of, or even
      the implied use of, a mutable variable obscures and delocalizes the intention behind the variable. Especially in a dynamically
      typed language like JS, you could declare a `let` as a number and later someone could (often unintentionally) mutate it in to
      a string! Fast-lane to bug city, no seat belts included.
      
      My preference is to reserve use of mutations for only the most extreme cases (e.g. when mutating/reusing a variable
      allows for a significant, *necessary*, optimization). Almost any mutation based pattern has a solid alternative where data
      is kept immutable, generally something functional programing inspired (heads up, get used to me talking about functional
      programing concepts a lot).

      In this sitation for instance, there's tons of alternative patterns for keeping a declaration `const` while still employing 
      branching logic in determining the final value:
        1) Ternaries. They aren't the most legible syntax though. Cleanest direct ternary rewrite would look something like:
        ```
        const modalOutput = (this.state.modalState === 1) ? (
            <Login /> 
          ) : (
            (this.state.modalState === 2) ? (
              <Registration /> 
            ) : (
              (this.state.modalState === 3) ? (
                <ChooseColor currentColor={this.state.currentColor}/> 
              ) : (
                null
              )
            )
          );
        ```

        2) Immediately Invoked Function (IFFs). Encapsulate arbitrary code to be evaluated as part of the declaration expression.
        The stacks of parentheses involved are a bit ugly too, but usually preferable to ternaries if there's more than one branch:
        ```
        const modalOutput = (() => {
          switch (this.state.modalState) {
            case (1):
              return <Login />;
            case (2):
              return <Registration />;
            case (3):
              return <ChooseColor currentColor={this.state.currentColor}/>;
            default:
              return null;
          }
        })();
        ```

        3) Move the initialization logic in to a function declared elsewhere. It does move the logic further away from the 
        declaration. Sometimes you might not want that, but usually totally acceptable (and possibly even cleaner, given good
        variable/function naming and file layout):
        ```
        const modalOutput = get_modal_content(this.state);
        ```
    */


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
          <BulletinBoard notes={this.state.notes} delete={this.deleteNote} resize={this.resizeNote} changed={this.updateText} updateZ={this.updateZIndex}/>
        </Layout>
      </ButtonContext.Provider>
    );
  }
}

export default App;
