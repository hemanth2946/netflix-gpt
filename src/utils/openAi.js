import OpenAI from 'openai';

const openai = new OpenAI({
    // apiKey: NEW_OPENAI_KEY, // This is the default and can be omitted
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
});

export default openai;