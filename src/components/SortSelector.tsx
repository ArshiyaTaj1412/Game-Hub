import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string | null) => void;
  sortOrder: string | null;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { key: "", label: "Relevance" },
    { key: "-added", label: "Date added" },
    { key: "name", label: "Name" },
    { key: "-release", label: "Realease Date" },
    { key: "-metacritic", label: "Popularity" },
    { key: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.label === sortOrder
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {sortOrders.map((order) => (
          <Menu.Item
            value={order.label}
            key={order.key}
            onClick={() => {
              onSelectSortOrder(order.key);
            }}
          >
            {order.label}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default SortSelector;
