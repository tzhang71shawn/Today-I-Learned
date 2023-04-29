import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lnbpeaoqbbstcilzkafs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuYnBlYW9xYmJzdGNpbHprYWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzODkzODIsImV4cCI6MTk5Nzk2NTM4Mn0.t6PD0QO3JcOgH86TUqNXxhAIAeevFCwOBjvUFDJw2C0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
