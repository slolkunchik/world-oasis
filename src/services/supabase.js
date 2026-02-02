import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vggmtzyvcssuljldndjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnZ210enl2Y3NzdWxqbGRuZGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMjY5MjMsImV4cCI6MjA4NTYwMjkyM30.Z0MHWz2xWE1JN1f7NO8-HYXBeg_Q0ZzNiJYX6kcPCOQ";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
