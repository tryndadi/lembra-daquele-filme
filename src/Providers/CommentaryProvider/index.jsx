import React, { useContext, useState } from "react";
import { createContext } from "react";
import {fakeApiAccess} from '../../services/api'
import { toast } from "react-toastify";

export const CommentaryContext = createContext([])

const CommentaryProvider = ({children}) => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    const [commentsMovie, setCommentsMovie] = useState([])
        
    const getComments = (idMovie) => {
        fakeApiAccess.get(`api/comments/movie/${idMovie}`)
        .then((res) => setCommentsMovie(res.data.splice(-10)))        
        .catch((err) => console.log(err))    
    }

    const addComment = (idMovie, comment) => {
        fakeApiAccess.defaults.headers.post["Authorization"] = `Bearer ${userData.accessToken}`;
        fakeApiAccess.post('/comments', {        
                userId: userData.id,
                message: comment,
                movieId: idMovie        
        })
        .then((res) => toast.success("Comentário enviado com sucesso!"))
        .catch((err) => console.log(err))  
        .finally((_) => delete fakeApiAccess.defaults.headers.common["Authorization"])      
    }

    const deleteComment = (idComment) => {
        fakeApiAccess.delete(`/comments/${idComment}`, {
            headers: {
                Authorization: `Bearer ${userData.accessToken}`
            }
        }).then((res) => toast.success("Comentário excluído com sucesso!"))
        .catch((err) => toast.error("Algo deu errado! Não foi possível excluir seu comentário :("))  
        
    }

    return(
        <CommentaryContext.Provider
        value={{
            addComment,
            deleteComment,
            getComments,
            commentsMovie 
        }}
        >
            {children}
        </CommentaryContext.Provider>
    )
}

export default CommentaryProvider
export const useCommentary = () => useContext(CommentaryContext);
