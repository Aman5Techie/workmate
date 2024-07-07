import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { red } from "@mui/material/colors";
import { ViewIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";

const colors = ["blue", "green", "red", "orange", "yellow", "purple", "teal"];

const data = [1, 2];
const value =
  "This setup ensures that the <div> element adapts its maximum width based on the screen size, making it responsive across different devices and viewport sizes. Adjust the max-w-* classes according to your design needs to control how much the width should scale for different screen sizes while maintaining a responsive layout.";

const BidderInfo = ({ bidders }) => {
  const [selected, setSelected] = useState(null);
  console.log(bidders);

  const chooseBidder = () => {};

  return (
    <div>
      <Accordion allowToggle>
        {bidders.map((answer, i) => {
          return (
            <div key={i}>
              <List p={2}>
                <Stack>
                  <ListItem
                    bgColor={`${selected == i ? "lightblue" : null}`}
                    height={14}
                    className="rounded-lg"
                  >
                    <div className="flex w-full h-full justify-between items-center">
                      <div className="flex items-center">
                        <div className="px-1 m-1">
                          <Avatar
                            bg={`${colors[i % 7]}.300`}
                            size={"md"}
                            icon={<AiOutlineUser fontSize="1.5rem" />}
                          />
                        </div>
                        <div
                          className={`${
                            selected == i ? "text-black" : ""
                          } text-xl`}
                        >
                          {answer.user.username.toUpperCase()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`${
                            selected == i ? "text-black" : ""
                          } text-2xl px-3 font-serif`}
                        >
                          ₹ {answer.amount}
                        </div>
                        <div className="px-2 py-2 dark:bg-blue-300 rounded-xl w-25 h-11">
                          <Button
                            onClick={() => {
                              setSelected(i);
                            }}
                            py={2}
                            height={8}
                          >
                            {selected == i ? "Selected" : "Select"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <div className="flex">
                          <Box as="span" flex="1" textAlign="left">
                            View Answers
                          </Box>
                        </div>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {answer.answers.map((ans, index) => {
                      return (
                        <AccordionPanel key={index + "ans"} pb={1}>
                          <div key={i}>
                            <Text mb="8px" px={0}>
                              Q-{i + 1} {answer.questions[index]}
                            </Text>
                            <div className="px-0 py-1 pb-3 ">
                              <div className=" w-[453px] sm:w-[620px] md:w-full text-sm  break-words bg-gray-100 p-4 dark:bg-gray-700 rounded-md shadow-md">
                                {ans}
                              </div>
                            </div>
                          </div>
                        </AccordionPanel>
                      );
                    })}
                  </AccordionItem>
                </Stack>
              </List>
              <Divider
                key={`divider ${i}`}
                borderColor={"gray"}
                borderWidth="1px"
                my="2"
              />
            </div>
          );
        })}
      </Accordion>
      <div className="w-full px-2">
        <Button
          onClick={chooseBidder}
          colorScheme="blue"
          className="w-full"
          isDisabled={selected == null}
        >
          Choose Bidder
        </Button>
      </div>
    </div>
  );
};

BidderInfo.propTypes = {
  bidders: PropTypes.array,
};

export default BidderInfo;
