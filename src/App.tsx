import { useState } from "react";

function App() {
  const [reactions, setReactions] = useState(6)
  const [likes, setLikes] = useState(2)



  return (
    <>
      <div className="border border-b-300 navbar bg-primary-content px-12">
    <div className="flex-1 gap-4  border-b-slate-500">
      <a><img className="h-9 w-11" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"></img></a>
      <input type="text" placeholder="Search..." className="input input-bordered border-slate-400 bg-primary-content w-96 h-9 max-sm:invisible md:visible" />
    </div>
    <div className="flex items-center gap-2"> 
    <button className="btn btn-sm btn-outline btn-primary hover:underline">Create Post</button>
    <div className="indicator">
    <span className="indicator-item badge badge-secondary">5</span> 
    <button className="btn btn-sm btn-ghost">🔔</button>
  </div>
      <div className=" dropdown dropdown-end gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-9 rounded-full">
            <img src="https://randomuser.me/api/portraits/women/55.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] menu menu-sm dropdown-content bg-primary-content text-black rounded-box w-40">
          <ul>
            <a className="justify-between">
              Profile
              <span className="badge bg-primary-content border-none">✨</span>
            </a>
          </ul>
          <ul><a>Dashboard</a></ul>
          <ul><a>Create Post</a></ul>
          <ul><a>Reading list</a></ul>
          <ul><a>Settings</a></ul>
          <ul><a>Sign Out</a></ul>
        </ul>
      </div>
      </div>
    </div>
    
    {/*aqui empieza el aside izq
    <div className="drawer sm:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here }
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-secondary-content  text-base-content">
      {/* Sidebar content here }
      <ul><a>Sidebar Item 1</a></ul>
      <ul><a>Sidebar Item 2</a></ul>
    </ul>
  </div>
</div> */}
<div className=" grid grid-cols-4 gap-4 pt-6 px-10 bg-gray-200  border-slate-500">
<div className=" col-span-1 max-sm:invisible md:visible"> 
<ul>🏠 Home</ul>
<ul>📥 Reading List</ul>
<ul>📜 Listing</ul>
<ul>🎙️ Podcast</ul>
<ul>🎥 Videos</ul>
<ul>🏷️ Tags</ul>
<ul>💡 FAQ</ul>
<ul>🛍️ Forem Shop</ul>
<ul>❤️ Sponsors</ul>
<ul>🏳️‍🌈 About</ul>
<ul>📯 Contact</ul>
<ul>📖 Guides</ul>
<ul>🤔 Software comparisons</ul>
<ul className="font-bold pt-5 text-black">Other</ul>
<ul>👍🏻 Code of Conduct</ul>
<ul>🤓 Privacy Policy</ul>
<ul>👀 Terms of use</ul>

<div className="pt-5">
<div className="card card-compact p-3 w-50 h-80 bg-primary-content shadow-xl">
  <p className="text-xs pb-2 ">DEV community</p>
  <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--fIs7T4ga--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://jess.forem.lol/remoteimages/uploads/articles/9ga7i09w99yubqm4fxrv.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black text-sm">Calling all early-career developers & coding mentors!</h2>
    <p className="text-xs">Join CodeNewbie Community: a supportive space for coding newbies to connect & express themselves.</p>

  </div>
</div>
</div>
</div>


<div className="col-span-2 ">
<div className="card card-compact w-96 bg-primary-content shadow-xl">
  <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--hcOCFnSG--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aa6g894nyxxmytztd9ta.png" alt="Shoes" /></figure>
  <div className="card-body">
  <div className="flex items-center">
  <img src="https://xsgames.co/randomusers/assets/avatars/male/55.jpg" className="avatar w-8 rounded-full"></img>
  <div>
    <h1 className="font-bold">Andrew Alfred</h1>
    <p className="font-light text-xs">Jul 06</p>
  </div>
</div>
    <h2 className="card-title text-black">React Design Patterns</h2>
    <p>The goal with React is to create a tree of React elements and render them to the screen. The React element tree is composed of components. Then, components inevitably have a hierarchical structure. Since components have a hierarchical structure, it is natural to configure the directory structure according to the component hierarchy. </p>

    <div className="card-actions space-x-14 ">
      <div> <div className="avatar-group  -space-x-2 bg-primary-content">
  <div className="avatar border-none">
    <div className="w-8">
      <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" />
    </div>
  </div>
  <div className="avatar border-none ">
    <div className="w-8">
      <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" />
    </div>
  </div>
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg" />
    </div>
  </div>
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" />
    </div>
  </div>
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" />
    </div>
  </div>
  <div className="avatar placeholder border-none  ">
    <div className="w-8 bg-primary-content text-neutral-content">
      <span><button onClick={() => setReactions(reactions + 1)}><p>{reactions}</p></button></span>
    </div>
  </div>
</div></div>
      <button className="btn border-none font-light text-xs bg-primary-content  justify-end hover:bg-primary-content">
        3 Comments</button>
    </div>
  </div>
</div>
<div className="pt-2">
<div className="card w-96 card-compact bg-primary-content shadow-xl">
  <div className="card-body">
  <div className="flex items-center">
  <img src="https://randomuser.me/api/portraits/women/18.jpg" className="avatar w-8 rounded-full"></img>
  <div>
    <h1 className="font-bold">Jules Hilton</h1>
    <p className="font-light text-xs">Jul 17</p>
  </div>
</div>
    <h2 className="card-title text-black">Card title!</h2>
    <p>article</p>
    <div className="card-actions space-x-14 ">
      <div> <div className="avatar-group  -space-x-2 bg-primary-content">
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" />
    </div>
  </div>
  <div className="avatar border-none ">
    <div className="w-8">
      <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" />
    </div>
  </div>
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg" />
    </div>
  </div>
  <div className="avatar border-none  ">
    <div className="w-8">
      <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" />
    </div>
  </div>
  <div className="avatar border-none">
    <div className="w-8">
      <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" />
    </div>
  </div>
  <div className="avatar placeholder border-none">
    <div className="w-8 bg-primary-content text-neutral-content">
      <span><button onClick={() => setLikes(likes + 1)}><p>{likes}</p></button></span>
    </div>
  </div>
</div></div>
      <button className="btn border-none font-light text-xs bg-primary-content justify-end hover:bg-primary-content">
        6 Comments</button>
    </div>
  </div>
</div>
</div>
</div>

<div className="card card-compact w-50 h-80 bg-primary-content shadow-xl">
  <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sHHbPqt4--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylq17e4fm8gfs75ur7nf.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black text-sm">Refine + DEV Hackathon</h2>
    <p className="text-xs">RSVQuick: Online Invitation App Made Using Refine</p>
    <p className="text-xs">Inventory Management Website</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-block text-xs">Share your project</button>
    </div>
  </div>
</div>

</div>
    </>
  )
}

export default App
