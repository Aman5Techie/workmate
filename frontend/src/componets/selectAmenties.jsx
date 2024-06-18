import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
  FaTimes,
} from "react-icons/fa";
import {
  Box,
  HStack,
  Icon,
  Input,
  Text,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setloading } from "../app/slices/loadingSlice";

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

const SelectAmenties = ({ userSelectedAmenties }) => {
  const [selectedAmenties, setselectedAmenties] = useState({});
  const [search, setsearch] = useState(amenities);
  const toast = useToast();
  const dispatch = useDispatch();
  const ShowError = () => {
    toast({
      title: "Max 10 Amenties are Allowed",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const filterAmentiesOnSearch = (inputName) => {
    const searchValue = amenities.filter((amenity) =>
      amenity.label.toLowerCase().includes(inputName.toLowerCase())
    );
    setsearch(searchValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      userSelectedAmenties(Object.values(selectedAmenties));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedAmenties, userSelectedAmenties]);

  const removeAmeneties = (name) => {
    delete selectedAmenties[name];
    setselectedAmenties({ ...selectedAmenties });
  };

  const addAmenties = (name, index) => {
    dispatch(setloading(true));
    if (Object.entries(selectedAmenties).length >= 10) {
      ShowError();
      return;
    }
    const newSelect = { ...selectedAmenties, [name]: index };
    console.log(newSelect);
    setselectedAmenties(newSelect);
  };
  return (
    <div>
      <Wrap spacing={3}>
        <HStack spacing={6} p={4} wrap="wrap">
          <Input
            placeholder="Search the Tag ....."
            onChange={(e) => filterAmentiesOnSearch(e.target.value)}
          />

          {search.map((amenity, index) => (
            <Box key={index} display="flex" alignItems="center">
              <div
                className={`flex ${
                  selectedAmenties[amenity.label] == undefined
                    ? "cursor-pointer"
                    : ""
                }`}
                onClick={() => {
                  addAmenties(amenity.label, index);
                }}
              >
                <Icon as={amenity.icon} w={6} h={6} color="teal.500" mr={3} />
                <Text fontSize="lg">{amenity.label}</Text>
              </div>
              {selectedAmenties[amenity.label] == undefined ? (
                <></>
              ) : (
                <div
                  className={`flex px-1 cursor-pointer `}
                  onClick={() => {
                    removeAmeneties(amenity.label);
                  }}
                >
                  <Icon as={FaTimes} w={4} h={4} color="teal.600" />
                </div>
              )}
            </Box>
          ))}
        </HStack>
      </Wrap>
    </div>
  );
};

SelectAmenties.propTypes = {
  userSelectedAmenties: PropTypes.func,
};

export default SelectAmenties;
