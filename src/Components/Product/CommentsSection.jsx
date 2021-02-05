import React, { createElement } from 'react';
import { Comment , Tooltip , Avatar } from 'antd'
// import {  CaretUpFilled, CaretUpOutlined } from '@ant-design/icons';
import styles from './CommentsSection.module.css'
import 'antd/dist/antd.css'

function CommentsSection(props) {
    const { commentID , userImage , userName , userComment , commentUpvotes } = props 

    
  
    const actions = [
      // <CaretUpFilled />,
      // <CaretUpOutlined/>    
    ];
  
    return (
      <Comment
        key={commentID}
        className={styles.CommentsSection}
        actions={actions}
        author={userName}
        children={<Comment
            className={styles.CommentsSection}
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
