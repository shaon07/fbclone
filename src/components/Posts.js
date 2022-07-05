/* eslint-disable jsx-a11y/img-redundant-alt */
import database from "../database/users";
import Reacts from "./Reacts";

const Posts = () => {
  return (
    <section className="posts">
      {database.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          {database.map((item, ind) => {
            return (
              <div className="post" key={ind}>
                <header className="flex between container">
                  <div className="flex">
                    <img
                      src={item.profilePic}
                      alt="User"
                      className="photo is-status"
                    />
                    <div className="column">
                      <h2 className="username">{item.name}</h2>
                      <small className="post-info">
                        5h &bullet; <i className="bi bi-people-fill"></i>
                      </small>
                    </div>
                  </div>
                  <i className="bi bi-three-dots menu"></i>
                </header>
                <div className="contents">
                  <div className="container">
                    <p className="text">{item.post[0].title}</p>
                  </div>
                  <div className="images">
                    <img
                      src={item.post[0].photos[0]}
                      alt="Image"
                      className="image"
                    />
                  </div>
                </div>
                <Reacts like={ind} />
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default Posts;
