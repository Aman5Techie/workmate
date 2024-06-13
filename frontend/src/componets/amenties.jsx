import React from "react";
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaDumbbell,
  FaConciergeBell,
} from "react-icons/fa";

const amenities = [
  { icon: FaWifi, label: "Free WiFi" },
  { icon: FaSwimmingPool, label: "Swimming Pool" },
  { icon: FaParking, label: "Free Parking" },
  { icon: FaDumbbell, label: "Gym" },
  { icon: FaConciergeBell, label: "Concierge Service" },
  { icon: FaDumbbell, label: "Gym" },
  { icon: FaConciergeBell, label: "Concierge Service" },
  { icon: FaDumbbell, label: "Gym" },
  { icon: FaConciergeBell, label: "Concierge Service" },
];

const AmenitiesList = () => {
  return (
    <Wrap spacing={3}>
      <HStack spacing={6} p={4} wrap="wrap">
        {amenities.map((amenity, index) => (
          <Box key={index} display="flex" alignItems="">
            <Icon as={amenity.icon} w={6} h={6} color="teal.500" mr={3} />
            <Text fontSize="lg">{amenity.label}</Text>
          </Box>
        ))}
      </HStack>
    </Wrap>
  );
};

export default AmenitiesList;
