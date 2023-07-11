import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * run method
 */
export const run = async () => {

  // 最小限のchainを構成する。

  // プロンプトの作成
  const prompt = new PromptTemplate({
    inputVariables: ["product"],
    template: "カラフルな{product}を作る会社の良い名前を考えてください。",
  });
  // プロンプトを作成
  const output = await prompt.format({ product: "靴下" });
  console.log(output);

  const model = new OpenAI({ 
    openAIApiKey: OPENAI_API_KEY
  });
  // プロンプトを作成して実行
  const res = await model.call(output);
  console.log("res:", res);
};

run();
