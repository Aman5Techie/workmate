import { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  IconButton,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
  FormControl,
  FormLabel,
  Input,
  Card,
  Stack,
  Avatar,
  CardBody,
  VStack,
  HStack,
  Textarea,
  Select,
  Editable,
  EditablePreview,
  EditableTextarea,
  useColorModeValue,
  Tooltip,
  useToast,
} from "@chakra-ui/react"; // Replace with appropriate imports
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useUserLocation } from "../customHooks/locationhook";
import { useSelector } from "react-redux";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const PostTask = () => {
  // State for form inputs
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [location, setLocation] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [questions, setquestions] = useState(["What should we Choose You ?"]);
  const timeoutid = useRef([]);
  const [locationdata, setlocationdata] = useState({
    state: "",
    city: "",
    district: "",
  });
  const toast = useToast();
  const userdata = useUserLocation();
  const user = useSelector((state) => state.userReducer.user);
  const [currentstatus, setcurrentstatus] = useState("Open");

  useEffect(() => {
    if (userdata != null) {
      console.log(userdata);
      console.log(userdata.address.city);
      setlocationdata({
        state: userdata.address.state,
        city: userdata.address.city,
        district: userdata.address.city_district,
      });
    }
  }, [userdata]);

  useEffect(() => {
    return () => {
      timeoutid.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, []);

  const changeQuestion = (newtext, i) => {
    if (timeoutid.current[i]) {
      clearTimeout(timeoutid.current[i]);
    }

    const id = setTimeout(() => {
      console.log(newtext, i);
      const newquestion = [...questions];
      newquestion[i] = newtext;
      setquestions(newquestion);
    }, 2000);

    timeoutid.current[i] = id;
  };

  const deleteQuestion = (i) => {
    const newques = [...questions.slice(0,i),...questions.slice(i+1)]
    setquestions(newques)
  };
  // Handle form submission
  const submitForm = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      title: taskTitle,
      userId: user.id,
      location: `https://www.google.com/maps?q=${userdata.lat},${userdata.lon}`,
      status: currentstatus,
      Bid: "Open",
      description: taskDescription,
      amenties: "amenties",
      amount: bidAmount,
      imageurl: "imageURL",
      State: locationdata.state,
      city: locationdata.city,
      city_district: locationdata.district,
      latitide: userdata.lat,
      longitude: userdata.lon,
      tags: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      question: ["Q1", "Q2"],
    };

    // Perform form submission logic here, e.g., sending data to backend
    console.log(dataToSubmit);
    // Reset form fields if needed
    setTaskTitle("");
    setTaskDescription("");
    setLocation("");
    setBidAmount("");
  };

  // if (userlocation == null && userdata == null) {
  //   return <div>PLEASE PROVIDE LOCATION</div>;
  // }

  // console.log(userlocation);
  // console.log(userdata);

  return (
    <div className="py-2 flex justify-center">
      <div className="w-[828px] ">
        <Card className="w-full ">
          <Stack className="w-full ">
            {/* Header */}

            {/* Main card section */}
            <Card
              className=""
              direction={{ base: "column", md: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack className=" w-full">
                {/* Card body */}
                <CardBody className="w-full">
                  {/* Task title */}
                  <Heading size="md">Post a New Task</Heading>

                  {/* Form for task details */}
                  <form onSubmit={submitForm}>
                    <FormControl mt="4">
                      <FormLabel>Task Title</FormLabel>
                      <Input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Enter task title"
                      />
                    </FormControl>

                    <FormControl mt="4">
                      <FormLabel>Task Description</FormLabel>
                      <Textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        placeholder="Enter task description"
                        resize="none" // Disable native resizing
                        minHeight="100px" // Minimum height
                        maxHeight="300px" // Maximum height if needed
                        overflowY="auto" // Add scroll if content exceeds max height
                      />
                    </FormControl>

                    <HStack>
                      <FormControl mt="4">
                        <FormLabel>State</FormLabel>
                        <Input
                          type="text"
                          value={locationdata.state}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                      <FormControl mt="4">
                        <FormLabel>City</FormLabel>
                        <Input
                          type="text"
                          defaultValue={locationdata.city}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                      <FormControl mt="4">
                        <FormLabel>District</FormLabel>
                        <Input
                          type="text"
                          value={locationdata.district}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                    </HStack>

                    <FormControl mt="4">
                      <FormLabel>Status</FormLabel>
                      <Select
                        value={currentstatus}
                        onChange={(e) => setcurrentstatus(e.target.value)}
                      >
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                      </Select>
                    </FormControl>

                    <FormControl mt="4">
                      <FormLabel>Bid Amount</FormLabel>
                      <Input
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(parseInt(e.target.value))}
                        placeholder="Enter bid amount"
                      />
                    </FormControl>

                    <FormControl mt="4">
                      <FormLabel>Questions</FormLabel>
                      <div className="">
                        {questions.map((question, i) => {
                          return (
                            <div key={i} className="flex items-center py-1">
                              <div className="w-8">
                                <IconButton
                                  aria-label="Close"
                                  icon={<CloseIcon />}
                                  onClick={() => {
                                    if (i == 0) {
                                      toast({
                                        title: "Error",
                                        description:
                                          "Cannot delete default question",
                                        status: "error",
                                        duration: 5000,
                                        isClosable: true,
                                      });
                                      return;
                                    }
                                    deleteQuestion(i);
                                  }}
                                  variant="ghost"
                                  colorScheme="red"
                                  size="sm"
                                  bgColor={"red.100"}
                                />
                              </div>
                              <Editable
                                key={i}
                                defaultValue={question}
                                isPreviewFocusable={true}
                                selectAllOnFocus={false}
                                px={2}
                                onChange={(t) => {
                                  changeQuestion(t, i);
                                }}
                                className="w-full"
                              >
                                <Tooltip
                                  label={`${
                                    i == 0
                                      ? "Can not Change Default Question"
                                      : "Click to edit"
                                  }`}
                                  bg={`${i == 0 ? "red.400" : "blue.400"}`}
                                  color="white"
                                  style={{ width: "100%" }}
                                >
                                  <Box style={{ width: "100%" }}>
                                    {i == 0 ? (
                                      <Textarea
                                        value={question}
                                        textColor={"black"}
                                        style={{
                                          height: "40px",
                                          minHeight: "20px",
                                        }}
                                        height={"50px"}
                                        isReadOnly
                                        className="hover:cursor-not-allowed"
                                      />
                                    ) : (
                                      <Box
                                        border="1px solid gray"
                                        width="100%"
                                        borderRadius="md"
                                      >
                                        <EditablePreview
                                          py={2}
                                          px={4}
                                          _hover={{
                                            background: "gray.200",
                                          }}
                                          style={{ width: "100%" }} // Ensure EditablePreview takes full width
                                        />
                                      </Box>
                                    )}
                                  </Box>
                                </Tooltip>
                                <EditableTextarea px={1} />
                                {/* {i !== 0 ? : <Textarea isDisabled value={"ss"} textColor={"black"} h-10 />} */}
                              </Editable>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-4">
                        <Button
                          colorScheme="blue"
                          leftIcon={<AddIcon />}
                          size="sm"
                          onClick={() => {
                            // Add your click handler logic here
                            setquestions([
                              ...questions,
                              `Enter Question Number ${questions.length + 1}`,
                            ]);
                          }}
                        >
                          Add Question
                        </Button>
                      </div>
                    </FormControl>

                    <Button type="submit" colorScheme="blue" mt="4">
                      Submit Task
                    </Button>
                  </form>
                </CardBody>
              </Stack>
            </Card>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

// {
//   "place_id": "325637233",
//   "licence": "https://locationiq.com/attribution",
//   "osm_type": "way",
//   "osm_id": "1121147439",
//   "lat": "28.5769765214656",
//   "lon": "77.1916687523536",
//   "display_name": "Sarojini Nagar, Vasant Vihar Tehsil, New Delhi, Delhi, 110023, India",
//   "address": {
//       "suburb": "Sarojini Nagar",
//       "city_district": "Vasant Vihar Tehsil",
//       "city": "New Delhi",
//       "state": "Delhi",
//       "postcode": "110023",
//       "country": "India",
//       "country_code": "in"
//   },
//   "boundingbox": [
//       "28.5767613",
//       "28.5769946",
//       "77.1916681",
//       "77.1918899"
//   ]
// }

// aa.address.country
// aa.address.city
// aa.address.city_district

export default PostTask;
