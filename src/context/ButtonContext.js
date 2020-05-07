import React from 'react';

const buttonContext = React.createContext({
    addNote: () => {},
    changeColor: () => {}
})

export default buttonContext;