import React from "react";
import ConnectWallet from "../ConnectWallet";
import { LightMode } from "../LightMode";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Footer from "../Footer/Footer";

const Header = () => {

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2 md:px-4 py-3">

        <Dialog>
          <DialogTrigger>
            <div className="flex flex-row items-center justify-center gap-4 ">
              <h1 className="text-2xl text-primary font-bold">
                OPEN
                <span className="text-secondary-foreground">MINT</span>
              </h1>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[90%] md:max-w-fit pb-1">
            <DialogHeader className="gap-2 text-start ">
              <DialogTitle>Thanks for your support</DialogTitle>
              <DialogDescription>
                <span className="font-semibold hover:text-primary">OPENMINT</span>{' '}is a free and open-source project designed to help creators on Bitcoin.
                <br></br>
                By allowing them to host their own
                {' '}<span className="font-semibold hover:text-primary">decentralized mint website</span>,
                this eliminates the need to depend on traditional marketplaces and launchpads, ensuring
                {' '}<span className="font-semibold hover:text-primary">true decentralization</span>.

                <br></br>
                <br></br>
                We firmly believe in the potential of the Bitcoin and the Atomicals protocols to create opportunities for all.
                <br></br>
                <br></br>
                <span className="text-sm italic">
                  If you appreciate this project, just s/o <a className="hover:text-primary" href="https://x.com/LaMachina777" target="_blank">LaMachina</a>
                </span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Footer />
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-2">
          <LightMode />
          <ConnectWallet />
        </div>

      </div>
    </div>
  );
};

export default Header;
