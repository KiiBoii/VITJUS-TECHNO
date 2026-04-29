import { createClient } from '@supabase/supabase-js'

// Menggunakan URL dan Key yang Anda temukan tadi
const supabaseUrl = 'https://hvcoqvrocolzwennzcss.supabase.co'
const supabaseKey = 'sb_publishable_TVDzoZr2qmfU7De8z8qtbA_ldLKN5z4'

export const supabase = createClient(supabaseUrl, supabaseKey)