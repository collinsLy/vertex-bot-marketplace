-- Users (managed by Supabase Auth)
create table public.users (
  id uuid references auth.users primary key,
  username text unique not null,
  credits numeric default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Bots
create table public.bots (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id) not null,
  name text not null,
  description text,
  price numeric not null,
  category_id uuid references public.categories(id),
  is_published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Categories
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null
);

-- Transactions
create table public.transactions (
  id uuid primary key default gen_random_uuid(),
  buyer_id uuid references public.users(id) not null,
  bot_id uuid references public.bots(id) not null,
  amount numeric not null,
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);