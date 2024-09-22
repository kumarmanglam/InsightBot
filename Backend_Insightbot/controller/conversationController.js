
const { retrieveAnswer } = require('../utils/chatUtils');

// In Postman:
// {
//   "userId": "user_mongo_id",
//   "pdfId": "pdf_mongo_id",
//   "userRole": "user",
//   "query": "Your question here"
// }
const conversation = async (req, res) => {
    const { userId, pdfId, userRole, query } = req.body;

    if (!userId || !pdfId || !query) {
        return res.status(400).send('User ID, PDF ID, and query are required.');
    }

    try {
        // let { chatHistory } = req.body;

        // const historyContext = chatHistory.chat_history.map(entry => `Human: ${entry.human}\nAI: ${entry.ai}`);

        let historyContext = [];

        const answer = await retrieveAnswer(query, historyContext, pdfId);

        res.json({ answer });
    } catch (error) {
        console.error(`Error during conversation: ${error.message}`);
        res.status(500).send('An error occurred during the conversation.');
    }
};

module.exports = { conversation };
