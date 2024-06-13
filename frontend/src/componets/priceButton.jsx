import { Button, HStack, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import PropTypes from "prop-types";

const PlusMinusButton = ({ currentPrice, setcurrentprice }) => {
  const [price, setprice] = useState(currentPrice);

  useEffect(() => {
    const id = setTimeout(() => {
      setcurrentprice(price);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [price, setcurrentprice]);

  return (
    <HStack spacing={0} px={4} py={5}>
      <Button
        leftIcon={<Icon as={FaPlus} />}
        onClick={() => setprice((e) => e + 5)}
        colorScheme="green"
        style={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
        _focus={{ boxShadow: "none" }} // Remove focus outline (optional)
        borderRadius="none" // Remove border radius
      >
        5
      </Button>
      <Button>{price}</Button>
      <Button
        onClick={() => setprice((e) => e - 5)}
        rightIcon={<Icon as={FaMinus} />}
        colorScheme="red"
        style={{
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
        _focus={{ boxShadow: "none" }} // Remove focus outline (optional)
        borderRadius="none"
      >
        5
      </Button>
    </HStack>
  );
};

PlusMinusButton.propTypes = {
  currentPrice: PropTypes.number,
  setcurrentprice: PropTypes.func,
};

export default PlusMinusButton;
