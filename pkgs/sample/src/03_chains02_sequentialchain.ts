import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain, SimpleSequentialChain } from "langchain/chains";

require("dotenv").config();

const {
  OPENAI_API_KEY
} = process.env;

/**
 * run method
 */
export const run = async () => {
  //1つ目のChain
  const outlinePromptTemplate = new PromptTemplate({
    inputVariables: ["title"],
    template: `あなたは脚本家です。劇のタイトルが与えられたら、そのタイトルの概要を書くのがあなたの仕事です。
 
    タイトル: {title}
    概要:`,
  });

  const outlineModel = new OpenAI({ 
    openAIApiKey: OPENAI_API_KEY
  });
  // LLMChainを作成する
  const outlineChain = new LLMChain({
    llm: outlineModel,
    prompt: outlinePromptTemplate,
  });

  //２つ目のChain
  const reviewPromptTemplate = new PromptTemplate({
    inputVariables: ["outline"],
    template: `あなたはニューヨーク・タイムズの批評家です。劇のあらすじを聞いて、その劇の批評を書くのがあなたの仕事です。
 
    劇の概要: {outline}
    批評:`,
  });

  const reviewModel = new OpenAI({ 
    openAIApiKey: OPENAI_API_KEY
  });
  // LLMChainを作成する
  const reviewChain = new LLMChain({
    llm: reviewModel,
    prompt: reviewPromptTemplate,
  });

  // LLMChainを連続して実行する。
  const overallChain = new SimpleSequentialChain({
    chains: [outlineChain, reviewChain],
    verbose: true,
  });

  const review = await overallChain.run("夕暮れ時のビーチで起こる悲劇");
  console.log("実行結果：", review);
};

run();
