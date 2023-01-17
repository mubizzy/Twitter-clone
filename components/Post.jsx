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
            {/* dot icon */}
            <h4>{post.name}</h4>
          </div>
        </div>
        {/* post text */}

        {/* post image */}

        {/* Icons */}
        <div
          className="
        "
        ></div>
      </div>
    </div>
  );
};

export default Post;
