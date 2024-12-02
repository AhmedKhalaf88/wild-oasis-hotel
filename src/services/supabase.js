import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nhdwwsrdxnsavyfxxxee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZHd3c3JkeG5zYXZ5Znh4eGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjU3MjQsImV4cCI6MjA0NzYwMTcyNH0.ny_1Kmn8pkias7b0-pDXMGczNHwkys68hy0zN6Qjz3I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
