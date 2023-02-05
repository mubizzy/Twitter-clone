import React from "react";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from
 "firebase/firestore";
import Comment from "../../components/comment";


export const PostPage({ newsResults, randomUsersResults }) = ()=> {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
  
    useEffect(
        () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
        [db, id]
      );

      // get comments of the post

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  return(<div>[id]</div>) ;
};
