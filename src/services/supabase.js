import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://izoxhawhicdbwalmzfyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6b3hoYXdoaWNkYndhbG16ZnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwOTc2NTAsImV4cCI6MjAyMzY3MzY1MH0.sFbxxzcluCyKKA8iJxFGf9ruzoLTnl7K-ngsQ9etZW0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
