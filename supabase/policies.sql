-- Users table policies
create policy "Users can view their own profile" 
on public.users for select using (auth.uid() = id);

create policy "Users can update their own profile"
on public.users for update using (auth.uid() = id);

-- Bots table policies
create policy "Public bots are visible"
on public.bots for select using (is_published = true);

create policy "Owners can manage their bots"
on public.bots for all using (auth.uid() = owner_id);

-- Transactions table policies
create policy "Buyers can view their transactions"
on public.transactions for select using (auth.uid() = buyer_id);

-- Add enhanced security for transactions
create policy "Only buyers can create transactions"
on public.transactions for insert with check (
  auth.uid() = buyer_id
);

create policy "Transactions are immutable after creation"
on public.transactions for update using (false);

-- Add admin override for service role
create policy "Service role full access"
on all tables for service role
using (true);

-- Add deletion protection
create policy "Users cannot delete profiles" 
on public.users for delete using (false);

create policy "Bots can only be deleted by owners"
on public.bots for delete using (auth.uid() = owner_id);

-- Prevent transaction deletions
create policy "No transaction deletions allowed"
on public.transactions for delete using (false);