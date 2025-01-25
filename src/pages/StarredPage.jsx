import { useEffect, useState } from "react"
import { getStarredSummaries } from "../service/JiraService"
import { Content, PaddedIconContainer, PageContainer, StarredContentWrapper } from "./HomePage.style"
import Header from "../component/Header"
import { useAppContext } from "../context/AppContext"
import Sidebar from "../component/Sidebar"
import { Button, Card, CardContent, Checkbox, Typography } from "@mui/material"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { formatDate } from "../utils/util"

const StarredPage = () => {

    const {open, toggleOpen} = useAppContext();
    const [starredSummaries, setStarredSummaries] = useState([])

    const fetchStarredSummaries = async () => {
        const response = await getStarredSummaries()
        console.log(response)
        setStarredSummaries(response)
    }

    useEffect(() => {
        fetchStarredSummaries()
    }, [])


    return (
        <PageContainer>
            <Header toggleOpen={toggleOpen}></Header>
            <Content>
                <Sidebar open={open}></Sidebar>
                <StarredContentWrapper open={open}>
                    <PaddedIconContainer>
                        <Checkbox sx={{color:'#004add', '&.Mui-checked' : {color:'#004add'}}}></Checkbox>
                        <Button disabled sx={{minWidth:'40px', borderRadius:'10px', color:'#004add'}}>
                            <DeleteOutlinedIcon></DeleteOutlinedIcon>
                        </Button>
                        <Button sx={{minWidth:'40px', borderRadius:'10px', color:'#004add'}}>
                            <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
                        </Button>
                    </PaddedIconContainer>
                    {
                        starredSummaries.map((summary) => {
                            return <Card key={summary.id} 
                            sx={{marginTop:'2px', 
                                borderRadius:'0px 10px 10px 0px',
                                width:'98%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
                                '&:hover': {
                                    backgroundColor:'#f1f2f3',
                                    cursor : 'pointer'
                                }}}>
                                <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Checkbox sx={{color:'#004add', '&.Mui-checked' : {color:'#004add'}}}></Checkbox>
                                    <Typography sx={{paddingX:'20px'}}>{summary.name}</Typography>
                                    <Typography sx={{flex:'1'}}>{summary.content.slice(0,130)}</Typography>
                                    <Typography sx={{paddingX:'20px'}}>{formatDate(summary.createdAt)}</Typography>
                                </CardContent>
                            </Card>
                        })
                    }
                </StarredContentWrapper>
            </Content>
        </PageContainer>
    )
}

export default StarredPage