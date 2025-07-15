import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/UseGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root
        maxW="sm"
        borderWidth="1px"
        borderRadius={10}
        overflow="hidden"
      >
        <Image src={game.background_image} alt={game.name} />
        <Card.Body>
          <HStack justifyContent="space-between" marginBottom={3}></HStack>
          <Heading size="2xl">{game.name}</Heading>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
