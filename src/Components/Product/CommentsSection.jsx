import React from 'react';
import { Input , Button ,  Comment ,  Avatar } from 'antd'
import {  CaretUpFilled, CaretUpOutlined } from '@ant-design/icons';
import styles from './CommentsSection.module.css'
import 'antd/dist/antd.css'
import { useDispatch , useSelector } from 'react-redux'
import { AuthContext } from "../../AuthContextProvider";
import {  v4 as uuid } from 'uuid'
import { postNewComments } from '../../Redux/operations/actions';

function CommentsSection(props) {
    const { isOpen, setIsOpen } = React.useContext(AuthContext);
    const {  getSoloDataHandler , productDiscussion , handleTrigger , replies , commentID , userImage , userName , userComment } = props 
    const [ inputBox , setInputBox ] = React.useState(false)
    const [ newReply , setNewReply ] = React.useState("")
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const soloData = useSelector(state => state.productsReducer.soloData)
    const currentUser = useSelector(state => state.authReducer.currentUser)
    const dispatch = useDispatch() 

    let {  id } = soloData
     
    
    const inputBoxHandler = () => {
      setInputBox(!inputBox)
    }
    

    const replyHandler = (commentID) =>{
      if(!isLoggedIn){
          setIsOpen(true);
          return
      }
      const replyPayload = {
        replyId : uuid(),
        replyMessage : newReply,
        replyUserImage : currentUser.imageUrl,
        replyUserName :currentUser.name
      }

      const newProductDiscussion = productDiscussion.map((item) =>{
          if(item.commentID === commentID){
            if(item.replies === undefined){
              const replies = []
              replies.push(replyPayload)
              item.replies = replies
            }
            else{
             item.replies = [...item.replies , replyPayload]
            }
          }

          return item

      })

        dispatch(postNewComments(id , newProductDiscussion))
        .then(res =>{handleTrigger()})
        .then(setNewReply(""))
        .then(setInputBox(false))
      }
      
    const actions = [
      <div>
         <div>
         <span onClick={inputBoxHandler}>Reply</span>
      </div>
      {inputBox && <div className={styles.RepliesInput}>
          <Input 
            value={newReply} 
            onChange={(e)=>setNewReply(e.target.value)}  
          /> 
          <Button type="primary" onClick={()=>replyHandler(commentID)}>Reply</Button>
        </div>}
      </div>
    ];
  
      
  
    return (
      <Comment
        key={commentID}
        className={styles.CommentsSection}
        actions={actions}
        author={userName}
        avatar={
          <Avatar
            src={userImage}
            alt={userName}
          />
        }
       
        children={
          replies?.map(item=>(
            <Comment
            className={styles.Replies}
            key={item.replyId}
            actions = {[]}
            author = {item.replyUserName}
            avatar = {
              <Avatar
                src={item.replyUserImage}
                alt={item.replyUserName}
              />
            }
            content = {
              <p>
                {item.replyMessage}
              </p>
            }
          />
          ))        
        }
        content = {
          <p>
            {userComment}
          </p>
        }

      />
    );
}

export default CommentsSection





// content={
//   <p>
//    {userComment}
//   </p>
// }

 


