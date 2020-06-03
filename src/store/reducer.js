import * as actionTypes from './actions'

export const COLOR_OPTIONS = ["yellow", "#ff7eb9", "#7afcff", "#ADFF2F", "#fbad4b"];

const initialState = {
    currentColor: COLOR_OPTIONS[0],
    currentID: 1,
    currentZIndex: 0,
    notes: [],
    modalState: 0,//0 nothing, 1 login, 2 registration, 3 color chooser
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.addNote): {
            const newNotes = [...state.notes];
            newNotes.push({ color: state.currentColor, text: "", iden: state.currentID, zIndex: state.currentZIndex });
            return {
                ...state,
                notes: newNotes,
                currentID: state.currentID + 1,
                currentZIndex: state.currentZIndex + 1,
            }
        }
        case (actionTypes.changeColor):
            return {
                ...state,
                currentColor: action.color
            }
        case (actionTypes.updateModal):
            return {
                ...state,
                modalState: action.newModalState
            }
        case (actionTypes.updateZIndex): {
            const newNotes = [...state.notes];
            const newNote = newNotes[action.index];
            newNote.zIndex = state.currentZIndex;
            let newZIndex = state.currentZIndex + 1;
            return {
                ...state,
                notes: newNotes,
                currentZIndex: newZIndex
            }
        }
        case (actionTypes.deleteNote): {
            const newNotes = [...state.notes];
            newNotes.splice(action.index, 1);
            return {
                ...state,
                notes: newNotes
            }
        }
        case (actionTypes.changeText): {
            const newNotes = [...state.notes];
            const newNote = newNotes[action.index];
            newNote.text = action.text;
            return {
                ...state,
                notes: newNotes
            }
        }
        default:
            return state
    }
}

export default reducer