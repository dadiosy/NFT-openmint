import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";


const MetaData = ({ atomicalData, additionalData }: { atomicalData: any, additionalData: any }) => {

    const imageUrl = additionalData || '/placeholder-image.png';
    const { desc, dmint, legal, links, name } = atomicalData.state.latest

    const handleButtonClick = () => {
        const url = `https://ep.wizz.cash/proxy/blockchain.atomicals.get?params=["${atomicalData.atomical_id}"]`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Card className="rounded-none mx-auto border-0 shadow-none ">

            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-center md:text-start">{name}</CardTitle>
                <p className="text-muted-foreground text-sm text-center md:text-start">{dmint.items} items</p>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col md:flex-row w-full items-center gap-4">
                    <div className="flex flex-col md:flex-row  space-y-1.5">
                        <div className="flex justify-center md:justify-start">
                            <Dialog>
                                <DialogTrigger>
                                    <Image className="w-44 md:w-72 rounded-xl hover:brightness-105 border-4 border-popover-foreground" src={imageUrl} width={512} height={512} alt="Atomical Image" />
                                </DialogTrigger>
                                <DialogContent className="max-w-[90%] max-h-[70%] overflow-auto md:max-w-fit rounded-xl">
                                    <DialogHeader className="text-start">
                                        <DialogTitle>{name}</DialogTitle>
                                        <DialogDescription>
                                            {desc}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Button variant="ghost" size='sm' className="w-full" onClick={handleButtonClick}>
                                        verify on-chain <ShieldCheck className="mx-2" />
                                    </Button>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {links &&
                            <div className="flex flex-col-reverse gap-2">
                                {Object.keys(links).map((key) => (
                                    <a
                                        key={key}
                                        href={links[key].v}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold"
                                    >
                                        <Button variant="outline" className="w-full md:w-72" >
                                            {key.toLocaleUpperCase()}
                                        </Button>
                                    </a>
                                ))}
                            </div>
                        }

                        <div className="text-sm italic">
                            <span className="font-bold">Mint Height Block:</span> {dmint.mint_height === 0 ? 'OPEN' : dmint.mint_height}
                        </div>

                        <div className="text-sm italic">
                            {
                                legal.terms && (
                                    <Dialog>
                                        <DialogTrigger className="hover:underline">
                                            License & Terms
                                        </DialogTrigger>
                                        <DialogContent className="max-w-[90%] max-h-[70%] overflow-auto  md:max-w-fit rounded-xl">
                                            <DialogHeader className="text-start">
                                                <DialogTitle> {legal.license}</DialogTitle>
                                                <DialogDescription>
                                                    {legal.terms}
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                )
                            }
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MetaData;
