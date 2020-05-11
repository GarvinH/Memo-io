import React from 'react';

const noteContext = React.createContext({
    addNote: () => {},
    changeColor: () => {},
    updateZIndex: () => {},
})

export default noteContext;