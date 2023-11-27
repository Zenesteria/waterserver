import {FaSearch} from 'react-icons/fa'
import {useState,useEffect} from 'react'

export default function SearchBar() {
    const [active, setActive] = useState(false);

  return (
    <div className="bg-slate-100 flex items-center px-4 text-slate-400 h-[90%] max-w-[500px] flex-[0.7] rounded-full">
      <FaSearch className=' duration-300' style={active?{width:'0'}:{width:'30px'}} />
      <input
        type="text"
        id="searchBar"
        placeholder="Search"
        className="flex-1 h-full mx-2 outline-none bg-transparent"
      />
    </div>
  );
}
