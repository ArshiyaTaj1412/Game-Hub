import { HStack, List, Image, Text, Box, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURl from "../services/image-url";

const GenreList = () => {
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
              <Text fontSize="l">{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
