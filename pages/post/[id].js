import React from "react";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Comment from "../../components/comment";

export const [id] = () => {
  return <div>[id]</div>;
};
