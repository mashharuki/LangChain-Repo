import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import readline from "readline";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

//会話記録保持のため関数の外出し
const model = new OpenAI({
  openAIApiKey: OPENAI_API_KEY
});
const memory = new BufferMemory();
const chain = new ConversationChain({ 
  llm: model, 
  memory: memory 
});

/**
 * APIをcallするためのメソッド
 * @param input 任意の文字列
 */
const run = async (input: string) => {
  const res = await chain.call({ input: input });
  console.log({ res });
};

//標準入出力の定義
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//入力の待機関数の定義
const waitForUserInput = () => {
  rl.question("あなたの入力を待っています: ", (input) => {
    // After processing the input, wait for the next one
    // コンソールに入力された文字列を引数にしてrunメソッドを呼び出す。
    run(input).then(() => waitForUserInput()); 
  });
};

//会話の開始
waitForUserInput(); // Start the process
