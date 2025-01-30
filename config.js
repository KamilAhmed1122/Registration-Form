const {createClient} = supabase

const supabaseUrl = 'https://jnlnxyrnetoetpfquhys.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpubG54eXJuZXRvZXRwZnF1aHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNjE0NjgsImV4cCI6MjA1MjczNzQ2OH0.hPljIm6YnIsJe3xVpzKtIacNFKs-iZMcbMEygJ_0A_w';

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
window.supabase = supabase;