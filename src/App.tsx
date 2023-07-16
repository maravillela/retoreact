

function App() {


  return (
    <>
      <div className="border border-b-300 navbar bg-primary-content px-12">
    <div className="flex-1 gap-4  border-b-slate-500">
      <a><img className="h-9 w-11" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"></img></a>
      <input type="text" placeholder="Search..." className="input input-bordered bg-primary-content w-96 h-9 max-sm:invisible md:visible" />
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
          <li>
            <a className="justify-between">
              Profile
              <span className="badge bg-primary-content border-none">✨</span>
            </a>
          </li>
          <li><a>Dashboard</a></li>
          <li><a>Create Post</a></li>
          <li><a>Reading list</a></li>
          <li><a>Settings</a></li>
          <li><a>Sign Out</a></li>
        </ul>
      </div>
      </div>
    </div>
    {/*aqui empieza el aside izq*/}
    <div className="drawer sm:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-secondary-content  text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

{/*aside derecho */}
<div className=" drawer-end md:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default App
