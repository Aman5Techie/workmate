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
        direction={{ base: "column", md: "column", sm:"row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          // src = "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1597092430872-09a3f4338c60"
          src="https://images.unsplash.com/photo-1616680802368-03858af6588a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjA2ODh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTg3MjQ4MjN8&ixlib=rb-4.0.3&q=80&w=400"
          alt="Green double couch with wooden leFgs"
          borderRadius="lg"
          objectFit="cover"
          maxH={{base : 150 , sm:"250px",md:"260px"}}
          maxW={{ base: "100%", sm: "150px", md: "500px" }}
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
                  onClick={() => navigate("/bid/a28b7a19-e4f9-47b4-8aac-254b61344b87")}
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
