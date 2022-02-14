CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  firebase_user_id VARCHAR(255)
);

CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_name VARCHAR,
  primary_email VARCHAR(255) REFERENCES users(email) ON UPDATE CASCADE
);

CREATE TABLE people (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(1000),
  author VARCHAR(255),
  org_id UUID REFERENCES organizations(id)
);

DROP TABLE projects;
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  start_date DATE,
  end_date DATE,
  org_id UUID REFERENCES organizations(id)
);
