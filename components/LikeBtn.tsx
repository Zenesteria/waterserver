import {useState} from 'react'
import {  FaHeart, FaRegHeart } from 'react-icons/fa'

export default function LikeBtn() {
    const [isLiked, setIsLiked] = useState(false)
  return !isLiked ? (
    <FaRegHeart
      className=" cursor-pointer duration-300 hover:scale-105"
      style={{ fontSize: "calc(1rem + 0.25vw)" }}
      onClick={() => setIsLiked(!isLiked)}
    />
  ) : (
    <FaHeart
      className=" cursor-pointer duration-300 hover:scale-105 text-red-600"
      style={{ fontSize: "calc(1rem + 0.25vw)" }}
      onClick={() => setIsLiked(!isLiked)}
    />
  );
}
