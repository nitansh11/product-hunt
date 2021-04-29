import React from "react";
import Modal from "react-modal";
import styles from "./discussions.module.css";
import axios from "axios";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { patchComment } from '../../Redux/discussions/actions';
import CommentsSection from "./Comments";
import { v4 as uuid } from "uuid";
import { patchComment } from "../../Redux/discussions/actions";

const Discussions = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalPost, setModalPost] = React.useState(false);
  const [popupData, setPopupData] = React.useState("");
  const [list, setList] = React.useState([]);
  const [commentsData, setCommentsdata] = React.useState(false);
  const [newComment, setNewComment] = React.useState("");
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = React.useState("");
  const [newBody, setNewBody] = React.useState("");
  let comments = useSelector((state) => state.discussionsReducer.comments);
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  //console.log(currentUser)
  const [trigger, setTrigger] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(0);

  const handlePopup = (id) => {
    setCurrentId(id);
    setModalOpen(true);
    const temp = list.filter((item) => item.id === id)[0];
    setPopupData(temp);
    setCommentsdata(true);
  };

  const newCommentHandler = (currentId, commentsData) => {
    // console.log(commentsData , currentId)
    //  commentsData = [...commentsData ,  {
    //     comment_id : uuid() ,
    //     author:"janak",
    //     comment : newComment
    // } ]
    // dispatch(patchComment(commentsData , currentId))
    // .then(res => setTrigger(!trigger))
  };

  const handlePostPopup = () => {
    setModalPost(true);
  };

  const handlePostData = () => {
    if (currentUser === null) {
      alert("LOGIN TO START A DISCUSSION");
    } else {
      axios
        .post("https://janak-routing-project.herokuapp.com/discussions", {
          title: newTitle,
          body: newBody,
          author: currentUser.name,
          upvotes: 10,
          comments: [],
          image: currentUser.imageUrl,
        })
        .then((res) => {
          axios
            .get("https://janak-routing-project.herokuapp.com/discussions")
            .then((res) => {
              setList(res.data);
              setModalPost(false);
              // alert("posted succesfully")
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    axios
      .get("https://janak-routing-project.herokuapp.com/discussions")
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const getPopular = () => {
    let newList = list.sort((a, b) =>
      a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
    );
    setList([...newList]);
  };

  const getNew = () => {
    let newList = list.sort((a, b) => (a.id > b.id ? -1 : b.id > a.id ? 1 : 0));
    setList([...newList]);
  };

  return (
    <div className={styles.discussionsBackground}>
      <div className={styles.discussionsPage}>
        <div className={styles.discussionsPage_buttonsDIv}>
          <div className={styles.discussionsPage_buttonsDIv_1}>
            <button onClick={getPopular}>POPULAR</button>
            <button onClick={getNew}>NEW</button>
          </div>
        </div>
        <div className={styles.discussionsParent}>
          <div className={styles.discussionsList}>
            {list?.map((item) => (
              <div className={styles.indivItem} key={item.id}>
                <img src={item.image} alt="" />
                <div className={styles.itemNumber}>
                  <i className="fas fa-caret-up"></i>
                  <p className={styles.itemNum}>{item.upvotes}</p>
                </div>
                <div
                  className={styles.itemTitle}
                  onClick={() => handlePopup(item.id)}
                >
                  <h3>{item.title}</h3>
                  <h5>
                    by {item.author} - {item.comments.length} comments
                  </h5>
                </div>
                <div>
                  <Modal
                    key={item.id}
                    isOpen={modalOpen}
                    onRequestClose={() => setModalOpen(false)}
                    style={{
                      overlay: {
                        WebkitTapHighlightColor: "transparent",
                        backgroundColor: "hsla(456, 3%, 50%, 0.15)",
                      },
                      content: {
                        width: "70%",
                        margin: "auto",
                        backgroundColor: "rgb(249,249,249)",
                      },
                    }}
                  >
                    <button
                      onClick={() => setModalOpen(false)}
                      className={styles.popupCloseButton}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                    <p style={{ color: "gray", fontWeight: "100" }}>
                      Discussions - {popupData.title}
                    </p>
                    <div className={styles.popupTitleAndUserDivs}>
                      <div className={styles.popupTitleDiv}>
                        <h1>{popupData.title}</h1>
                        <h4>{popupData.body}</h4>
                        <p>posted by {popupData.author}</p>
                        <div className={styles.popupUpvotes}>
                          <i className="fas fa-caret-up"></i>
                          <p>{popupData.upvotes}</p>
                        </div>
                      </div>
                      <div className={styles.popupUserDetais}>
                        {currentUser != null ? (
                          <div className={styles.popupUser}>
                            <img src={currentUser.imageUrl} alt="" />
                            <h2>{currentUser.name}</h2>
                            <h5>{currentUser.email}</h5>
                          </div>
                        ) : (
                          <h1 className={styles.popupUserWarning}>
                            login to view details
                          </h1>
                        )}
                      </div>
                    </div>
                    <div>
                      <p style={{ marginTop: "15px", fontSize: "14px" }}>
                        COMMENTS
                      </p>
                      <div className={styles.commentsDiv}>
                        {commentsData &&
                          popupData.comments?.map((item) => (
                            <div
                              key={item.Comment_id}
                              className={styles.indivComment}
                            >
                              <CommentsSection {...item} />
                            </div>
                          ))}
                      </div>
                      <div>
                        <div style={{ display: "flex" }}>
                          <Input
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            bordered="false"
                            style={{ width: "56%" }}
                            allowClear
                          ></Input>
                          <Button
                            onClick={() =>
                              newCommentHandler(item.id, popupData.comments)
                            }
                          >
                            Comment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.discussionsRightBar}>
            <div className={styles.discussionsRightBar_1}>
              <Button onClick={handlePostPopup}>CREATE NEW DISCUSSION</Button>
              <Modal
                isOpen={modalPost}
                onRequestClose={() => setModalPost(false)}
                style={{
                  overlay: {
                    WebkitTapHighlightColor: "transparent",
                    backgroundColor: "hsla(456, 3%, 50%, 0.35)",
                  },
                  content: {
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "rgb(249,249,249)",
                  },
                }}
              >
                <button
                  onClick={() => setModalPost(false)}
                  className={styles.postPopupCLoseBtn}
                >
                  <i class="fas fa-times"></i>
                </button>
                <div className={styles.postPopUp}>
                  <br />
                  <p style={{ margin: "2px 2px 2px 2px" }}>Title</p>
                  <input
                    type="text"
                    placeholder="describe about discussion"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                  <br />
                  <p style={{ margin: "8px 2px 2px 2px" }}>Message</p>
                  <textarea
                    type="text"
                    placeholder="write your message here"
                    rows="20"
                    cols="90"
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                  ></textarea>
                  <br />
                  <button onClick={handlePostData}>post</button>
                </div>
                <div></div>
              </Modal>
              <p>
                Before joining or starting a discussion remember to always be
                civil. Treat others with respect. Do not use the discussions
                board for direct sales or self-promotion. You are free to share
                your products and product ideas for feedback. 🙌
              </p>
            </div>
            <h4 style={{ marginTop: "10px", marginBottom: "10px" }}>Filters</h4>
            <div className={styles.discussionsRightBar_2}>
              <form>
                <input type="checkbox" name="amas" />
                <label htmlFor="amas">AMAs</label>
                <br />
                <input type="checkbox" name="amas" />
                <label htmlFor="amas">Request for Feedback</label>
                <br />
                <input type="checkbox" name="amas" />
                <label htmlFor="amas">Help</label>
              </form>
            </div>
            <div className={styles.discussionsRightBar_3}>
              <h3>MOST HELPFUL THIS WEEK</h3>
              <img
                src="https://ph-avatars.imgix.net/2062078/original?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=30&h=30&fit=crop"
                alt=""
              />
            </div>
            <div className={styles.discussionsRightBar_4}>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Apps</p>
              <p>About</p>
              <p>FAQ</p>
              <p>Terms</p>
              <p>Privacy policy and Cookies</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Advertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Discussions };
