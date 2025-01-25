import { useEffect, useState } from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { CardWrapper, Content, PageContainer } from "./HomePage.style";
import { Card, CardContent } from "@mui/material";
import StorySelect from "../component/StorySelect";
import WordLengthSlider from "./summary/WordLengthSlider";
import GenerateButton from "./summary/GenerateButton";
import SummaryContent from "./summary/SummaryContent";
import { fetchListOfCommits, getListOfProjects, getListOfStories, getSummary, updateSummaryIsStarred } from "../service/JiraService";
import ProjectSelect from "../component/ProjectSelect";
import { useAppContext } from "../context/AppContext";
import { type } from "../utils/Constant";

const StoryPage = () => {

    const {open, toggleOpen} = useAppContext();
    const [project, setProject] = useState("")
    const [projects, setProjects] = useState([])
    const [stories, setStories] = useState([])
    const [story, setStory] = useState("")
    const [summary, setSummary] = useState("")
    const [commits, setCommits] = useState([])
    const [wordLength, setWordLength] = useState(200)
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleProject = (event) => {
        setProject(event.target.value)
    }

    const handleStory = (event) => {
        setStory(event.target.value)
    }

    const handlWordLength = (event) => {
        console.log(event)
        setWordLength(event.target.value)
    }

    const fetchListOfProjects = async() => {
        const projects = await getListOfProjects()
        setProjects(projects)
    }

    const fetchListOfStories = async() => {
        const stories = await getListOfStories(project)
        setStories(stories)
    }

    const getCommits = async () => {
        setIsButtonClicked(true)
        const commits = await fetchListOfCommits(story)
        setCommits(commits)
    }

    const getSummaryByCommits = async () => {

        const summary = await getSummary(commits, wordLength, story, type.story)
        setSummary(summary)
    }


    useEffect(() => {
        fetchListOfProjects()
    }, [])

    useEffect(() => {
        project && fetchListOfStories()
    }, [project])

    useEffect(() => {
        commits && commits.length > 0 && getSummaryByCommits()
    }, [commits])

    return (
        <PageContainer>
            <Header toggleOpen={toggleOpen}></Header>
            <Content>
                <Sidebar open={open}></Sidebar>
                <CardWrapper open={open}>
                    <Card sx={{marginTop:'20px', borderRadius: '20px', width:'95%', display:'flex', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)'}}>
                        <CardContent sx={{display:'flex', width:'100%', justifyContent:'space-around', alignItems:'center'}}>
                            <ProjectSelect projects={projects} project={project} handleProject={handleProject}></ProjectSelect>
                            <StorySelect story={story} stories={stories} handleStoryChange={handleStory}></StorySelect>
                            <WordLengthSlider handleWordLength={handlWordLength}></WordLengthSlider>
                            <GenerateButton handleSummary={getCommits}></GenerateButton>
                        </CardContent>
                    </Card>
                    <SummaryContent summary={summary} isButtonClicked={isButtonClicked}></SummaryContent>
                </CardWrapper>
            </Content>
            
        </PageContainer>
    )

}

export default StoryPage