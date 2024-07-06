import React from "react";
import PropTypes from "prop-types";
import { HStack, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";



const TagsMaker = ({ tags }) => {
  console.log();
  return (
    <div>
      <Wrap spacing={2}>
        {tags.map((tag, index) => (
          <WrapItem key={index}>
            <IndividualTag name={tag.name} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
};

const colors = ["gray", "blue", "green", "red", "orange", "yellow", "purple"];

const IndividualTag = ({ name }) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return (
    <>
      <Tag
        size="md"
        key="md"
        borderRadius="full"
        variant="solid"
        colorScheme={colors[randomIndex]}
      >
        <TagLabel>{name}</TagLabel>
      </Tag>
    </>
  );
};

TagsMaker.propTypes = {};

export default TagsMaker;
