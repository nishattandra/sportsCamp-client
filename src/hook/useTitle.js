import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} | SPORT'S CAMP`;
    }, [title])
}

export default useTitle;