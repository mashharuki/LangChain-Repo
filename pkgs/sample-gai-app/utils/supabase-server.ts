// Supabase Client
import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../utils/database.types'

/**
 * createClient method
 * @returns 
 */
export const createClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })