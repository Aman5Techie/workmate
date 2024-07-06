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
  FormErrorMessage,
} from "@chakra-ui/react"; // Replace with appropriate imports
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useUserLocation } from "../customHooks/locationhook";
import { useDispatch, useSelector } from "react-redux";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import Choosetags from "../componets/choosetags";
import SelectAmenties from "../componets/selectAmenties";
import { setloading } from "../app/slices/loadingSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATEPOSTAPI } from "../graphql/query";

const TAGS = [
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

const PostTask = () => {
  // State for form inputs
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [userSelectedTags, setuserSelectedTags] = useState([]);
  const [userSelectedAmenties, setuserSelectedAmenties] = useState([]);
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
  const [currentmode, setcurrentmode] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const [createpost, { loading: loadinga, error, data: dataa }] =
    useMutation(CREATEPOSTAPI);

  const validation_Tag_Amenties = (tag) => {
    if (tag == "tag") {
      if (userSelectedTags.length < 2) {
        return "You must select at least 2 tags";
      }
      return true;
    } else {
      if (userSelectedAmenties.length < 2) {
        return "You must select at least 2 Amenties";
      }
      return true;
    }
  };

  useEffect(() => {
    if (userdata != null) {
      setlocationdata({
        state: userdata.address.state,
        city: userdata.address.city,
        district:
          userdata.address.city_district || userdata.address.state_district,
      });
    }
  }, [userdata]);

  useEffect(() => {
    dispatch(setloading(false));
  }, [userSelectedAmenties, userSelectedTags, dispatch]);

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
      const newquestion = [...questions];
      newquestion[i] = newtext;
      setquestions(newquestion);
    }, 2000);

    timeoutid.current[i] = id;
  };

  const deleteQuestion = (i) => {
    const newques = [...questions.slice(0, i), ...questions.slice(i + 1)];
    setquestions(newques);
  };

  const fetchPhoto = async () => {
    const query = userSelectedTags.map((i) => TAGS[i]).join(",");
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        query,
        client_id: import.meta.env.REACT_APP_ACCESSKEY,
        w: 451,
        h: 356,
      },
    });
    const imageUrl = response.data.urls.small;
    // setimage(imageUrl)
    return imageUrl;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // Handle form submission
  const submitForm = async (e) => {
    if (
      validation_Tag_Amenties("tag") != true &&
      !validation_Tag_Amenties("amenties") != true
    ) {
      toast({
        title: "Error",
        description: "Check Tag and Amenties",
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    // const {d} = useMutation()
    try {
      const image = await fetchPhoto();
      const userdatatemp = {
        title: taskTitle,
        userId: user.id,
        location: `https://www.google.com/maps?q=${userdata.lat},${userdata.lon}`,
        status: currentstatus,
        mode: currentmode,
        description: taskDescription,
        amenties: userSelectedAmenties,
        amount: bidAmount,
        imageurl: image,
        tags: userSelectedTags,
        questions: questions,
        state: locationdata.state,
        city: locationdata.city,
        city_district: locationdata.district,
        latitide: userdata.lat,
        longitude: userdata.lon,
      };

      const { data } = await createpost({
        variables: { ...userdatatemp },
      });
      
      toast({
        title: `Post Created Successfully `,
        status: "success",
        isClosable: true,
        duration: "1500",
        position: "top-right",
      });

     
    } catch (e) {
      console.error(e);
      toast({
        title: `Error occured sorry.`,
        status: "error",
        isClosable: true,
        duration: "1500",
        position: "top-right",
      });
    }

    // console.log("Sass");

    // console.log(dataToSubmit);
    setTaskTitle("");
    setTaskDescription("");
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
                  <Heading size="xl">Post a New Task</Heading>

                  {/* Form for task details */}
                  <form onSubmit={handleSubmit(submitForm)}>
                    <FormControl mt="4" isInvalid={errors.title}>
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Task Title
                      </FormLabel>
                      <Input
                        type="text"
                        value={taskTitle}
                        {...register("title", {
                          required: "Title is Required",
                          maxLength: {
                            value: 8,
                            message: "Title Cannot Exceed 8 Length",
                          },
                        })} // react form
                        onChange={(e) => setTaskTitle(e.target.value)}
                        placeholder="Enter task title"
                      />
                      {errors.title && (
                        <FormErrorMessage>
                          {errors.title.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.description}>
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Task Description
                      </FormLabel>
                      <Textarea
                        value={taskDescription}
                        {...register("description", {
                          required: "Description is Required",
                          minLength: {
                            value: 20,
                            message:
                              "Description should be atleast 20 character",
                          },
                        })} // react form
                        placeholder="Enter task description"
                        resize="none" // Disable native resizing
                        minHeight="100px" // Minimum height
                        maxHeight="300px" // Maximum height if needed
                        overflowY="auto" // Add scroll if content exceeds max height
                        onChange={(e) => setTaskDescription(e.target.value)}
                      />
                      {errors.description && (
                        <FormErrorMessage>
                          {errors.description.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <HStack>
                      <FormControl mt="4">
                        <FormLabel
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          State
                        </FormLabel>
                        <Input
                          type="text"
                          readOnly={true}
                          value={locationdata.state}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                      <FormControl mt="4">
                        <FormLabel
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          City
                        </FormLabel>
                        <Input
                          type="text"
                          readOnly={true}
                          defaultValue={locationdata.city}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                      <FormControl mt="4">
                        <FormLabel
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          District
                        </FormLabel>
                        <Input
                          type="text"
                          readOnly={true}
                          value={locationdata.district}
                          placeholder="Enter task location"
                        />
                      </FormControl>
                    </HStack>

                    <FormControl mt="4">
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Status
                      </FormLabel>

                      <Select
                        value={currentstatus}
                        onChange={(e) => setcurrentstatus(e.target.value)}
                      >
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                      </Select>
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.mode}>
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Mode
                      </FormLabel>
                      <Select
                        value={currentmode}
                        {...register("mode", { required: "Mode is required" })}
                        onChange={(e) => setcurrentmode(e.target.value)}
                        placeholder="Select Mode"
                      >
                        <option value="REMOTE">REMOTE</option>
                        <option value="ON-SITE">ON-SITE</option>
                      </Select>
                      {errors.mode && (
                        <FormErrorMessage>
                          {errors.mode.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl mt="4" isInvalid={errors.amount}>
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Amount Offering
                      </FormLabel>
                      <Input
                        type="number"
                        {...register("amount", {
                          required: "Please Enter Amount",
                          min: {
                            value: 100,
                            message: "Minimum ammount is 100",
                          },
                          max: {
                            value: 10000,
                            message: "Maximum amount is 10000",
                          },
                        })}
                        value={bidAmount}
                        onChange={(e) => setBidAmount(parseInt(e.target.value))}
                        placeholder="Enter bid amount"
                      />
                      {errors.amount && (
                        <FormErrorMessage>
                          {errors.amount.message}
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl mt="4">
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Questions
                      </FormLabel>
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
                                  color="white.100"
                                  style={{ width: "100%" }}
                                >
                                  <Box style={{ width: "100%" }}>
                                    {i == 0 ? (
                                      <Textarea
                                        value={question}
                                        // textColor={"black"}
                                        style={{
                                          height: "40px",
                                          minHeight: "20px",
                                        }}
                                        height={"50px"}
                                        isReadOnly
                                        className="hover:cursor-not-allowed dark:text-white"
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
                                          // _hover={{
                                          //   background: "gray.100",
                                          // }}
                                          className="dark:hover:bg-white-100 dark:hover:text-black  hover:bg-gray-200"
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

                    <div className=" py-2">
                      <Divider />
                      <FormControl mt="3" isInvalid={errors.userSelectedTags}>
                        {validation_Tag_Amenties("tag") == true ? (
                          <></>
                        ) : (
                          <span className="text-red-500">
                            {validation_Tag_Amenties("tag")}
                          </span>
                        )}
                        <FormLabel
                          style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                          TAGS (Select the tag Atleast 2)
                        </FormLabel>
                        <Choosetags userSelectedTags={setuserSelectedTags} />
                      </FormControl>
                    </div>

                    <Divider py={3} />
                    <FormControl mt="4">
                      {validation_Tag_Amenties("amenties") == true ? (
                        <></>
                      ) : (
                        <span className="text-red-500">
                          {validation_Tag_Amenties("amenties")}
                        </span>
                      )}
                      <FormLabel
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Amenties
                      </FormLabel>
                      <SelectAmenties
                        userSelectedAmenties={setuserSelectedAmenties}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="blue"
                      mt="4"
                      isDisabled={loading}
                    >
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

export default PostTask;
