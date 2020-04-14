import React from "react";
import { Spinner, Flex, Button } from "@chakra-ui/core";

export default function LoadMoreButton({
  loadMore,
  isReachingEnd,
  isLoadingMore,
}) {
  return (
    <Flex justifyContent="center" my="100px">
      <Button onClick={loadMore} disabled={isReachingEnd || isLoadingMore}>
        {isLoadingMore ? (
          <Spinner />
        ) : isReachingEnd ? (
          "That's all!"
        ) : (
          "Show more..."
        )}
      </Button>
    </Flex>
  );
}
