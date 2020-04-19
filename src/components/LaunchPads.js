import React from "react";
import { Badge, Box, SimpleGrid, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useSWRPages } from "swr";
import { v4 as uuidv4 } from 'uuid'
import { useSpaceX } from "../utils/use-space-x";
import Error from "./Error";
import Breadcrumbs from "./Breadcrumbs";
import LoadMoreButton from "./LoadMoreButton";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  // uses undocumented pagination feature of SWR,
  // see https://github.com/zeit/swr/tree/master/examples/pagination
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages(
    "launchpads-page",
    ({ offset, withSWR }) => {
      const { data: launchPads, error } = withSWR(
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useSpaceX("/launchpads", {
          limit: PAGE_SIZE,
          offset,
        })
      );

      if (error) return <Error />;
      if (!launchPads) return null;

      return launchPads.map((launchPad) => {
        const key = uuidv4()
        return (
            <LaunchPadItem key={key} launchPad={launchPad} />
        )
      });
    },
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) return null;
      return (index + 1) * PAGE_SIZE;
    },
    []
  );

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {pages}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={loadMore}
        isReachingEnd={isReachingEnd}
        isLoadingMore={isLoadingMore}
      />
    </div>
  );
}

function LaunchPadItem({ launchPad }) {
  return (
    <Link to={launchPad.site_id}>
      <Box
        maxW="md"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        position="relative"
      >
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {launchPad.status === "active" ? (
              <Badge px="2" variant="solid" variantColor="green">
                Active
              </Badge>
            ) : (
              <Badge px="2" variant="solid" variantColor="red">
                Retired
              </Badge>
            )}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {launchPad.attempted_launches} attempted &bull;{" "}
              {launchPad.successful_launches} succeeded
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {launchPad.name}
          </Box>
          <Text color="gray.500" fontSize="sm">
            {launchPad.vehicles_launched.join(", ")}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
