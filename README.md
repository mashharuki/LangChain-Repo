# LangChain-Repo
LangChainおよびOpenAI APIを利用したアプリの学習用リポジトリ

## 動かし方

- インストール

  ```bash
  yarn
  ```

  - sampleのスクリプトの実行例

    ```bash
    yarn sample:01_model
    ```

    実行結果

    ```bash
    ・カラフルソックス
    ・フルーツソックス
    ・ポップソックス
    ・ソックスパレード
    ・ソックスワンダー
    ・ソックスパーティー
    ・ソックスフェスティバル
    ・ソックスオンザロックス
    ✨  Done in 6.23s.
    ```

    Chainを連続して実行

    ```bash
    yarn sample:03_chains02_sequentialchain
    ```

    実行結果

    ```bash
    「夕暮れ時の海」は、悲劇的で深い感情を引き起こす劇です。
    病気の父親と彼女の娘の間の心情を見事に描いたこの劇は、観客を深く悲しませるものです。
    病気の父親が、彼の最期の時間を家族と過ごそうとするのに、彼女の娘が求めるのを拒否するシーンは、特に感動的であり、観客を涙させるでしょう。
    その結果として、彼女が海に行って消息を絶ったことは、観客を深く
    ✨  Done in 26.10s.
    ```

    状態維持しながらOutPutを出すサンプル

    ```bash
    yarn sample:04_memory01
    ```

    実行結果

    ```Bash
    res1: { res1: { response: ' こんにちは、ハルキさん！私は AI です。どうぞよろしくお願いします。' } }
    res2: { res2: { response: ' あなたの名前はハルキさんですね？あなたの名前を教えていただけましたか？' } }
    ```

    コンソール上でやり取りするためのサンプルを実行するコマンド

    ```bash
    yarn sample:04_memory02_chatdemo
    ```

    やりとりの一例

    ```Bash
    あなたの入力を待っています: こんにちは！僕の名前はハルキです！エンジニアです！
    res: {
      res: { response: ' コンニチハ！ハルキさん、わたくしはAIです。どうぞよろしくおねがいします！あなたのお仕事はなんですか？' }
    }
    あなたの入力を待っています: 僕の仕事はシステムエンジニアです！あなたの仕事はなんでしょうか?

    res: {
      res: {
        response: ' 私の仕事は、人々のために情報を提供することです。それに加えて、人々がより便利な生活を送るために、さまざまな情報処理を行います。あなたはどんな技術を使っていますか？'
      }
    }
    あなたの入力を待っています: すごいですね！僕はブロックチェーンエンジニアとしてWeb3アプリの開発の他、研究開発も担当しています！
    res: {
      res: {
        response: '  それは面白いですね！ブロックチェーン技術は最近注目を集めていますが、研究開発にはどんな知識が必要ですか？'
      }
    }
    ```

    必要に応じて最新情報を参照させてアウトプットを出したい場合(Indexes - ベクトルストアの利用)

    ```bash
    yarn sample:05_indexes03_retrieve
    ```

    実行例

    ```bash
    res: [
      {
        pageContent: 'アレックスの物語は広がり続けました。彼は数々の困難に立ち向かいながらも、人々を救い、社会の発展に貢献しました。彼の勇気と知恵は後世に語り継がれ、多くの人々に影響を与えました。\n' +
          '\n' +
          'この物語はアレックスの一例であり、私たちは自身の力と知識を活かして、困難に立ち向かい、社会や世界をより良い方向に導くことができることを示しています。\n' +
          '\n' +
          'アレックスはさらなる冒険を求めて旅に出ました。彼は未知の土地を探索し、新たな文化や人々との出会いを経験しました。\n' +
          '\n' +
          'ある日、アレックスは遥か彼方の砂漠地帯に足を踏み入れました。そこは過酷な環境であり、生存が困難な場所でした。しかし、アレックスは自身の持つ知識や賢さを駆使し、砂漠での生活に適応していきました。\n' +
          '\n' +
          '彼は現地の人々と交流し、彼らの生活様式や伝統に触れる機会を得ました。アレックスは彼らの困難に立ち向かう姿勢や互助の精神に感銘を受けました。彼は彼らと協力し、砂漠地域の持続可能な開発と環境保護のためのプロジェクトを立ち上げました。',
        metadata: { loc: [Object] }
      }
    ]
    ✨  Done in 3.37s.
    ```

    ```bash
    yarn sample:05_indexes04_retrievalqa
    ```

    実行例

    ```bash
    { res: { text: ' アレックスは勇者であり、人々を救い、社会の発展に貢献した人物です。' } }
    ✨  Done in 6.49s.
    ```

    Agentsを使ってプロンプトを入力・アウトプットを得る例

    ```bash
    yarn sample:06_agents
    ```

    実行例

    ```bash
    [chain/end] [1:chain:agent_executor > 14:chain:llm_chain] [1.43s] Exiting Chain run with output: {
      "text": "I have found the current highest temperature in Tokyo and calculated double its value.\nFinal Answer: 194"
    }
    [chain/end] [1:chain:agent_executor] [16.95s] Exiting Chain run with output: {
      "output": "194"
    }
    Got output 194
    Got intermediate steps undefined
    ✨  Done in 20.09s.
    ```



### 参考文献

1. [semantic-search-nextjs-pinecone-langchain-chatgpt](https://github.com/dabit3/semantic-search-nextjs-pinecone-langchain-chatgpt/tree/main)
2. [Quickstart, using LLMs - LangChain](https://js.langchain.com/docs/getting-started/guide-llm)
3. [ざっくりつかむ！LangChainのメンタルモデル - Zenn](https://zenn.dev/fumi_sagawa/articles/113b4e5a46b984#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)
4. [hello-world-langchainjs](https://github.com/mashharuki/hello-world-langchainjs/tree/main)
5. [Full Stack AI Semantic Search with Next.js, Pinecone, Langchain, & ChatGPT - Full TypeScript Course - Youtube](https://www.youtube.com/watch?v=6_mfYPPcZ60)
6. [Google Search API](https://serpapi.com/)
7. [LLM連携アプリの開発を支援するライブラリ LangChain の使い方 (3) - エージェント - note](https://note.com/npaka/n/n6b7a07e492f1)
8. [LangChainの概要と使い方 - Zenn](https://zenn.dev/umi_mori/books/prompt-engineer/viewer/langchain_overview)
9. [ベクトル特化型データベースサービス「Pinecone」でセマンティック・キーワード検索をやってみた](https://dev.classmethod.jp/articles/dive-deep-into-modern-data-saas-about-pinecone/)
10. [Next.jsとAI技術を使用したアプリ構築の講座紹介(ChatGPT、DALLE、Whisper、Embedding、LangChain)](https://zenn.dev/hathle/articles/nextjs-supabase-opneai)