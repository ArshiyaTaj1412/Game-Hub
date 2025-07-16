import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="abc">abc</Menu.Item>
        <Menu.Item value="abc">cde</Menu.Item>
        <Menu.Item value="abc">efg</Menu.Item>
        <Menu.Item value="abc">hij</Menu.Item>
        <Menu.Item value="abc">klm</Menu.Item>
        <Menu.Item value="abc">nop</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
};

export default SortSelector;
