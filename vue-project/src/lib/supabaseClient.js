import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gquwfyeqsthikqnhmizd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdXdmeWVxc3RoaWtxbmhtaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNzgyNDEsImV4cCI6MjA1Mzk1NDI0MX0.AKDAn_8S_IJeZ-0nkScZAeZC3YVpVcFXnQdFWCLRMYA')