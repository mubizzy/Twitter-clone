import { useRecoilState } from "recoil";

import { modalState, postIdState } from "../atom/modalAtom";
import Modal from "react-modal";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg w-[90%]  absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md"
        >
    </div>
  );
};

export default CommentModal;
