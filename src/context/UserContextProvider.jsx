import { useState, useEffect } from "react";
import React from "react";
import UserContext from "./UserContext";

function getInitialState() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : {};
    const score = localStorage.getItem('score')
    return score ? JSON.parse(score) : 0
}

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(getInitialState)
    const [target, setTarget] = React.useState(null)

    const [score, setScore] = useState(getInitialState);
    const [over, setOver] = useState(0.0);
    const [wicket, setWicket] = useState(0);
    const [thisOver, setThisOver] = useState([]);
    const [noball, setNoball] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('score', JSON.stringify(score))
      }, [user, score])

    /* 
    function getInitialState() {
  const notes = localStorage.getItem('notes')
  return notes ? JSON.parse(notes) : []
}

export const NoteProvider = props => {
  const [notes, setNotes] = useState(getInitialState)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
}
    */
    // const [isDeclear, setIsDeclear] = useState(false);
    return(
        <UserContext.Provider value={{user, setUser, target, setTarget, score, setScore,over, setOver, wicket, setWicket, thisOver, setThisOver, noball, setNoball, isShown, setIsShown} }>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider