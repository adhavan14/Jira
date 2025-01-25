import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { useAppContext } from "../context/AppContext";
import { Content, PageContainer } from "./HomePage.style";

const SprintPage = () => {

    const {open, toggleOpen} = useAppContext();

    return (
        <PageContainer>
            <Header toggleOpen={toggleOpen}></Header>
            <Content>
                <Sidebar open={open}></Sidebar>
            </Content>
            
        </PageContainer>
    )
}

export default SprintPage