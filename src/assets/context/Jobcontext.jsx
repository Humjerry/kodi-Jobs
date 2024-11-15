import React, {createContext, useState} from "react";

const JobContext = createContext();

const JobProvider= ({children})=>{
    const [job, setJob]= react.useContext(null);
    const addJob = (selectedJob={});
    return(
       <JobContext.JobProvider value={{job}}> 
       {children}
       </JobContext.JobProvider> 
    )
}
export {JobContext,JobProvider};