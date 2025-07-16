import { HStack, List, Image, Box, Spinner, Button } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageURl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  console.log(data);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List.Root>
        {data.map((genre) => (
          <Box key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                variant="plain"
              >
                {genre.name}
              </Button>
            </HStack>
          </Box>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
