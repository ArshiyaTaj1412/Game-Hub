import {
  Card,
  Skeleton,
  SkeletonText,
  CardBody,
  HStack,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root
      borderWidth="1px"
      borderRadius={10}
      overflow="hidden"
      width="100%"
    >
      <Skeleton height="200px" />
      <CardBody display="flex" flexDirection="column" gap={3}>
        <HStack justifyContent="space-between">
          <Skeleton height="20px" width="80px" />
          <Skeleton height="20px" width="40px" />
        </HStack>
        <SkeletonText noOfLines={2} gap={2} />
      </CardBody>
    </Card.Root>
  );
};

export default GameCardSkeleton;
