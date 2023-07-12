import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * run method
 */
export const run = async () => {
  const text = fs.readFileSync("materials/story_by_gpt.txt", "utf8");
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 500 });
  const docs = await textSplitter.createDocuments([text]);
  //ベクトルストアの作成
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings({
    openAIApiKey: OPENAI_API_KEY
  }));
  vectorStore.save("store");
};

run();
