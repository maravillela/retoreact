import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CrearPost (){
  const handleClick = () => {
    alert("You have unsaved changes 💾");
};

return(
<main className="bg-gray-200 min-h-screen">
  <div className="navbar pl-20 pt-2">
  <div className="navbar-start gap-2">
<a><img className="h-9 w-11" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"></img></a>
<p className="text-black">Create Post</p>
  </div>
  <div className="navbar-center text-black gap-x-2">
    <button className="rounded h-6 w-10 hover:bg-indigo-200 hover:text-indigo-600 ">Edit</button>
    <button className="rounded h-6 w-16 hover:bg-indigo-200 hover:text-indigo-600">Preview</button>
  </div>
  <div className="navbar-end text-black">
<button onClick={handleClick} className="rounded h-6 w-7 hover:bg-indigo-200 hover:text-indigo-600">X</button>
  </div>
</div>

</main>

);
}