import {
  Box,
  IconButton,
  chakra,
  Menu,
  MenuButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

export default function ChartHeader({
  title,
  chartMenu,
  modalInfo,
  disclaimer,
}: {
  disclaimer?: string;
  modalInfo: string;
  title: string;
  chartMenu: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Box width={"4"} />
      <Box>
        <chakra.h6 textAlign={"center"} noOfLines={1} textOverflow="ellipsis">
          {title}
        </chakra.h6>
        {disclaimer && <chakra.sub>{disclaimer}</chakra.sub>}
      </Box>

      <Menu closeOnSelect={false}>
        <MenuButton
          size={"sm"}
          as={IconButton}
          aria-label="Options"
          icon={<FiSettings />}
          variant="outline"
        />
        {chartMenu}
      </Menu>
    </Box>
  );
}
