create table profiles (
  id uuid primary key references auth.users,
  email text unique not null,
  role text default 'user' not null,
  created_at timestamptz default now()
);
