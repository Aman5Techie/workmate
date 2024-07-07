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

import { useMutation, useQuery } from "@apollo/client";

import { MdCircle } from "react-icons/md";
import TagsMaker from "../componets/tagsMaker";
import { Divider } from "@mui/material";
import AmenitiesList from "../componets/amenties";
import Questions from "../componets/questions";
import PlusMinusButton from "../componets/priceButton";
import {
  GET_TASK_INFO_BY_ID,
  gettags,
  SUBMIT_ANSWER,
  tempcheck,
} from "../graphql/query";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/utils";

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

const Taskinfo = () => {
  const { taskid } = useParams();
  const [data, setData] = useState(null);
  const toast = useToast();
  const [currentPrice, setcurrentprice] = useState(0);
  const { data: taskinformation } = useQuery(GET_TASK_INFO_BY_ID, {
    variables: { taskIdoftask: taskid },
  });
  const currentuser = useSelector((state) => state.userReducer.user);

  const [createAnswer] = useMutation(SUBMIT_ANSWER);

  useEffect(() => {
    // getData
    const taskdata = taskinformation?.taskQuery.task;
    if (taskdata != undefined) {
      console.log(taskdata);

      setData(taskdata);
      setcurrentprice(taskdata.amount);
    }
  }, [taskinformation]);

  // Submit Form
  

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answers = [];
    const question = [];
    let check = false;
    data.questions.map((_, i) => {
      const data = formData.get(`question-${i + 1}`);
      if (data.length < 50) {
        toast({
          title: `Answer question Q-${i + 1} with a minimum of 50 characters.`,
          status: "error",
          isClosable: true,
          duration: "1500",
          position: "top-right",
        });

        check = true;
      }

      answers.push(data);
      question.push(_.question);
    });

    if (check) {
      return;
    }

    try {
      const { data: Postdata } = await createAnswer({
        variables: {
          questions: question,
          answers: answers,
          userid: currentuser.id,
          taskid: taskid,
          amount: currentPrice,
        },
      });
      
      toast({
        title: `Answer Submitted Successfully `,
        status: "success",
        isClosable: true,
        duration: "1500",
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: `You already filled this form.`,
        status: "error",
        isClosable: true,
        duration: "1500",
        position: "top-right",
      });
    }
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
                  <Heading size="sm">{data.userinfo.username.toUpperCase()}</Heading>
                  <Text>{data.userinfo.email}</Text>
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
                src={data.imageurl}
                alt="Caffe Latte"
                maxH={{ base: "100%", md: "270px" }}
                className="h-56 w-full md:h-80 md:w-full"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{data.title.toUpperCase()}</Heading>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      TASK ID :{" "}
                    </Text>
                    <Text pt="2" className="px-2">
                      {data.taskId}
                    </Text>
                  </div>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      Location :
                    </Text>
                    <Text pt="2" className="px-2">
                      {`${data.state}, ${data.city}, ${data.city_district}`}
                    </Text>
                  </div>
                  <div className="flex">
                    <Text pt="2" className="font-semibold">
                      Posted :
                    </Text>
                    <Text pt="2" className="px-2">
                      {formatDate(data.createdAt)}
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
                            {data.status}
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
                      {data.mode}
                    </Text>
                  </div>
                  <Flex>
                    <Text pt="2" className="font-semibold" marginRight="1rem">
                      Tags:
                    </Text>
                    <div className="pt-3">
                      <TagsMaker tags={data.tags} />
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
                {data.description}
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
              <AmenitiesList useramenties={data.amenties} />
            </Card>

            {/* // diveder  */}

            {/* <Divider orientation="horizontal" /> */}

            <Card>
              <Heading size="md" py={1} px={4}>
                Questions
              </Heading>
              <form onSubmit={submitForm}>
                <Questions questions={data.questions} />
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
