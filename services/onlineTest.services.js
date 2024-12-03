import OnlineTest from "../models/onlineTest.model.js"

const onlineTestUpload = async(requestBody) => {
    let result = {}
    await OnlineTest.create({
        course: requestBody.course,
        level: requestBody.level,
        question: requestBody.question,
        answer: requestBody.answer
    })
    return result = {statusCode: 200,message: 'Question updated successfully!!'}
}

const getOnlineTestData = async(requestBody) => {
    let result = [];
    result = await OnlineTest.find({active: true});
    return result;
}

const deleteQuestion = async(req) => {
    let result = {};    
    await OnlineTest.updateOne({_id: req.query.id},{$set: {active: false}})
    result = {statusCode: 200,message: "Question deleted successfully!!"}
    return result;
}

const getOnlineTests = async(requestBody) => {
    let result = {};    
    result = await OnlineTest.find({level: requestBody.params.level,course: requestBody.params.course})
    return result; 
}
export default {onlineTestUpload,getOnlineTestData,deleteQuestion,getOnlineTests}