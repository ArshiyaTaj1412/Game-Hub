import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/UseGames";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        padding="10px"
        gap={6}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
