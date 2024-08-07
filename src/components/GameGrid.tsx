import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { data, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {data.map((data) => (
          <GameCard key={data.id} game={data} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
