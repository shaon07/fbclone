import database from "../database/users";
console.log(database);
const CreateStory = () => {
  return (
    <section className="statuses">
      <div className="container">
        <div className="status main-user">
          <img
            className="photo"
            id="photo"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/289839892_1936311783230178_8276830771275885171_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=f67be1&_nc_ohc=LyUH-MolorUAX_G-j-I&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-YvKyy9QBdfIzf_U4oU2ctPyo9MFcuhUz9UlC75Eo0CA&oe=62C8890B"
            alt="Main User"
          />
          <span className="plus-icon">+</span>
          <p className="username black">Create Story</p>
        </div>
        {database.length === 0 ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            {database.slice(0,5).map((item, ind) => {
              return (
                <div className="status" key={ind}>
                  <img
                    className="thumbnail photo"
                    id="thumbnail"
                    src={item.mayDay}
                    alt="User Status"
                  />
                  <img
                    src={item.profilePic}
                    alt="User"
                    className="user-photo"
                  />
                  <p className="username">{item.name}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default CreateStory;
