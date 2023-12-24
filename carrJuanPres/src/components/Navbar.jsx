

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Amigo Invisible</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://scontent.fcor3-1.fna.fbcdn.net/v/t39.30808-6/412333265_7188722634482436_3061101596123389460_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeH8p81sikU0DW77lD0eY8p1vrNjvqmba6u-s2O-qZtrq_xiHrMogRFdKVYymXe3sVE&_nc_ohc=u01ILzdTGR4AX_a2Pu8&_nc_ht=scontent.fcor3-1.fna&oh=00_AfAw1SIiyvAsbGos6OUHpyJExTbyT75EDDgHeeqVAlupsQ&oe=658CD7B4" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}
