import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * 
 */
export const run = async () => {
  const model = new OpenAI({
    openAIApiKey: OPENAI_API_KEY
  });
  // Memoryオブジェクトを生成
  const memory = new BufferMemory();
  // chainを作成
  const chain = new ConversationChain({ 
    llm: model, 
    memory: memory 
  });

  // 1回目
  const res1 = await chain.call({ input: "こんにちは！ ハルキです。" });
  console.log("res1:", { res1 });
  // 2回目
  const res2 = await chain.call({ input: "私の名前はなんでしょうか？" });
  console.log("res2:", { res2 });
};

run();
