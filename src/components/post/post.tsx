import { useState } from "react";

export default function Post() {
  const [reactions, setReactions] = useState(6)
  const [likes, setLikes] = useState(2)

  return (
    <>
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
</>
);
}
