import React, { useState } from "react";
const colors = [
  "inline-flex items-center rounded-full border-2 border-indigo-200 bg-indigo-200 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm",
  "inline-flex items-center rounded-full border-2 border-red-200 bg-red-200 px-2 py-1 text-sm font-semibold text-red-600 shadow-sm",
  "inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-1 text-sm font-semibold text-blue-600 shadow-sm",
];

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const tagList = ["Household", "Delivery", "Plumbing", "Petting"];

  const toggleTag = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {tagList.map((tag) => (
          <div
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`cursor-pointer px-4 py-2 rounded-full border ${
              selectedTags.includes(tag) ? `${colors[2]}` : `${colors[0]}`
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
// https://saasblocks.app/docs/components/tag
