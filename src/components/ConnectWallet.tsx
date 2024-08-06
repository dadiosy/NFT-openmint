"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const ConnectButton = (props: any) => {
  return <Button {...props} />;
};

const ConnectWallet = () => {
  const [connectedAddress, setConnectedAddress] = React.useState<string | null>(null);
  const { toast } = useToast();

  const handleConnect = async () => {
    // @ts-ignore
    if (typeof window?.wizz !== "undefined") {
      console.log("Wizz Wallet is installed!");
      try {
        // @ts-ignore
        let accounts = await window?.wizz.requestAccounts();
        const connectedAddress = accounts[0];
        setConnectedAddress(connectedAddress);
        console.log("connect success", connectedAddress);
        toast({
          title: "Successfully",
          description: `Connected to ${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}.`,
        });
      } catch (e) {
        console.log("connect failed");
        setConnectedAddress(null);
        toast({
          title: "Connection Failed",
          description: "There was a problem connecting to your wallet.",
        });
      }
    } else {
      console.log("Wizz Wallet is not installed");
      setConnectedAddress(null);
      toast({
        title: "Wizz Wallet Not Detected",
        variant: "destructive",
        description: "Please install Wizz Wallet to connect.",
        action: <ToastAction altText="Download">
          <a href="https://wizzwallet.io/">Get Wizz Wallet</a>
        </ToastAction>,
      });
    }
  };

  const disconnectWallet = () => {
    setConnectedAddress(null);
    toast({
      title: "Disconnected",
      description: "You have disconnected your wallet.",
    });
  };

  return (
    <ConnectButton className="" onClick={connectedAddress ? disconnectWallet : handleConnect}>
      {connectedAddress
        ? `${connectedAddress.slice(0, 6)}...${connectedAddress.slice(-4)}`
        : "Connect"}
    </ConnectButton>
  );
};

export default ConnectWallet;
