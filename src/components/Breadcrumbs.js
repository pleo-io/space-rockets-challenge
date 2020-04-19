import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";
import { v4 as uuidv4 } from 'uuid'

export default function Breadcrumbs({ items }) {
  
  return (
    <Breadcrumb
      m="6"
      spacing="1"
      separator={<Box size="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        const key = uuidv4()
        
        return (
          <BreadcrumbItem
              key={key}
              isCurrentPage={isCurrentPage}
          >
            <BreadcrumbLink
              as={!isCurrentPage ? Link : undefined}
              to={!isCurrentPage ? item.to : undefined}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
