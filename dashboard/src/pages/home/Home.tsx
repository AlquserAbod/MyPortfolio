import { Button } from "@mui/material";
import Flmngr from "flmngr";

const Home = () => {

  return (
    <div>
          <Button 
            onClick={() => {

                Flmngr.open({         
                    isMultiple: false,
                    onFinish: (files) => {
                      console.log("User picked:");
                      console.log(files);
                    },
                    
                });
            }}
        >
            Open file manager
        </Button>
    </div>
  )
}

export default Home
