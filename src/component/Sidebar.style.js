import { Drawer } from "@mui/material";
import styled from "styled-components";

export const SidebarContainer = styled.div`
   
`;

export const StyledDrawer = styled(Drawer)`
    margin-top: 64px; 
    z-index: 1200; 
    padding:10px;
    .MuiDrawer-paper {
        margin-top: 64px;
        box-shadow: none; 
        border: none; 
        width:150px;
        background-color : #ecf0fa;
        padding-right:10px;
    }
`;