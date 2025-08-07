create table resume_requests (
  id uuid primary key default gen_random_uuid(),
  requester uuid references profiles(id),
  status text check(status in ('pending','allowed','denied')) default 'pending',
  created_at timestamptz default now()
);

alter table resume_requests enable row level security;
create policy owner_or_creator on resume_requests
  for select using (
    auth.uid() = requester or
    exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'creator')
  );
