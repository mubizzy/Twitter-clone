import { useRecoilState } from "recoil";
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
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md"
      />
    </div>
  );
};

export default CommentModal;
