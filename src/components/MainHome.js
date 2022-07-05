import CreateStatus from "./CreateStatus"
import CreateStory from "./CreateStory"
import Header from "./Header"
import Posts from "./Posts"

const MainHome = () => {
  return (
    <main>
      <Header />
      <CreateStatus />
      <CreateStory />
      <Posts />
    </main>
  )
}

export default MainHome
