import React from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Mubarak Ajibola",
      username: "mubizzy",
      userimg:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Mubarak Ajibola",
      username: "mubizzy",
      userimg:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      img: "https://media.istockphoto.com/id/1094390150/photo/suspension-bridge-with-lights-sunset-on-a-bridge-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=Y_MSbC4yLGGU2i6x48eKL4qzMTWsgg4KRHT4rmU1mYs=",
      text: "wow!",
      timestamp: "1 hours ago",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Feed;
