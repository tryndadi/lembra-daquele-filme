import React from 'react'
import {createContext, useContext, useState} from "react"

const CommentModalContext = createContext()

const CommentModalProvider = ({children}) => {
    const [media, setMedia] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const toggle = (data) => {
        setMedia(data)
        setIsOpen((currentState) => !currentState)
    }

    return (
        <CommentModalContext.Provider
        value={{isOpen, toggle, media}}>
            {children}
        </CommentModalContext.Provider>
    )
}

export default CommentModalProvider
export const useCommentModal = () => useContext(CommentModalContext);
