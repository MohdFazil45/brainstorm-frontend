import { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const { contents, refresh } = useContent();
  const [filteredContent, setFilteredContent] = useState([]);
  const handleFilterSelect = (filterType : string | null) => {
    if (!filterType) {
      setFilteredContent([]);
      return;
    }
    const filtered = contents.filter((c) => (c as {type : string }).type === filterType);
    setFilteredContent(filtered);
  };
  const visibleContent = filteredContent.length > 0 ? filteredContent : contents;
  return (
    <div className="min-h-screen h-full w-screen bg-gray-300">
      <div className="flex justify-between items-center pl-76 pt-4 pr-4">
        <div className="text-2xl font-semibold">
          {filteredContent.length > 0 ? "Filtered Notes " : "All Notes"}
        </div>
        <Navbar />
      </div>

      <SideBar onFilterSelect={handleFilterSelect} />

      <div className="p-4 ml-72">
        <div className="flex flex-wrap gap-4 pr-4">
          {visibleContent.map(({ title, type, link, Id }, idx) => (
            <Card
              key={idx}
              title={title}
              type={type}
              link={link}
              contentId={Id}
              onDeleteSuccess={refresh}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
