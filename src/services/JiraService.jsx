import axios from "axios";

export const fetchListOfProjects = async () => {

    const url = "http://localhost:8080/jira/projects"
    return await axios.get(url)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}

export const fetchListOfCards = async (project) => {

    const url = "http://localhost:8080/jira/cards"
    const params = { params : {
            project : project
        }}
    return await axios.get(url, params)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
        })

}

export const fetchDevelopmentDetails = async (issueId) => {

    const url = "http://localhost:8080/jira/dev"
    const params = {
        params: {
            issueId : issueId,
            applicationType : "GitHub",
            dataType : "branch"
        }
    }

    return axios.get(url, params)
        .then(response => response.data)
        .catch(error => console.log(error))
}