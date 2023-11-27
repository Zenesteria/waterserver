import Link from 'next/link'
import {FaSearch, FaShoppingBag} from 'react-icons/fa'
import {LikeBtn, SearchBar} from '@/components'

interface compProps{

}

export default function Index({}:compProps) {
  return (
    <div className="w-full h-[9vh] bg-white flex items-center justify-center p-2">
      <div className="w-[90%] h-full min-w-[330px] flex items-center justify-around">
        <h1
          className="flex flex-[0.2] items-center font-bold drop-shadow-lg"
          style={{ fontSize: "calc(1.1rem + 0.5vw)" }}
        >
          <FaShoppingBag />
          <span className=" text-purple-600 ml-2">JAM</span>KEY
        </h1>
        <SearchBar/>

        {/* Aux Section */}
        <div className="flex items-center flex-[0.3]">
          <Link href={"#"} passHref>
            <h1
              className=" border-2 rounded-full border-slate-200 mx-3 font-bold px-4 py-2"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Sign Up
            </h1>
          </Link>
          <Link href={"#"} passHref>
            <h1
              className="border-slate-200 mx-3 font-bold px-4 py-2"
              style={{ fontSize: "calc(0.4rem + 0.5vw)" }}
            >
              Login
            </h1>
          </Link>

          <LikeBtn/>
          <Link href={'#'} passHref>
              <FaShoppingBag className='mx-4' style={{fontSize:'calc(1rem + 0.25vw)'}}/>
          </Link>
        </div>
      </div>
    </div>
  );
}
