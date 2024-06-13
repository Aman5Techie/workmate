import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

// Sample bids data
const bids = [
  { id: 1, name: "Bidder One", amount: 1200 },
  { id: 2, name: "Bidder Two", amount: 1500 },
  { id: 3, name: "Bidder Three", amount: 1000 },
];

const ChooseBidder = () => {
  const [selectedBid, setSelectedBid] = useState(null);

  const handleBidSelection = (id) => {
    setSelectedBid(id);
  };

  const submitSelectedBid = () => {
    console.log("Selected Bid ID:", selectedBid);
    // Handle the selected bid submission logic here
  };

  return (
    <div className="py-2 flex justify-center">
      <div className="w-[828px]">
        <Card>
          <Stack>
            <Heading size="md" py={1} px={4}>
              Bids
            </Heading>
            <CardBody>
              <RadioGroup onChange={handleBidSelection} value={selectedBid}>
                <List spacing={3}>
                  {bids.map((bid) => (
                    <ListItem key={bid.id} className="flex justify-between items-center">
                      <Flex alignItems="center">
                        <Radio value={bid.id.toString()} />
                        <Box ml={3}>
                          <Text fontWeight="bold">{bid.name}</Text>
                          <Text>Amount: ${bid.amount}</Text>
                        </Box>
                      </Flex>
                      <Button colorScheme="teal" onClick={() => handleBidSelection(bid.id)}>
                        Select
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </RadioGroup>
            </CardBody>
            <div className="w-full px-2">
              <Button
                onClick={submitSelectedBid}
                colorScheme="blue"
                className="w-full"
                isDisabled={!selectedBid}
              >
                Submit Selected Bid
              </Button>
            </div>
          </Stack>
        </Card>
      </div>
    </div>
  );
  
};




export default ChooseBidder;
