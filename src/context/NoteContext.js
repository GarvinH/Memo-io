import React from 'react';

const noteContext = React.createContext({
    addNote: () => {},
    changeColor: () => {},
    zIndex: 0,
    updateZIndex: () => {},
})

export default noteContext;