ALTER TABLE user_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can only view their own history"
ON user_history
FOR SELECT USING (auth.uid() = user_id);