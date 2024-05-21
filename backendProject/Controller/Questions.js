const getallquestions = async(req,res) => {
    res.status(200).json({msg : "i am getAllQuestions"});
};
const getallquestionsTesting = async(req,res) => {
    res.status(200).json({msg : "i am getAllQuestionsTesting"});
};

module.exports = {getallquestions,getallquestionsTesting};