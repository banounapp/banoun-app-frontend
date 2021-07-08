
import { useEffect } from "react";
//to scroll to top when component mount 

export const useScrollToTop = ()=>{

    useEffect(()=>{
    
        window.scrollTo(0, 0);
      })
}