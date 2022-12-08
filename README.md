# E-Commerce CLI

## Getting Started

This project is a working simple e-commerce CLI application built using NodeJS and Docker. It allows a user to see a list of products, add them to a shopping cart, apply discount vouchers, and see the total cost. The project consists of 3 main components:
1. NodeJS Client CLI
2. Dockerized NodeJS-Express API Server
3. Dockerized MySQL Server

The instructions to run the project are as follows:
1. Install Docker Desktop
2. Go to the root project directory and run 'docker compose up' to run the API Server and MySQL Server.
3. If Docker on the machine is configured correctly, the project will run and the API Server can now be accessed on localhost port 3000 and the MySQL Server can be accessed on localhost port 3600 with credentials root, root
4. Go to the directory of the client CLI (e-commerce-client) and run 'npm start'. The CLI application will start, automatically connect to the API Server to get the products and discounts data, and now ready to accept user input commands.

## Design

The most important highlight of my design for this project is the separation of the NodeJS Client CLI and the NodeJS-Express API Server. Given that an e-commerce platform is used online, I created a NodeJS-Express API Server that has public endpoints that can accommodate HTTP API requests from client sources. It also handles and stores data via an integration with a MySQL Server for added persistence and managability. Both the API and MySQL Servers are Dockerized to take advantage of containerization and allow tight integration and easy installation. The available endpoints exposed on the API Server are as follows:

- Get Products (GET localhost:3000/products)
- Get Discounts (GET localhost:3000/discounts)

Finally, I created a simple NodeJS CLI application to serve as a client that will provide a usable interface for the user.
