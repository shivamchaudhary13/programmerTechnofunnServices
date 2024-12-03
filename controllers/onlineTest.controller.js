import onlineTestService from '../services/onlineTest.services.js';
const onlineTest = async(req,res) => {
    const result = await onlineTestService.onlineTestUpload(req.body);
    res.send(result)
}

const getOnlineTestData = async(req,res) => {
    const result = await onlineTestService.getOnlineTestData(req);
    res.send(result)
}

const deleteQuestion = async(req,res) => {
    const result = await onlineTestService.deleteQuestion(req)
    res.send(result)
}

const getOnlineTests = async(req,res) => {
    const result = await onlineTestService.getOnlineTests(req)
    res.send(result);
}

export default {onlineTest,getOnlineTestData,deleteQuestion,getOnlineTests}