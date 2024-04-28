import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ldatmqpwsnuepwkfwuds.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYXRtcXB3c251ZXB3a2Z3dWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDQwNTYsImV4cCI6MjAyODUyMDA1Nn0.JktLE4PnhgZ8kTHSOCHttdMbOUyfOTDgj2jJPxw3xf0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
