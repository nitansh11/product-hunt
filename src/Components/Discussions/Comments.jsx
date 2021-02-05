import React from 'react';
import { Comment , Avatar } from 'antd'
import 'antd/dist/antd.css'

function CommentsSection(props) {
    const { comment_id , author , comment } = props 

    
    const actions = [
    
    ];
  
    return (
      <Comment
        key={comment_id}
        //className={styles.CommentsSection}
        actions={actions}
        author={author}
        avatar={
          <Avatar
          src="https://i.pravatar.cc/300"
          alt="Author"
        />
        }
        // children={<Comment
        //     //className={styles.CommentsSection}
        //     actions={actions}
        //     author={"Han Solo"}
        //     avatar={
        //         <Avatar
        //           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        //           alt="Han Solo"
        //         />
        //       }
        //     content={
        //         <p>
        //           {comment}
        //         </p>
        //       }
        //     />
        //     }
        // avatar={
        //   <Avatar
        //     src={userImage}
        //     alt="Han Solo"
        //   />
        // }
        
        content={
          <p>
           {comment}
          </p>
        }
      />
    );
}

export default CommentsSection
