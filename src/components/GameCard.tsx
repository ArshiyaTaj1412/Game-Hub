import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root height="300px" width="300px" borderRadius={10} overflow="hidden">
      <Image height="200px" src={getCroppedImageUrl(game.background_image)} />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
        overflow="hidden"
        padding={3}
      >
        <Heading fontSize="xl" truncate>
          {game.name}
        </Heading>
        <HStack
          justifyContent="space-between"
          width="100%"
          paddingX={11}
          marginTop={3}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
