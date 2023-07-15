'use client'

import { createContext, useContext, useState } from 'react'
import { createClient } from '../../../utils/supabase-browser'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../../utils/database.types'

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

// コンテキストを作成する  
const Context = createContext<SupabaseContext>(null!);
// Supabaseクライアント用のメソッド
export const useSupabase = () => useContext(Context);

/**
 * SupabaseProvider Component
 * @param param0 
 * @returns 
 */
export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient())

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

