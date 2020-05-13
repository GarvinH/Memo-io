import React from 'react';

const noteContext = React.createContext({
    addNote: () => {},
    changeColor: () => {},
    updateZIndex: () => {},
    updateModal: () => {},
    zIndex: 0,
})

export default noteContext;