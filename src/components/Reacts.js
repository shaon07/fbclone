import { useState } from "react";
import database from "../database/users";
const Reacts = ({ like }) => {
  const [likes, setLike] = useState(true);
  const [show, setShow] = useState(true);
  const allComments = [];
  const [comment, setComment] = useState([...allComments]);
  const [userComment, setUserComment] = useState();
  return (
    <>
      <div className="flex between center gray bortom-1 pb-13 container">
        <div className="flex center reacts">
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/like-2387659-1991059.png"
            className="react"
            alt="Like"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/love-2387666-1991064.png"
            className="react"
            alt="Love"
          />
          <p>{likes + like}</p>
        </div>
        <p>60 Comments &bullet; 33 Shares</p>
      </div>
      <ul className="actions gray">
        <li onClick={() => setLike(2)}>
          <i className="bi bi-hand-thumbs-up"></i> Like
        </li>
        <li onClick={() => setShow(!show)}>
          <i className="bi bi-chat"></i> Comment
        </li>
        <li>
          <i className="bi bi-share"></i> Share
        </li>
      </ul>
      <div className="mainComment" style={{ display: show ? "block" : "none" }}>
        {comment.map((item) => {
          return (
            <div className="comment">
              <div>
                <img src={database[0].profilePic} alt="" />
              </div>
              <div className="commentBox">
                <h2>{database[0].name}</h2>
                <h3>{item}</h3>
              </div>{" "}
              <br />
            </div>
          );
        })}
      </div>

      <div className="mainCommentInput">
        <div className="comment commentInput">
          <div>
            <img src={database[0].profilePic} alt="" />
          </div>
          <div className="commentInputArea">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setComment([...comment, userComment]);
                setUserComment('')
              }}
            >
              <input
                type="text"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                placeholder="Write a public comment"
              />
            </form>
          </div>{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default Reacts;
