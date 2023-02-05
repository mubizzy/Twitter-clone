import React from "react";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} fro
 "firebase/firestore";
import Comment from "../../components/comment";


export const PostPage({ newsResults, randomUsersResults }) = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
  
  return <div>[id]</div>;
};
