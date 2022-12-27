import { Box, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useHeaderLink from "../hooks/useHeaderLink";

function CurrentStatusPage() {
  const { allSections, sectionText, handler } = useHeaderLink();
  const router = useRouter();

  console.log(allSections);
  return (
    <Box fontSize={"lg"} fontWeight="bold" pr={"2"} position={"sticky"}>
      {sectionText}
    </Box>
  );
  return (
    <Menu>
      <MenuList>
        {allSections.map((section) => (
          <MenuItem>{section}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default CurrentStatusPage;
