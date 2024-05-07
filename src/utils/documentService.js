import fetch from 'node-fetch';
import fs from 'fs';

const documentService= async(url)=> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download image: ${response.statusText}`);
        }
        const buffer = await response.buffer();
        const saveDirectory = '../../images';
        if (!fs.existsSync(saveDirectory)) {
            fs.mkdirSync(saveDirectory, { recursive: true });
        }
        fs.writeFile(saveDirectory, buffer, () => {
            console.log(`Image saved as '${saveDirectory}'`);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

export default documentService;
