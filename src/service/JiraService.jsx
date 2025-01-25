import axios from "axios"

export const getListOfProjects = async () => {
    const url = "http://localhost:8080/jira/projects"
    return await axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error))
}

export const getListOfStories = async (project) => {
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


export const fetchListOfCommits = async (issueId) => {

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


export const getSummary = async (commits, wordLength, name, type) => {

    const url = "http://localhost:8080/gpt/summary"

    const body = {
        "commits" : commits,
        "wordLength" : wordLength,
        "name" : name,
        "type" : type
    }

    return axios.post(url, body)
        .then(response => response.data)
        .catch(error => console.log(error))
}

export const updateSummaryIsStarred = async (id) => {

    const url = "http://localhost:8080/summary/action/isStarred?id=" + id

    return axios.post(url)
        .then(response => response.data)
        .catch(error => console.log(error))
}

export const getStarredSummaries = async () => {

    const url = "http://localhost:8080/summary/starred"
    return await axios.get(url)
        .then(response => response.data)
        .catch(error => console.log(error))
}