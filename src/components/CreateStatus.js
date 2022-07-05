
const CreateStatus = () => {
  return (
    <>
      <section className="create-status">
        <div className="container">
          <img className="photo" src='https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/289839892_1936311783230178_8276830771275885171_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=f67be1&_nc_ohc=LyUH-MolorUAX_G-j-I&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-YvKyy9QBdfIzf_U4oU2ctPyo9MFcuhUz9UlC75Eo0CA&oe=62C8890B' alt="User" />
          <input
            type="text"
            className="input"
            id="status"
            placeholder="What's on your mind?"
          />
        </div>
      </section>
      <section className="create-media-statuses">
        <ul>
          <li>
            <i className="bi bi-camera-video live"></i> Live
          </li>
          <li>
            <i className="bi bi-images photo"></i> Photo
          </li>
          <li>
            <i className="bi bi-file-plus room"></i> Room
          </li>
        </ul>
      </section>
    </>
  );
};

export default CreateStatus;
