const supabaseUrl = 'https://qqyhogbnaxwnyonzjplx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxeWhvZ2JuYXh3bnlvbnpqcGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNDM3MDAsImV4cCI6MjA1MzgxOTcwMH0.4hUmuhCDV4gXvfmMKbMYyjp9NdLfxWW3t8EhFI9kfSw';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

window.supabase = supabase;