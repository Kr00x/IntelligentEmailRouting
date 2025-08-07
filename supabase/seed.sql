-- Seed demo mails and creator profile
insert into profiles (id, email, role)
values ('00000000-0000-0000-0000-000000000001', 'admin@killimai05.com', 'creator')
on conflict (id) do nothing;

insert into demo_mails (subject, body, predicted_label, confidence)
select
  'Demo Mail ' || i,
  'Dies ist Demo-Inhalt für Mail ' || i,
  (array['support','sales','applications','general'])[1 + (i % 4)],
  round(random()::numeric, 2)
from generate_series(1, 200) as s(i);
