import React from "react";
import { Pagination } from "@nextui-org/react";

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function PaginationComponent({ currentPage, totalPage, onPageChange }: PaginationProps) {
  return (
    <Pagination
      size="lg"
      onChange={onPageChange}
      showControls
      total={totalPage}
      initialPage={currentPage}
    />
  );
}
