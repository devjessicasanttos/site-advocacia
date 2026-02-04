import { createClient } from '@supabase/supabase-js';

// O Vite substitui essas variáveis pelos valores do seu .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);