import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { useAppContext } from "../context/AppContext"
import { PageContainer } from "./HomePage.style";

const HomePage = () => {

    const {open, toggleOpen} = useAppContext();

    return (
        <PageContainer>
            <Header toggleOpen={toggleOpen}></Header>
            <Sidebar open={open}></Sidebar>
        </PageContainer>
    )
}

export default HomePage