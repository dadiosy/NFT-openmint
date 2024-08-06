"use client";
import * as React from "react";
import Image from "next/image";
import { Download, Pickaxe, Stamp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";

interface INFTModalProof {
  p: boolean;
  d: string;
}

export interface INFTModal {
  mainHash: string;
  data: {
    //@ts-ignore
    args: {
      request_dmitem: string;
      main: string;
      i: boolean;
      proof: INFTModalProof[];
    };
    [key: string]: {
      $b?: string;
    };
  };
  targetVector: string;
  targethash: string;
}

const NFTCard = ({ atomicalData, data }: { atomicalData: any, data: INFTModal[] }) => {

  const handleMint = async (dmitem: Record<string, any>) => {

    console.log("dmint :", dmitem);
    // @ts-ignore
    if (typeof window?.wizz !== "undefined") {
      try {
        // @ts-ignore
        const response = await window?.wizz.requestMint({
          type: 'mint_dmitem',
          dmitem,
          atomicalId: atomicalData.atomical_id
        });
        console.log('Mint response:', response);
      } catch (error) {
        console.error('Mint error:', error);
      }
    };
  }

  const handleDownload = (nftModal: INFTModal) => {
    const content = nftModal;
    const jsonBlob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(jsonBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `item-${nftModal.data.args.request_dmitem}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getImageBase64 = (data: { [key: string]: { $b?: string } }) => {
    for (const key in data) {
      if (data[key].$b) {
        return Buffer.from(data[key].$b, "hex").toString("base64");
      }
    }
    return null;
  };

  return (
    <div className="mt-4 p-4 grid new-feed-cols justify-center justify-items-center gap-4 w-full">

      {data && data.map((nftModal, index) => (

        <div key={index} className="w-fit flex flex-col items-center border-2">

          {getImageBase64(nftModal.data) ? (
            <div className="relative group w-34 h-auto rounded-lg overflow-hidden">
              <Image
                src={`data:image/png;base64, ${getImageBase64(nftModal.data)}`}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                alt="NFT"
              />
              <div className="absolute inset-0 bg-white dark:bg-white bg-opacity-80 dark:bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-xl text-black dark:text-secondary text-balance font-bold">{nftModal.data.args.request_dmitem}</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex justify-center items-center">
              <Skeleton className="w-72 h-72" />
            </div>
          )}

          <div className="flex flex-row justify-center items-center w-full">

            <Button
              variant={'outline'}
              className="h-8 w-full border-b-0 border-l-0"
              onClick={() => handleDownload(nftModal)}
            >
              <Download className="flex justify-center items-center h-4 w-6" />
            </Button>

            <Button
              variant={'outline'}
              className="h-8 w-full border-b-0 border-r-0"
              onClick={() => handleMint(nftModal)}
            >
              <Pickaxe className="flex justify-center items-center h-4 w-6" />
            </Button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
