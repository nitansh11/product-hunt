import React from 'react';
import { Comment , Avatar } from 'antd'
import 'antd/dist/antd.css'

function CommentsSection(props) {
    const { comment_id , userImage , userName , userComment } = props 

    
    const actions = [
      // <CaretUpFilled />,
      // <CaretUpOutlined/>    
    ];
  
    return (
      <Comment
        key={comment_id}
        //className={styles.CommentsSection}
        actions={actions}
        author={userName}
        children={<Comment
            //className={styles.CommentsSection}
            actions={actions}
            author={"Han Solo"}
            avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
            content={
                <p>
                  {userComment}
                </p>
              }
            />
            }
        avatar={
          <Avatar
            src={userImage}
            alt="Han Solo"
          />
        }
        
        content={
          <p>
           {userComment}
          </p>
        }
      />
    );
}

export default CommentsSection
