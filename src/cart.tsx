import { AspectRatio } from "@chakra-ui/react";
import {
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Image,
  Input,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If de price is too hard on your eyes,{""}
          <Button variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full" />
      <AspectRatio ratio={1} w={24}>
        <Image src={require('./images/logo-chessout.png')} alt="My logo" />
      </AspectRatio>
      
    </VStack>
  );
};

export default Cart;
