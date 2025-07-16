import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatform from "../hooks/UsePlatform";
import type { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = UsePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Select Platform"}

          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {data.map((platform) => (
          <Menu.Item
            value="new-txt"
            key={platform.id}
            onClick={() => {
              onSelectPlatform(platform);
              // close();
            }}
          >
            {platform.name}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default PlatformSelector;
