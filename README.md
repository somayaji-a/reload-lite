<h1 align="center">ReLoad Docs
</h1>
<br />

> ReLoad is a micro-SaaS solution designed to help line managers allocate resources. 

## 🎛 Tech Stack 
#### Frontend:
React, Nextjs, Styled Components, AntD, Firebase Auth. 

#### Server: 
Nodejs, Express, Docker, Jest, Postgres.
<br /> 

## ⚙️ Installation

<strong>node version >= 14 recommended.</strong>
<br />
<strong>npm version >= 7 is recommended.</strong> 
client: npm run dev
server: npm start

Using an older node version may lead to unexpected errors.

This Project Requires Firebase credentials and Postgres Credentials
Substitute the credentials into the appropriate env variables in both the client and server. 

Required Environment Variables

#### Client:

| Variable  | Description |
| ------------- | ------------- |
| NEXT_PUBLIC_SERVER_URL | URL of the nodejs Server. Will be localhost during dev. |
| NEXT_PUBLIC_FIREBASE_API_KEY | The Firebase API key, found in the Firebase console |
| NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN  | Firebase Auth Domain, found in the Firebase console  |


#### Server:

| Variable  | Description |
| ------------- | ------------- |
| FIREBASE_DATABASE_URL | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_PROJECT_ID | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_CLIENT_EMAIL | Found in Firebase Service Account Key JSON file. See docs for more info. |
| FIREBASE_PRIVATE_KEY | Found in Firebase Service Account Key JSON file. See docs for more info. |
| AUTH_SECRET | User set, can be anything |
| DB_PASSWORD | Postgres Password, user set |
| DB_USER | Postgres username |
| DB_HOST | Postgres host, localhost in dev |
| DB_NAME | Name of Postgres database |
| DB_PORT | Postgres Port, default is 5432 |
<br />
Once the Environment Variables are defined and node modules installed the boilerplate is ready to go. 

