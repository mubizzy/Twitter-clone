import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="">
        <div className="">
          <SearchIcon className="h-5  text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
