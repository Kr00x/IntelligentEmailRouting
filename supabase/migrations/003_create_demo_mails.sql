create table demo_mails (
  id serial primary key,
  subject text,
  body text,
  predicted_label text,
  confidence numeric,
  created_at timestamptz default now()
);
