import { OpenAI } from "langchain/llms/openai";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * run method
 */
export const run = async () => {
  // create OpenAI Object
  const model = new OpenAI({ 
    openAIApiKey: OPENAI_API_KEY
  });

  // call
  const res = await model.call(
    "カラフルな靴下を作る会社の良い名前を考えてください。"
  );
  console.log("res:", res);
};

run();
