import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

require("dotenv").config();

const {
  OPENAI_API_KEY,
  SERPAPI_API_KEY
} = process.env;

/**
 * run method
 */
export const run = async () => {
  const model = new ChatOpenAI({ 
    openAIApiKey: OPENAI_API_KEY
  });

  const tools = [new SerpAPI(SERPAPI_API_KEY), new Calculator()];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "chat-zero-shot-react-description",
    verbose: true,
  });
  console.log("エージェントが読み込まれました。");

  const input = `今日の東京の最高気温を摂氏で調べてください。またその数値を2倍した値はいくつですか？`;
  console.log(`次の処理を実行します："${input}"...`);
  // プロンプトを入力してアウトプットを出力させる。
  const result = await executor.call({ input });
  console.log(`Got output ${result.output}`);
  console.log(
    `Got intermediate steps ${JSON.stringify(
      result.intermediateSteps,
      null,
      2
    )}`
  );
};

run();
