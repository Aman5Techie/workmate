// import React, { useState } from "react";
const colors = [
  "inline-flex items-center rounded-full border-2 border-indigo-200 bg-indigo-200 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm",
  "inline-flex items-center rounded-full border-2 border-red-200 bg-red-200 px-2 py-1 text-sm font-semibold text-red-600 shadow-sm",
  "inline-flex items-center rounded-full border-2 border-blue-200 bg-blue-200 px-2 py-1 text-sm font-semibold text-blue-600 shadow-sm",
];

// const Tags = () => {
//   const [selectedTags, setSelectedTags] = useState([]);
//   const tagList = ["Household", "Delivery", "Plumbing", "Petting"];

//   const toggleTag = (tag) => {
//     setSelectedTags((prevSelectedTags) =>
//       prevSelectedTags.includes(tag)
//         ? prevSelectedTags.filter((t) => t !== tag)
//         : [...prevSelectedTags, tag]
//     );
//   };

//   return (
//     <div className="p-4">
//       <div className="flex flex-wrap gap-2">
//         {tagList.map((tag) => (
//           <div
//             key={tag}
//             onClick={() => toggleTag(tag)}
//             className={`cursor-pointer px-4 py-2 rounded-full border ${
//               selectedTags.includes(tag) ? `${colors[2]}` : `${colors[0]}`
//             }`}
//           >
//             {tag}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tags;
// TagsCarousel.js
import React, { useRef, useState } from "react";
import { Box, IconButton, Flex, HStack, Tag } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Tags = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tags = ["Household", "Delivery", "Plumbing", "Petting", "Delivery", "Plumbing", "Petting", "Delivery", "Plumbing", "Petting", "Delivery", "Plumbing", "Petting"];
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust the scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="relative" w="full" maxW="100%">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={scrollLeft}
        position="absolute"
        left={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        aria-label="Scroll Left"
      />
      <Flex overflow="hidden" ref={containerRef} px={10}>
        <HStack spacing={4}>
          {tags.map((tag, index) => (
            <Tag key={index} size="lg" colorScheme="blue">
              {tag}
            </Tag>
          ))}
        </HStack>
      </Flex>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={scrollRight}
        position="absolute"
        right={0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1}
        aria-label="Scroll Right"
      />
    </Box>
  );
};

export default Tags;

// https://saasblocks.app/docs/components/tag
