// flmngrConfig.ts
import Flmngr from "flmngr";

interface FlmngrConfig {
  apiKey: string;
  urlFileManager: string;
  urlFiles: string;
  hookBeforeUpload?: (files: File[]) => File[];
}

const flmngrConfig: FlmngrConfig = {
  apiKey: "M8cDnFCI",
  urlFileManager: 'http://localhost:5000/flmngr',
  urlFiles: 'http://localhost:5000/uploads',
  hookBeforeUpload: (files) => {
    console.log("its working hook befor upload");

    return files.map((file, index) => {
      const ext = file.name.split('.').pop(); // Get file extension
      const newFileName = `${index + 1}.${ext}`;
      return new File([file], newFileName, { type: file.type });
    });
  }, 
};

const runFlmngrLoad = () => {
    Flmngr.load(flmngrConfig);
}

export  {runFlmngrLoad,flmngrConfig};
