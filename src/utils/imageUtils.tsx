// Converts a hexadecimal string to a Base64 data URL
export const hexToBase64 = (hex: string): string => {
    // Ensure hex string is properly formatted
    if (hex.length % 2 !== 0) {
        throw new Error("Invalid hexadecimal string length");
    }

    // Convert hex string to a byte array
    const bytes = new Uint8Array(hex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

    // Convert byte array to binary string
    let binaryString = '';
    for (let i = 0; i < bytes.length; i++) {
        binaryString += String.fromCharCode(bytes[i]);
    }

    // Convert binary string to Base64
    const base64String = btoa(binaryString);

    // Return the Base64 data URL (adjust MIME type as needed)
    return `data:image/png;base64,${base64String}`;
};

// Fetch additional data based on the processed image hexadecimal
export const fetchAdditionalData = async (result: any): Promise<string | null> => {
    try {
        // Ensure result is defined
        if (!result || !result.state || !result.state.latest) {
            throw new Error("Invalid result structure");
        }

        let imageHex = result.state.latest.image;

        // Extract the portion before 'i0'
        let extractedValue = imageHex.split('i0')[0] + "i0";

        // Fetch additional data based on extracted value
        const finalResponse = await fetch(`https://urn.realmbullrun.com/urn/${extractedValue}`);
        const finalData = await finalResponse.json();

        // Find the key that is not 'args'
        const keys = Object.keys(finalData);
        const otherKey = keys.find(key => key !== 'args');
        if (otherKey) {
            console.log("Value of the other key:", finalData[otherKey]);
            const imageHex = finalData[otherKey]; // Assuming this is the hex string for the image
            const imageBase64 = hexToBase64(imageHex); // Convert hex to Base64 data URL
            return imageBase64;
        } else {
            console.log("No key other than 'args' found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching additional data:", error);
        return null;
    }
};
