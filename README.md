<h1 align="center">Welcome to SAAS Starter Kit!
</h1>
<p align="center">
  <img height="auto" width="400px" src="https://user-images.githubusercontent.com/24860061/113771653-839ae180-96d8-11eb-9df5-49a856019be4.png" />
<p align="center">
<br />
<br />
 
> Saas Starter Kit is a modern SAAS boilerplate. Save weeks of development time having standard SAAS features implemented for you, and start building your core app right away. 


## 🎛 Tech Stack 
#### Frontend:
React, Nextjs, Styled Components, AntD, Firebase Auth. 

#### Server: 
Nodejs, Express, Docker, Jest, Postgres or Mongodb.  
<br />

> *Pro version also includes Stripe, Nodemailer, AWS CDK and more. 

## ⚙️ Installation

<strong>node version >= 14 recommended.</strong>
<br />
<strong>npm version >= 7 is recommended.</strong> 

Using an older node version may lead to unexpected errors.

This Project Requires Firebase credentials and either Postgres or MongoDB credentials. 
Simply substitute the credentials into the appropriate env variables in both the client and server. 

Obtaining credentials from Firebase can be found in the Saas Starter Kit docs. Postgres and MongoDB credentials are user set. 

Required Environment Variables

#### Client:

| Variable  | Description |
| ------------- | ------------- |
| PUID | Set userid that the container will run as. |
| PGID | Set groupid that the container will run as. |
| JWT_SECRET  | Keep your passwords and user logins secure with a JWT SECRET  |
| DB_USERNAME | Enter database username here |
| DB_PASSWORD | Enter database password here |
| PORT | Choose a custom port to run the app on rather than the default 5000 |

#### Server:

| Variable  | Description |
| ------------- | ------------- |
| PUID | Set userid that the container will run as. |
| PGID | Set groupid that the container will run as. |
| JWT_SECRET  | Keep your passwords and user logins secure with a JWT SECRET  |
| DB_USERNAME | Enter database username here |
| DB_PASSWORD | Enter database password here |
| PORT | Choose a custom port to run the app on rather than the default 5000 |
<br />
Once the Environment Variables are defined and node modules installed the boilerplate is ready to go. 

## ✨ Features
-  ✅  Admin Dashboard
-  ✅  Full Authentication, with Google Social Login and Password Reset
-  ✅  User Profile Management with Email and Username change
-  ✅  User Dashboard
-  ✅  Checkout Pages
-  ✅  Landing and Pricing Page template
-  ✅  Decoupled Nodejs server
-  ✅  Testing Setup with Cypress and Jest
-  ✅  CRUD operations

## 📜 Docs 

The Documentation is available here

If  there are any questions or something is not covered in the docs, feel free to open a github issue on this repo. 

##  💻 Demo
The Demo can be found here: https://demo.saasstarterkit.com/app/1/dashboard

Certain Features have to be disabled or cant be included in the demo. 

## 💎 Saas Starterkit Pro

The Pro Version is a more advanced SAAS boilerplate with many more features compared to the open source version. 


#### Additional Features: 
-  ✅  Stripe subscription payments
-  ✅  Roles and permissions
-  ✅  Multi user apps and multi tenancy
-  ✅  Machine learning and AI
-  ✅  AWS infrastructure as code
-  ✅  Fully Featured Blog and Docs
-  ✅  Event Based Google Analytics


Yes, We know having the Pro version behind a paywall is a little annoying, but the sales from the Pro version is what allows us to provide the free open source projects, written tutorials and video tutorials. Please do consider upgrading if you like the open source work and want to support the project.  

The Pro Version can be found here:

https://saasstarterkit.com

## 🤝 Contributing

Pull requests are welcome.

Also If you like this project please ⭐️ the repo to show your support.  



