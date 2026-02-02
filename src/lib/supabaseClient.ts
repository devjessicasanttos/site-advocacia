import { createClient } from '@supabase/supabase-js';

// Verifique se a URL termina com .co e não tem espaços
const supabaseUrl = 'https://hasgraladzwrdtreahfd.supabase.co';

// Certifique-se de que colou a chave do print yy.png AQUI dentro das aspas
const supabaseAnonKey = 'sb_publishable_gDP4AG7e6C4utKJeJx_PRg_DJ_3DNdo'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);