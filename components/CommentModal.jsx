import { modalState, postIdState } from "../atom/modalAtom";
import Modal from "react-modal";
import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md"
      />
      <div className="p-1">
        <div className="border-b border-gray-200 py-2 px-1.5">
          <div
            onClick={() => setOpen(false)}
            className="hoverEffect w-10 h-10 flex items-center justify-center"
          >
            <XIcon className="h-[23px] text-gray-700 p-0" />
          </div>
        </div>
        <div className="p-2 flex items-center space-x-1 relative">
          <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
          <img
            className="h-11 w-11 rounded-full mr-4"
            src={post?.data()?.userImg}
            alt="user-img"
          />
          <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
            {post?.data()?.name}
          </h4>
          <span className="text-sm sm:text-[15px]">
            @{post?.data()?.username} -{" "}
          </span>
          <span className="text-sm sm:text-[15px] hover:underline">
            <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
          </span>
        </div>
        <p className="text-gray-500 text-[15px] sm:text-[16px] ml-16 mb-2">
          {post?.data()?.text}
        </p>
      </div>
    </div>
  );
};

export default CommentModal;
