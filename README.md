
# OpenMint

OpenMint is an open-source and free-to-use project that allows NFT creators on Bitcoin to host their own decentralized mint websites.
Participants can mint NFTs directly through the creator's platform without the need for third-party intermediaries such as launchpads or marketplaces.

Built with NextJS and TailwindCSS, this starter pack offers simplicity and efficiency for creators.

![App Screenshot](/public/1.png)

### 1. Clone the Repository

First, clone the OpenMint repository to your local machine:

```bash
git clone https://github.com/lamachina/openmint
```
    

### 2. Add Your Collection

Open the cloned project. Navigate to the "/collection" folder in the "/src" repository.
```bash
cd .\src\collections\
```
#### -> Add your NFT item.json files.

#### Remove the "delete-me.txt" file.

Push the latest change in your own repository.
```bash
git add .
git commit -m "Add my NFT collection"
git push origin main
```

### 3. Deploy on Vercel

Go to [Vercel](https://vercel.com) and import your project.

Deploy your project and set an environment variable:

`NEXT_PUBLIC_ATOMICALS_ID_CONTAINER` = 
`your collection container atomicals id`

# OPEN YOUR MINT NOW

If you have any questions or need support, [ask here](https://t.me/AtomicalsCommunity).