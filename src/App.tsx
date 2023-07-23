
import Navbar from "../src/components/navbars/navbar"
import Post from "./components/post/post";
import RightSide from "./components/sidebar/derecha";
import LeftSide from "./components/sidebar/sidebarizq";

function App() {

  return (
    <> 

    <main className="  bg-gray-200  border-slate-500">

      <Navbar />
      <div className=" grid grid-cols-4 gap-4 pt-6 px-10 ">
      <LeftSide/>
      <Post/>
      <RightSide/>
      </div>


</main>
    </>
  )
}

export default App
