const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImages = async (text) => {
  const response = await openai.createImage({
    prompt: `${text}`,
    n: 1,
    size: "1024x1024",
  });

  return response.data;
};

module.exports = { generateImages };
