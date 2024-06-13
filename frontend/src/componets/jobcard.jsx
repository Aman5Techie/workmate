export default Jobcard;
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SpinnerComp from "./spinner";
// src="https://picsum.photos/352/144"
export function Jobcard() {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <div className="px-3 py-2 w-full md:w-96 ">
      <Card
        bg={`${colorMode == "dark" ? "#3D3D3D" : ""} `}
        direction={{ base: "row", md: "column" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          // src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          src="https://picsum.photos/352/144"
          alt="Green double couch with wooden leFgs"
          borderRadius="lg"
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px", md: "600px" }}
        />
        <Stack>
          <CardBody className="w-full ">
            <Stack mt="6" spacing="3">
              <div className="flex justify-between">
                <div>
                  <Heading size="md">Living room Sofa</Heading>
                </div>
                <div className="px-2">
                  <Text colorScheme="blue" fontSize="xl">
                    $450
                  </Text>
                </div>
              </div>
              <div className=" w-full overflow-hidden ">
                <p className="overflow-hidden text-ellipsis line-clamp-3">
                  {/* <Text> */}
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                  {/* </Text> */}
                </p>
              </div>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  onClick={() => navigate("/bid/jakndfkjaskjd")}
                  colorScheme="blue"
                >
                  View Task
                </Button>
              </ButtonGroup>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}
