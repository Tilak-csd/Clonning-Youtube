import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import VideoGrids from "./components/VideoGrids"


export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar />
      <VideoGrids></VideoGrids>
      </div>
    </div>
  )
}