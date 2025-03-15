CREATE OR REPLACE FUNCTION clean_user_history()
RETURNS TRIGGER AS $$
BEGIN
  -- Ensure clean slate by creating fresh history entry instead of deleting
  INSERT INTO user_history (user_id, created_at)
  VALUES (NEW.id, NOW());
  
  -- Remove any existing entries that might have been created before this trigger
  DELETE FROM user_history 
  WHERE user_id = NEW.id 
    AND created_at < NOW();
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER initialize_clean_history
BEFORE INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION clean_user_history();