import React from "react";
import { Separator } from "../ui/separator";
import { Blend, FolderGit, PiggyBank } from "lucide-react";

const Footer = () => {

    return (
        <div className="w-full">
            <Separator />
            <div className="flex items-center justify-between px-2 md:px-4 py-3">
                <div className="flex flex-row items-center justify-center gap-4 ">
                    <h1 className="text-base text-secondary-foreground font-bold">
                        OPEN
                        <span className="text-primary ">MINT</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/lamachina/openmint" target="_blank" className="hover:text-primary">
                        <FolderGit />
                    </a>
                    <a href="https://twitter.com/LaMachina777" target="_blank" className="hover:text-primary">
                        <Blend />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Footer;
