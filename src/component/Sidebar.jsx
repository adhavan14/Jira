import { Button, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import ListIcon from '@mui/icons-material/List';
import CommitIcon from '@mui/icons-material/Commit';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { SidebarContainer, StyledDrawer } from "./Sidebar.style";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Sidebar = ({open}) => {

    const {currentPage, handleCurrentPage, showMore} = useAppContext()

    const navigate = useNavigate()

    useEffect(() => {
        navigate(currentPage)
    }, [currentPage])

    const moreOption = [
            {
                icon : <StarBorderOutlinedIcon/>,
                title : "Starred",
                path : "/starred"
            }
    ]
    

    const renderOption = () => {
       
        const options = [
            {
                icon : <HomeOutlinedIcon sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/>,
                title : "Home",
                path : "/home"
            },
            {
                icon : <EventRepeatIcon sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/>,
                title : "Sprint",
                path : "/sprint"
            },
            {
                icon : <FeaturedPlayListOutlinedIcon sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/>,
                title : "Feature",
                path : "/feature"
            },
            {
                icon : <ListIcon sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/>,
                title : "Story",
                path : "/story"
            },
            {
                icon : showMore ? 
                        <KeyboardArrowUpOutlinedIcon sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/> : 
                        <KeyboardArrowDownOutlinedIcon  sx={{fontSize:'20px', minWidth: '1px', color: 'black'}}/>,
                title : "More",
                path : "/more"
            }
        ]

        return (
            <List sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px', 
              }}>
                {options.map((option, index) => {
                    const isDefault = currentPage == option.path;
                    return <ListItem key={index} 
                    onClick = {() => handleCurrentPage(option.path)}
                    sx={{backgroundColor : isDefault ? '#d0dbf7' : 'transparent',
                        borderRadius : '0px 20px 20px 0px',
                        padding : '5px',
                        '&:hover': {
                        backgroundColor: !isDefault && '#e1e2e3', 
                        borderRadius:'0px 20px 20px 0px',
                        cursor:'pointer'
                        },}}>
                        <ListItemButton 
                        disableRipple
                        sx={{borderRadius: '10px', minWidth:'20px',paddingY:'0px', paddingRight:'0px', '&:hover': {
                            backgroundColor: 'transparent', 
                            cursor:'pointer',
                            transition:'none'
                            },}}>{option.icon}</ListItemButton>
                        <ListItemText sx={{fontSize:'20px', fontFamily:'serif'}}>{option.title}</ListItemText>
                    </ListItem>
                })}
                {
                    showMore && moreOption.map((option, index) => {
                        return <ListItem key={index} 
                    onClick = {() => handleCurrentPage(option.path)}
                    sx={{backgroundColor : 'transparent',
                        borderRadius : '0px 20px 20px 0px',
                        padding : '5px',
                        '&:hover': {
                        backgroundColor: '#e1e2e3', 
                        borderRadius:'0px 20px 20px 0px',
                        cursor:'pointer'
                        },}}>
                        <ListItemButton 
                        disableRipple
                        sx={{borderRadius: '10px', minWidth:'20px',paddingY:'0px', paddingRight:'0px', '&:hover': {
                            backgroundColor: 'transparent', 
                            cursor:'pointer',
                            transition:'none'
                            },}}>{option.icon}</ListItemButton>
                        <ListItemText sx={{fontSize:'20px', fontFamily:'serif'}}>{option.title}</ListItemText>
                    </ListItem>
                    })
                }
            </List>
        )
    }

    return ( 
        <SidebarContainer>
            <StyledDrawer 
            open={open}
            variant="persistent"
            anchor="left"
            >
                {renderOption()}
            </StyledDrawer>
        </SidebarContainer>
    )
}

export default Sidebar;