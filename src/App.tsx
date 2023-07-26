import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Postinfo } from "./types/common.types";

export default function CrearPost (){
  const handleClick = () => {
    alert("You have unsaved changes 💾");
};

const {
  register,

} = useForm<Postinfo>();

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
<form className="px-20 ">
<input
          id="text"
          type="text"
          placeholder="Add a cover image..."
          className=
            "bg-primary-content rounded-t text-zinc-700 text-s w-4/5 pl-10 pt-2"
          {...register("img",)}
        />
<input
          id="text"
          type="text"
          placeholder="New post title here..."
          className=
            "bg-primary-content text-zinc-700 text-3xl w-4/5 p-10"
          {...register("title",)}
        />
<input
          id="text"
          type="text"
          placeholder="Add up to 4 tags..."
          className=
            "bg-primary-content text-zinc-700 text-xs w-4/5 pl-10 pt-3 pb-1"
          {...register("tags",)}
        />
<input
          id="text"
          type="text"
          placeholder="Write your post content here..."
          className=
            "bg-primary-content rounded-b text-zinc-700 text-s w-4/5 h-38 pl-10 pb-28"
          {...register("content",)}
        />
</form>


</main>

);
}