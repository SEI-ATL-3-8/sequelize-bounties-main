CREATE TABLE IF NOT EXISTS bounties (
  id SERIAL PRIMARY KEY,
  name TEXT,
  wantedFor TEXT,
  reward INTEGER,
  captured BOOLEAN
);

CREATE TABLE IF NOT EXISTS hunters (
  id SERIAL PRIMARY KEY,
  name TEXT,
  client TEXT,
  active BOOLEAN
);


