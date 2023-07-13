import { NextRequest, NextResponse } from 'next/server'
import { PineconeClient } from '@pinecone-database/pinecone'
import {
  queryPineconeVectorStoreAndQueryLLM,
} from '../../../utils'
import { indexName } from '../../../config'

const {
  REACT_APP_PINECONE_API_KEY,
  REACT_APP_PINECONE_ENVIRONMENT
} = process.env;

/**
 * POST function
 * @param req 
 * @returns 
 */
export async function POST(req: NextRequest) {
  const body = await req.json()
  const client = new PineconeClient()

  await client.init({
    apiKey: REACT_APP_PINECONE_API_KEY || '',
    environment: REACT_APP_PINECONE_ENVIRONMENT || ''
  })

  const text = await queryPineconeVectorStoreAndQueryLLM(client, indexName, body)

  return NextResponse.json({
    data: text
  })
}