import { Box, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (search: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Box
      as="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
      position="relative"
      flex="1"
    >
      <Icon
        as={BsSearch}
        position="absolute"
        left="12px"
        top="50%"
        transform="translateY(-50%)"
        color="gray.500"
        pointerEvents="none"
      />
      <Input
        ref={ref}
        borderRadius={20}
        flex={1}
        placeholder="Search Games..."
        variant="subtle"
      />
    </Box>
  );
};

export default SearchInput;
