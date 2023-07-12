import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { VectorStore } from "langchain/dist/vectorstores/base";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * run method
 */
const run = async () => {
  const vectorStore = await HNSWLib.load("store", new OpenAIEmbeddings({
    openAIApiKey: OPENAI_API_KEY
  }));
  // アウトプットを得る。
  const result = await vectorStore.similaritySearch("アレックスの冒険について教えてください。", 1);
  console.log("res:", result);
};

run();
