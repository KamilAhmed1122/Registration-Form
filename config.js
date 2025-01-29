const {createClient} = supabase

const supabaseUrl = 'https://cfqhrqmtjgtasupygquk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcWhycW10amd0YXN1cHlncXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NDYzNjAsImV4cCI6MjA1MzEyMjM2MH0._shgLFdyXvXDTnvguTYpkSjDkOhTP0C_I3k7I6yah7M'
const supabaseClient = createClient(supabaseUrl, supabaseKey)

window.supabase = supabaseClient 