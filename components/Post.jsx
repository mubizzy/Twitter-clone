import { ChatIcon, DotsHorizontalIcon } from "@heroicons/react/outline";

const Post = ({ post }) => {
  return (
    <div>
      {/* user image */}
      <img src={post.userimg} alt="user-img" />
      {/* right side */}
      <div className="">
        {/* Header */}

        <div className="">
          {/* post user info */}
          <div className="">
            <h4>{post.name}</h4>
            <span>{post.username}</span>
            <span>{post.timestamp}</span>
            {/* dot icon */}
            <DotsHorizontalIcon className="h-10" />
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
          <ChatIcon className="" />
        </div>
      </div>
    </div>
  );
};

export default Post;
