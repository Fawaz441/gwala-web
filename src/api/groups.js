import gwalaAxios from "./axios";

const groupsAPI = {
    getGroupDetails: groupId => gwalaAxios.get(`/user/group/getWebGroup/${groupId}`),
    addReport: payload => gwalaAxios.post('/user/group/AddReport', payload)
}

export default groupsAPI