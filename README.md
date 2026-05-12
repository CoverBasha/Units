# Item Management API

A simple backend application built with Node.js following Clean Architecture / DDD-inspired layering.

The project includes:
- REST API with Express
- MongoDB persistence using Mongoose
- Kafka event publishing and consuming
- Dockerized setup using Docker Compose
- EC2 deployment support

---

# Architecture

The project is separated into layers:

```text
src/
├── API/               # Routes & controllers
├── Application/       # Use cases
├── Domain/            # Entities & repository contracts
├── Infrastructure/    # Database, repositories, Kafka
```

## Layers Overview

### API Layer
Handles:
- HTTP requests
- Routing
- Dependency Injection
- Controllers

### Application Layer
Contains:
- Business use cases
- Application logic

Examples:
- CreateItem
- ListItems
- GetById

### Domain Layer
Contains:
- Domain entities
- Repository abstractions

### Infrastructure Layer
Handles external systems:
- MongoDB
- Kafka
- Repository implementations

---

# Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Apache Kafka
- Docker
- Docker Compose

---

# Features

- Create item
- Get all items
- Get item by ID
- Kafka event publishing on item creation
- Kafka consumer support
- Dockerized environment

---

# Environment Variables

Create a `.env` file inside the project root:

```env
PORT=3000

MONGO_URI=mongodb://localhosst:27017/itemsdb

KAFKA_BROKER=localhost:9092
```

---

# Running Locally

## Prerequisites

Install:
- Docker
- Docker Compose

---

# Run the project

```bash
docker compose up --build
```

The API will run on:

```text
http://localhost:3000
```

---

# API Endpoints

## Create Item

```http
POST /items
```

### Request Body

```json
{
  "name": "Laptop",
  "stock": 1000
}
```

---

## Get All Items

```http
GET /items
```

---

## Get Item By ID

```http
GET /items/:id
```

---

# Kafka Integration

When an item is created:
- an event is published to Kafka
- the consumer listens for item events

Kafka and Zookeeper are configured using Docker Compose.

---

# Docker Services

The application runs using the following containers:

- API
- MongoDB
- Kafka
- Zookeeper

---

# Deployment

The project can be deployed on AWS EC2 using Docker Compose.

Basic deployment flow:

```bash
git clone <repo>
cd <project>

docker compose up --build -d
```

---

# Notes

- Kafka integration was implemented and tested locally using Docker Compose.
- Due to resource limitations on small cloud instances, service restart policies were added to improve container recovery and stability.

---

# Author

Ahmad Ibrahim
