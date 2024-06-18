import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import SpinnerComp from "../componets/spinner";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { MdCircle } from "react-icons/md";
import TagsMaker from "../componets/tagsMaker";
import { Divider } from "@mui/material";
import AmenitiesList from "../componets/amenties";
import Questions from "../componets/questions";
import PlusMinusButton from "../componets/priceButton";

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

const questions = [
  "What is Your Name ? ",
  "How you are going to acheive this ? ",
  "How you are going to acheive this ? ",
];

const Taskinfo = () => {
  // const { taskid } = useParams();
  const [data, setData] = useState(null);
  const toast = useToast();
  const [currentPrice, setcurrentprice] = useState(1000);

  useEffect(() => {
    // getData
    setData({});
  }, []);

  // Submit Form
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = [];
    let check = false;
    questions.map((_, i) => {
      const data = formData.get(`question-${i + 1}`);
      if (data == "") {
        toast({
          title: `Please answer question Q-${i + 1}`,
          status: "error",
          isClosable: true,
          duration: "1500",
        });
        check = true;
      }
      answers.push(data);
    });
    if (check) {
      return;
    }
    console.log("ss");
  };

  if (data == null) {
    return (
      <div className=" flex justify-center h-96 items-center">
        <SpinnerComp s={120} />
      </div>
    );
  }

  return (
    <div className="py-2 flex justify-center">
      <div className="w-[828px]">
        <Card>
          <Stack>
            {/* // header */}
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
            {/* // main card */}
            <Card
              direction={{ base: "column", md: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", md: "300px" }}
                src="https://images.unsplash.com/photo-1616680802368-03858af6588a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjA2ODh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MjQ4MjN8&ixlib=rb-4.0.3&q=80&w=400"
                alt="Caffe Latte"
                className="h-56 w-full md:h-80 md:w-full"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">TITLE</Heading>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      TASK ID :{" "}
                    </Text>
                    <Text pt="2" className="px-2">
                      SSSSSSSSSS
                    </Text>
                  </div>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      Location :
                    </Text>
                    <Text pt="2" className="px-2">
                      New Delhi
                    </Text>
                  </div>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      Posted :
                    </Text>
                    <Text pt="2" className="px-2">
                      12 June 2024
                    </Text>
                  </div>
                  <List>
                    <ListItem>
                      <Flex alignItems="center">
                        <Text pt="2" className="font-semibold">
                          Status:{" "}
                        </Text>
                        <div className="flex items-center ">
                          <Text pt="2" className="px-2 uppercase">
                            Open
                          </Text>

                          <div className="pt-1">
                            <ListIcon
                              as={MdCircle}
                              color="green.500"
                              boxSize={4}
                            />
                          </div>
                        </div>
                      </Flex>
                    </ListItem>
                  </List>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      Mode :
                    </Text>
                    <Text pt="2" className="px-2 uppercase">
                      REMOTE
                    </Text>
                  </div>
                  <Flex>
                    <Text pt="2" className="font-semibold" marginRight="1rem">
                      Tags:
                    </Text>
                    <div className="pt-3">
                      <TagsMaker tags={tags} />
                    </div>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>
            {/* // diveder  */}
            {/* <Divider orientation="horizontal" /> */}

            {/* // Description  */}
            <Card
              direction={{ base: "column", md: "column" }}
              overflow="hidden"
              variant="outline"
            >
              <Heading size="md" py={1} px={4}>
                Description
              </Heading>
              <Text pt="1" className="text-md " py={1} px={4}>
                New Delhiksaj sakjhdiasj asnbdasd as dasd sa dasd asd as das d
                ass dsa d as d asdasdasdas dasd asd a das dasd sdas dasdsad a
              </Text>
              {/* <Stack>
              </Stack> */}
            </Card>

            {/* // diveder  */}

            {/* <Divider orientation="horizontal" /> */}

            {/* // Aminties */}
            <Card
              direction={{ base: "column", md: "column" }}
              overflow="hidden"
              variant="outline"
            >
              <Heading size="md" py={1} px={4}>
                Amenities
              </Heading>
              <AmenitiesList useramenties={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]} />
            </Card>

            {/* // diveder  */}

            {/* <Divider orientation="horizontal" /> */}

            <Card>
              <Heading size="md" py={1} px={4}>
                Questions
              </Heading>
              <form onSubmit={submitForm}>
                <Questions questions={questions} />
                <Divider orientation="horizontal" />
                <Card>
                  <Heading size="md" py={1} px={4} pt={4}>
                    Bid Your Amount
                  </Heading>
                  <PlusMinusButton
                    currentPrice={currentPrice}
                    setcurrentprice={setcurrentprice}
                  />
                  <div className="w-full px-2">
                    <Button type="submit" colorScheme="blue" className="w-full">
                      Submit
                    </Button>
                  </div>
                </Card>
              </form>
            </Card>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

Taskinfo.propTypes = {};

export default Taskinfo;
