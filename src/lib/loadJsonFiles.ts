import fs from 'fs';
import path from 'path';
import { INFTModal } from '@/components/NFTCard';

export function loadJsonFiles(): INFTModal[] {
    const jsonDirectory = path.join(process.cwd(), 'jsons');
    const fileNames = fs.readdirSync(jsonDirectory);
    const jsonFiles: INFTModal[] = [];

    fileNames.forEach((fileName) => {
        if (fileName.endsWith('.json')) {
            const filePath = path.join(jsonDirectory, fileName);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const jsonIndex = parseInt(fileName.replace('.json', ''), 10) - 1;
            jsonFiles[jsonIndex] = JSON.parse(fileContent);
        }
    });

    return jsonFiles;
}