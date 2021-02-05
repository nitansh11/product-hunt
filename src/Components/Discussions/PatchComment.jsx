import React from 'react'
import {useDispatch} from 'react-redux'
import { patchComment } from '../../Redux/discussions/actions'

const PatchComment = ({id}) => {
    const[addComment,setAddComment]=React.useState('')
    const dispatch = useDispatch()

    const handleCommentAdd=()=>{
        // comments = [...comments,{
        //     comment_id:5,
        //     author:"janak",

        // }]
        dispatch(patchComment(addComment,id))
    }

    return (
        <div>
            <input 
                type='text' 
                value={addComment}
                onChange={(e)=>setAddComment(e.target.value)}
            />
            <button onClick={()=>handleCommentAdd()}>add</button>
        </div>
    )
}

export {PatchComment}
