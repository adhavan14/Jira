import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { IconWrapper, OutputWrapper } from "../HomePage.style";
import SummaryActions from "./SummaryActions";
import jsPDF from "jspdf";
import { updateSummaryIsStarred } from "../../service/JiraService";
import { useState } from "react";

const SummaryContent = ({summary, isButtonClicked}) => {

    const [isStarred, setIsStarred] = useState(false)

    const generatePdf = (content) => {
        const doc = new jsPDF();
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(content, 10, 20, { maxWidth: 180 });

        doc.save("summary.pdf");
    }

    const starredSummary = async (id) => {
            const response = await updateSummaryIsStarred(id)
            setIsStarred(response)
            console.log(response)
    }

    return (
        <Card sx={{width:'95%', height:'70%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)', borderRadius:'20px'}}>
            <CardContent sx={{display:'flex', flexDirection:'column', height:'90%', justifyContent:'space-around', alignItems:'center'}}>
                <IconWrapper>
                    <Typography sx={{fontSize:'20px', fontFamily:'serif'}}>SUMMARY</Typography>
                    <SummaryActions generatePdf={() => generatePdf(summary?.content)} handleStarred={() => starredSummary(summary.id)} isStarred={isStarred}></SummaryActions>
                </IconWrapper>
                <Card sx={{width:'95%', height:'100%', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)', borderRadius:'20px'}}>
                    {isButtonClicked && summary?.content?.length == 0 &&<CircularProgress sx={{ 
                        position: "absolute", 
                        top: "50%", 
                        left: "50%", 
                        transform: "translate(-50%, -50%)" 
            }} ></CircularProgress>}
                    <Typography sx={{padding:'15px',overflowWrap: "break-word"}}>{summary?.content}</Typography>
                </Card>
            </CardContent>
        </Card>
    )
}

export default SummaryContent;