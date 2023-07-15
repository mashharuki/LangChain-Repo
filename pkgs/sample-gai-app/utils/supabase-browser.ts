// Supabase Client
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'

/**
 * createClient method
 * @returns 
 */
export const createClient = () => createBrowserSupabaseClient<Database>()