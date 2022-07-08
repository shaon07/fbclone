import CreateStatus from '../components/CreateStatus';
import database from "../database/users";
import Header from "./Header";
import Posts from './Posts';

const Profile = () => {
  return (
    <>
    <Header />
      <div className="max-w-6xl h-full mx-auto bg-white p-2" >
        <div
          className="h-96 max-h-96 w-full rounded-lg relative"
          style={{
            backgroundImage: 'url("https://picsum.photos/2440/204")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="absolute  w-full flex items-center justify-center"
            style={{ bottom: "-15px" }}
          >
            <div className="w-44 h-44 rounded-full bg-gray-300 border-4 border-white">
              <img
                className="w-full h-full rounded-full"
                src={database[0].profilePic}
                alt="dp"
              />
            </div>
            <div className="absolute" style={{ bottom: "30px", right: "30px" }}>
              <button className="focus:outline-none px-3 py-2 hover:bg-gray-50 font-semibold bg-white rounded-md">
                <i className="fas fa-camera mr-2"></i>Edit Cover Photo
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-5xl h-full mx-auto">
          <div className="flex flex-col space-y-2 mt-3 items-center justify-center pb-3 border-b-2">
            <p className="text-4xl font-bold">{database[0].name}</p>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex mb-2 items-center space-x-2">
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                Posts
              </button>
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                About
              </button>
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                Friends
              </button>
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                Photos
              </button>
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                Story Archrive
              </button>
              <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                Videos
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 rounded-md bg-primary hover:bg-blue-600 text-white font-semibold focus:outline-none">
                <i className="fas fa-plus-circle  mr-2"></i>Add to Story
              </button>
              <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                <i className="fas fa-pen mr-2"></i>Edit Profile
              </button>
              <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>
          <CreateStatus />
          <Posts />
        </div>
      </div>
    </>
  );
};

export default Profile;
