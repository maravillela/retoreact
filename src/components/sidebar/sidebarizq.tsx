export default function LeftSide () {
  return(
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

  );
}