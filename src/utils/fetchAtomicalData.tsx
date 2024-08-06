
export const fetchAtomicalsData = async (variable: string): Promise<any> => {
    try {
        const params = JSON.stringify([variable]);
        const response = await fetch(`https://ep.wizz.cash/proxy/blockchain.atomicals.get_state?params=${encodeURIComponent(params)}`);
        const data = await response.json();
        return data.response.result;
    } catch (error) {
        console.error("Error fetching Atomicals data:", error);
        return null;
    }
};
