import { Card } from "@mui/material";
import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width : 100vw;
`;

export const Content = styled.div`
  display: flex;
  width:100%;
  margin-top: 64px; 
  flex: 1;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
    background-color:white;
    margin-left: ${(props) => (props.open ? '160px' : '0px')};
    transition: margin-left 0.2s ease-out;
    flex: 1;
    border-radius:20px;
    margin-right:30px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center
`;

export const StarredContentWrapper = styled.div`
    background-color:white;
    margin-left: ${(props) => (props.open ? '160px' : '0px')};
    transition: margin-left 0.2s ease-out;
    flex: 1;
    border-radius:20px;
    margin-right:30px;
    display:flex;
    flex-direction:column;
`;

export const IconContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:120px;
`;

export const PaddedIconContainer = styled(IconContainer)`
    padding-left:16px;
    padding-top:20px;
`;

export const IconWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px;
    width:95%;
`;

export const OutputWrapper = styled(Card)`
    width: 95%;
    height: 400px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: relative;
`;
