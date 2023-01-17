import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userimg}
        alt="user-img"
      />
      {/* right side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="">
            <h4>{post.name}</h4>
            <span>{post.username}</span>
            <span>{post.timestamp}</span>
            {/* dot icon */}
            <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
          </div>
        </div>
        {/* post text */}
        <p>{post.text}</p>
        {/* post image */}
        <img src={post.img} alt="" />

        {/* Icons */}
        <div
          className="
        "
        >
          <ChatIcon className="h-5" />
          <TrashIcon className="h-5" />
          <HeartIcon className="h-5" />
          <ShareIcon className="h-5" />
          <ChartBarIcon className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Post;
