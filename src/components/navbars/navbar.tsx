

function App() {


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
    

      </>
    )
  }
  
  export default App
