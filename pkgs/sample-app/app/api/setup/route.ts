import { NextResponse } from 'next/server'
import { PineconeClient } from '@pinecone-database/pinecone'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import {
  createPineconeIndex,
  updatePinecone
} from '../../../utils'
import { indexName } from '../../../config'

const {
  REACT_APP_PINECONE_API_KEY,
  REACT_APP_PINECONE_ENVIRONMENT
} = process.env;

export async function POST() {
  const loader = new DirectoryLoader('./documents', {
    ".txt": (path) => new TextLoader(path),
    ".md": (path) => new TextLoader(path),
    ".pdf": (path) => new PDFLoader(path)
  })

  const docs = await loader.load()
  const vectorDimensions = 1536

  const client = new PineconeClient()
  await client.init({
    apiKey: REACT_APP_PINECONE_API_KEY || '',
    environment: REACT_APP_PINECONE_ENVIRONMENT || ''
  })

  try {
    await createPineconeIndex(client, indexName, vectorDimensions)
    await updatePinecone(client, indexName, docs)
  } catch (err) {
    console.log('error: ', err)
  }

  return NextResponse.json({
    data: 'successfully created index and loaded data into pinecone...'
  })
}