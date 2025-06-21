CREATE TABLE IF NOT EXISTS Restaker (
  user TEXT,
  amount REAL,
  validator TEXT
);

CREATE TABLE IF NOT EXISTS Validator (
  operator TEXT,
  totalDelegated REAL,
  status TEXT
);

CREATE TABLE IF NOT EXISTS Slash (
  operator TEXT,
  timestamp TEXT,
  amount REAL,
  reason TEXT
);

CREATE TABLE IF NOT EXISTS Reward (
  address TEXT,
  totalRewards REAL
);

CREATE TABLE IF NOT EXISTS RewardBreakdown (
  address TEXT,
  validator TEXT,
  amount REAL,
  timestamp TEXT
);
