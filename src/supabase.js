// src/supabase.js
import { createClient } from "@supabase/supabase-js";

let user = null; // This will store the authenticated user
let sessionId = null; // This will store the session ID for the user

// Replace with your Supabase details
const supabaseUrl = "https://paxgjtajvumygtldzmkl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBheGdqdGFqdnVteWd0bGR6bWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNDY2MTQsImV4cCI6MjA0NDcyMjYxNH0.RM-2MuwvmBL8NAWztq8M_ZuMorbzmM8rGLY8cHM6lN0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
