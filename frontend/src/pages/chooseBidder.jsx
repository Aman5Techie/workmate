import React, { useState } from "react";
import {
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
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdCircle } from "react-icons/md";
import ChangeStatus from "../iconBtn/changeStatus";
import { EditIcon } from "@chakra-ui/icons";
import TagsMaker from "../componets/tagsMaker";
import BidderInfo from "../componets/BidderInfo";

// Sample bids data
const bids = [
  { id: 1, name: "Bidder One", amount: 1200 },
  { id: 2, name: "Bidder Two", amount: 1500 },
  { id: 3, name: "Bidder Three", amount: 1000 },
];

const ChooseBidder = () => {
  const [selectedBid, setSelectedBid] = useState(null);
  const [status, setStatus] = useState("Open");
  console.log(status);
  const handleBidSelection = (id) => {
    setSelectedBid(id);
  };

  const submitSelectedBid = () => {
    console.log("Selected Bid ID:", selectedBid);
    // Handle the selected bid submission logic here
  };

  return (
    <div className="py-2 flex justify-center ">
      <div className="w-[828px]">
        <Card>
          <Stack>
            <Card
              direction={{ base: "column", md: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", md: "300px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
                className="h-56 w-full md:h-72 md:w-full"
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
                    <ListItem py={0}>
                      <ChangeStatus setValue={setStatus} value={status} />
                    </ListItem>
                  </List>
                
                  <Flex>
                    <Text pt="2" className="font-semibold" marginRight="1rem">
                      Tags:
                    </Text>
                    <div className="pt-3">
                      <TagsMaker tags={[1, 2, 3, 4, 5, 6,"Asjbsbd","sakndkasjnkld","sadadjbdha","amsd  ams"]} />
                    </div>
                  </Flex>
                </CardBody>
              </Stack>
            </Card>
            <Heading size="md" py={1} px={4}>
              Bidders
            </Heading>
            <CardBody>
              {/* <RadioGroup onChange={handleBidSelection} value={selectedBid}>
                <List spacing={3}>
                  {bids.map((bid) => (
                    <ListItem
                      key={bid.id}
                      className="flex justify-between items-center"
                    >
                      <Flex alignItems="center">
                        <Radio value={bid.id.toString()} />
                        <Box ml={3}>
                          <Text fontWeight="bold">{bid.name}</Text>
                          <Text>Amount: ${bid.amount}</Text>
                        </Box>
                      </Flex>
                      <Button
                        colorScheme="teal"
                        onClick={() => handleBidSelection(bid.id)}
                      >
                        Select
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </RadioGroup> */}
              <BidderInfo/>
            </CardBody>
           
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default ChooseBidder;
