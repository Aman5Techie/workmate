import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Editable,
  EditablePreview,
  Flex,
  IconButton,
  Select,
  Text,
  useEditableControls,
  Box,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCircle } from "react-icons/md";
const customButtonStyle = {
  height: "29px", // Between xs (20px) and sm (32px)
  minWidth: "29px", // Between xs (20px) and sm (32px)
  fontSize: "14px", // Adjust font size as needed
};

function ChangeStatus({ value, setValue }) {
  const [isEditing, setIsEditing] = useState(false);
  //   const [value, setValue] = useState("Open");

  function EditableControls() {
    const { getSubmitButtonProps, getCancelButtonProps } =
      useEditableControls();

    return isEditing ? (
     
    <ButtonGroup justifyContent="center" size="sm" px={2}>
      <IconButton
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
        onClick={() => setIsEditing(false)}
      />
      <IconButton
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
        onClick={() => setIsEditing(false)}
      />
    </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          //   size="sm"
          style={customButtonStyle}
          icon={<EditIcon />}
          onClick={() => setIsEditing(true)}
        />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      fontSize="2xl"
      isPreviewFocusable={false}
      value={value}
      onChange={setValue}
    >
      <Flex>
        <div>
          {isEditing ? null : (
            <Flex alignItems="center" justifyContent="center">
              <Text pt="2" className="font-semibold text-base">
                Status:{" "}
              </Text>
              <Flex alignItems="center">
                <Text pt="2" className="px-2 uppercase text-base">
                  {value}
                </Text>
                <div className="pb-2">
                  <ListIcon
                    as={MdCircle}
                    color={value === "Open" ? "green.500" : "red.500"}
                    boxSize={4}
                    ml={0} // Add margin to separate text and icon
                  />
                </div>
              </Flex>
            </Flex>
          )}
          {isEditing ? (
            <Select value={value} onChange={(e) => setValue(e.target.value)}>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </Select>
          ) : null}
        </div>
        <div className={`${isEditing ? "pt-0" : "pt-3"}`}>
          <EditableControls />
        </div>
      </Flex>
    </Editable>
  );
}



export default ChangeStatus;
