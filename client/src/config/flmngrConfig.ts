// flmngrConfig.ts
import Flmngr from "flmngr";

const flmngrConfig = {
  apiKey: "M8cDnFCI",
  urlFileManager: 'http://localhost:5000/flmngr',
  urlFiles: 'http://localhost:5000/uploads',

};

const runFlmngrLoad = () => {
    Flmngr.load(flmngrConfig);
}

export  {runFlmngrLoad,flmngrConfig};
