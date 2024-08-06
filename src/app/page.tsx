"use client";

import { useState, useEffect } from "react";
import { fetchAtomicalsData } from "@/utils/fetchAtomicalData";
import { fetchAdditionalData } from "@/utils/imageUtils";
import { Skeleton } from "@/components/ui/skeleton";
import { Atom } from "lucide-react";
import MetaData from "@/components/MetaData";
import CollectionGrid from "./home/CollectionGrid";


export default function Home() {
  const [atomicalImageData, setAtomicalImageData] = useState<any>(null);
  const [additionalData, setAdditionalData] = useState<any>(null);

  useEffect(() => {
    // Fetch Atomicals data
    displayCard()
  }, []);

  const displayCard = async () => {
    //@ts-ignore
    const data = await fetchAtomicalsData(process.env.NEXT_PUBLIC_ATOMICALS_ID_CONTAINER);
    const image = await fetchAdditionalData(data);

    console.log("Atomicals data: ", data);

    setAtomicalImageData(data);
    setAdditionalData(image);
  };


  return (
    <div >

      <div className="flex flex-col items-center justify-center h-[90vh] gap-8 px-4 md:px-12 bg-card">

        {
          atomicalImageData ?
            <MetaData atomicalData={atomicalImageData} additionalData={additionalData} />
            : <Skeleton className="h-[90vh] w-full flex justify-center items-center" >
              <Atom className="animate-spin" />
            </Skeleton>
        }
      </div>

      <CollectionGrid atomicalData={atomicalImageData} />
    </div>
  );
}
