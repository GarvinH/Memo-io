import React from "react";

const noteContext = React.createContext({
  addNote: () => {},
  changeColor: () => {},
  updateZIndex: () => {},
  updateModal: () => {},
  zIndex: 0,
  isAuthenticated: false,
  authenticate: () => {},
  notes: [],
  updateNotes: () => {}
});

export default noteContext;
