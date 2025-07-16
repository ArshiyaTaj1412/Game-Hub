import { Icon, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <Icon as={BsSearch} />
      <Input
        borderRadius={20}
        placeholder="Search Games...."
        variant="subtle"
      />
    </>
  );
};

export default SearchInput;
