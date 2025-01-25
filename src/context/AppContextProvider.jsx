import { useState } from "react";
import { AppContext } from "./AppContext"

const AppContextProvider = ({children}) => {

    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState("/home")
    const [showMore, setShowMore] = useState(false)

    const toggleOpen = () => setOpen(!open);

    const handleCurrentPage = (path) => {
        if (path == "/more")
            setShowMore(!showMore)
        else if (currentPage !== path)
            setCurrentPage(path)
    }

    return (
        <AppContext.Provider value={{ open, toggleOpen, currentPage, handleCurrentPage, showMore }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;