import {
  Box,
  HStack,
  Icon,
  Text,
  Wrap,
} from "@chakra-ui/react";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaDumbbell,
  FaConciergeBell,
  FaCoffee,
  FaSpa,
  FaUtensils,
  FaTv,
  FaGamepad,
  FaBicycle,
  FaChild,
  FaCocktail,
  FaDog,
  FaPlaneDeparture,
  FaCar,
  FaRegCalendarCheck,
  FaFireExtinguisher,
  FaGlassCheers,
  FaHotTub,
  FaKey,
  FaLaptop,
  FaLock,
  FaMobileAlt,
  FaMoneyBillAlt,
  FaShower,
  FaSnowflake,
  FaToilet,
  FaTshirt,
  FaWater,
  FaWind,
  FaEllipsisH,
} from "react-icons/fa";
import PropTypes from 'prop-types';

const amenities = [
  { icon: FaWifi, label: "Free WiFi" },
  { icon: FaSwimmingPool, label: "Swimming Pool" },
  { icon: FaParking, label: "Free Parking" },
  { icon: FaDumbbell, label: "Gym" },
  { icon: FaConciergeBell, label: "Concierge Service" },
  { icon: FaCoffee, label: "Coffee Maker" },
  { icon: FaSpa, label: "Spa" },
  { icon: FaUtensils, label: "Restaurant" },
  { icon: FaTv, label: "Cable TV" },
  { icon: FaGamepad, label: "Game Room" },
  { icon: FaBicycle, label: "Bike Rentals" },
  { icon: FaChild, label: "Kids Play Area" },
  { icon: FaCocktail, label: "Bar" },
  { icon: FaDog, label: "Pet Friendly" },
  { icon: FaPlaneDeparture, label: "Airport Shuttle" },
  { icon: FaCar, label: "Car Rental" },
  { icon: FaRegCalendarCheck, label: "24/7 Reception" },
  { icon: FaFireExtinguisher, label: "Fire Extinguisher" },
  { icon: FaGlassCheers, label: "Banquet Hall" },
  { icon: FaHotTub, label: "Hot Tub" },
  { icon: FaKey, label: "Room Key Access" },
  { icon: FaLaptop, label: "Business Center" },
  { icon: FaLock, label: "Safe" },
  { icon: FaMobileAlt, label: "Mobile Check-In" },
  { icon: FaMoneyBillAlt, label: "ATM" },
  { icon: FaShower, label: "Shower" },
  { icon: FaSnowflake, label: "Air Conditioning" },
  { icon: FaToilet, label: "Private Bathroom" },
  { icon: FaTshirt, label: "Laundry Service" },
  { icon: FaWater, label: "Water Sports" },
  { icon: FaWind, label: "Climate Control" },
  { icon: FaEllipsisH, label: "Other" },
];

const AmenitiesList = ({useramenties}) => {
  return (
    <Wrap spacing={3}>
      <HStack spacing={6} p={4} wrap="wrap">
        {useramenties.map((amenity, index) => {
          const amenitiy = amenities[amenity]
          
          return (
        
          <Box key={index} display="flex" alignItems="">
            <Icon as={amenitiy.icon} w={6} h={6} color="teal.500" mr={3} />
            <Text fontSize="lg">{amenitiy.label}</Text>
          </Box>
        )})}
      </HStack>
    </Wrap>
  );
};




AmenitiesList.propTypes = {
  useramenties : PropTypes.array
};




export default AmenitiesList;
