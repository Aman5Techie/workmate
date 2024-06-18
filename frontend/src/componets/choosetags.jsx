import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Divider,
  FormControl,
  FormLabel,
  TagCloseButton,
  useToast,
} from "@chakra-ui/react";
import { Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setloading } from "../app/slices/loadingSlice";

const tags = [
  "Cleaning",
  "Gardening",
  "Repairs",
  "Delivery",
  "Assembly",
  "Painting",
  "Writing",
  "Tutoring",
  "Moving",
  "Pet Care",
  "Shopping",
  "Data Entry",
  "Graphic Design",
  "Event Planning",
  "Personal Assistant",
  "Plumbing",
  "Electrical",
  "Web Development",
  "Photography",
  "Marketing",
  "OTHER",
];

const colors = [
  "green",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
  "blackAlpha",
];
const Choosetags = ({ userSelectedTags }) => {
  const [selectedTag, setselectedTag] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const ShowError = () => {
    toast({
      title: "Max 14 Tags are Allowed",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const selectTag = (tag, index) => {
    dispatch(setloading(true));
    if (Object.entries(selectedTag).length > 14) {
      ShowError();
      return;
    }
    if (selectedTag[tag] == undefined) {
      setselectedTag({ ...selectedTag, [tag]: index });
    } else {
      delete selectedTag[tag];
      setselectedTag({ ...selectedTag });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const tagsIds = Object.values(selectedTag);
      userSelectedTags(tagsIds);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedTag, userSelectedTags]);

  return (
    
        <div>
          <Wrap spacing={2}>
            {tags.map((tag, index) => (
              <WrapItem
                key={index}
                cursor={"pointer"}
                onClick={() => {
                  selectTag(tag, index);
                }}
              >
                <IndividualTag
                  name={tag}
                  bool={selectedTag[tag] == undefined ? false : true}
                  index={index}
                />
              </WrapItem>
            ))}
          </Wrap>
        </div>
      
  );
};

Choosetags.propTypes = {
  userSelectedTags: PropTypes.func,
};

const IndividualTag = ({ name, bool, index }) => {
  return (
    <>
      <Tag
        size="md"
        key="md"
        borderRadius="full"
        variant="solid"
        bg={`${colors[index % colors.length]}.400`}
      >
        <TagLabel>{name}</TagLabel>
        {bool && <TagCloseButton />}
      </Tag>
    </>
  );
};

IndividualTag.propTypes = {
  name: PropTypes.string,
  bool: PropTypes.bool,
  index: PropTypes.number,
};

export default Choosetags;
