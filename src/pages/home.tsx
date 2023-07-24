import Navbar from "../components/navbars/navbar"
import Post from "../components/post/post";
import RightSide from "../components/sidebar/derecha";
import LeftSide from "../components/sidebar/sidebarizq";

export default function Home () {

  return (
    <> 
    <main className="bg-gray-200 min-h-screen">
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


