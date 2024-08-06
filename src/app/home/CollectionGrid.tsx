"use client";

import NFTCard from "@/components/NFTCard";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getGeneratedImages } from "@/utils/imageGenerator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CollectionGrid = ({ atomicalData }: { atomicalData: any }) => {
  const [imageList, setImageList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);

  const pageCount = 50;
  const maxVisiblePages = 5;

  useEffect(() => {
    async function fetchImageList() {
      try {
        let { totalCount, nftList } = await getGeneratedImages(currentPage, pageCount);
        const totalPage = Math.ceil(totalCount / pageCount);

        setImageList(nftList);
        setTotalPages(totalPage);
        console.log("image list :", nftList);

        if (totalCount > 0) {
          const halfVisiblePages = Math.floor(maxVisiblePages / 2);
          let start = currentPage - halfVisiblePages;
          let end = currentPage + halfVisiblePages;
          console.log(start)
          console.log(end)

          if (start < 1) {
            start = 1;
            end = Math.min(maxVisiblePages, totalPage);
          } else if (end > totalPage) {
            end = totalPage;
            start = Math.max(1, totalPage - maxVisiblePages + 1);
          }
          console.log(start)
          console.log(end)

          setStartPage(start);
          setEndPage(end);
        }
      } catch (error) {
        console.error("Error fetching preprocessed data:", error);
      }
    }
    fetchImageList();
  }, [currentPage]);


  const handlePageChange = (pageNumber: any) => {
    const newPage = Math.max(1, Math.min(totalPages, pageNumber));
    setCurrentPage(newPage);
  };

  /* const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const page = parseInt(event.target.value, 10);
    handlePageChange(page);
  }; */

  const handleSelectChange = (page: any) => {
    setCurrentPage(Number(page)); // Ensure the page value is converted to a number
  };
  /* 
    const handleDownload = () => {
      const jsonBlob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
  
      const url = URL.createObjectURL(jsonBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bullrun-${tokenId}.json`;
  
      // Step 4: Append the link to the document and trigger the download
      document.body.appendChild(link);
      link.click();
  
      // Step 5: Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }; */

  return (
    <div className="w-full">
      {
        imageList[0] && (

          <div className="pb-10">
            <NFTCard atomicalData={atomicalData} data={imageList} />
            {/* @ts-ignore */}
            <Pagination total={totalPages}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    //@ts-ignore
                    disabled={currentPage === 1} />
                </PaginationItem>

                {Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage).map((page) => (
                  <PaginationItem key={page} className="hidden md:flex">
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      className={currentPage === page ? "active" : ""}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    //@ts-ignore
                    disabled={currentPage === totalPages} />
                </PaginationItem>

                <Select onValueChange={handleSelectChange} value={String(currentPage)}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select Page" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <SelectItem key={page} value={String(page)}>
                        {page}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </PaginationContent>
            </Pagination>
          </div>
        )}

    </div>
  );
};

export default CollectionGrid;
