import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_URL : import.meta.env.NEXT_PUBLIC_SUPABASE_URL) || '';
const supabaseAnonKey =
  (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) || '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabaseBrowser: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseServer: SupabaseClient = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default supabaseBrowser;
