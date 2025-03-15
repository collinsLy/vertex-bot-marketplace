const { data: userHistory, error } = await supabase
  .from('user_history')
  .select('*')
  .eq('user_id', user.id)  // Explicitly filter by current user
  .order('created_at', { ascending: false });