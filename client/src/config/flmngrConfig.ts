// flmngrConfig.ts
import Flmngr from "flmngr";

const flmngrConfig = {
  apiKey: import.meta.env.VITE_FLMNGR_API_KEY,
  urlFileManager: `${import.meta.env.VITE_SERVER_URL}/flmngr`,
  urlFiles: `${import.meta.env.VITE_SERVER_URL}/uploads`,
};

  Flmngr.load(flmngrConfig);

export  {flmngrConfig};
