import { Search } from "lucide-react";

const SearchBar = () => {
  return <div 
    className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 hover:shadow-md transition cursor-pointer">
    <Search className="w-4 h-4 text-gray-500"/>
    <input id="search" placeholder="Search..." className="text-sm outline-0" />
  </div>;
  
}

export default SearchBar;