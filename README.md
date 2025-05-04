# Patient Management API

A TypeScript-based Express API for managing patient records with in-memory storage. Built with Node.js, Express, and TypeScript.

## Features

- Create, read, and delete patient records
- Type-safe data handling with TypeScript interfaces
- Simple in-memory data storage (for development)
- RESTful endpoint design

## API Endpoints

| Method | Endpoint                | Description                          | Request Body Example                  |
|--------|-------------------------|--------------------------------------|---------------------------------------|
| POST   | `/api/patients`         | Create a new patient                 | [See below](#create-patient)          |
| GET    | `/api/patients`         | Get all patients                     | -                                     |
| GET    | `/api/patients/:aadhar` | Get patient by Aadhar number         | -                                     |
| DELETE | `/api/patients/:aadhar` | Delete patient by Aadhar number      | -                                     |

API Endpoint:  `http://localhost:3000/api/patients`
API Endpoint for Health Check: `http://localhost:3000/health`

### Request Examples

#### Create Patient
```json
POST /api/patients
{
  "fullName": "Ravi Kumar",
  "age": 50,
  "aadharNumber": "1234567890",
  "phoneNumber": "9876543210",
  "allergy": "Seafood"
}



## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Imanubhav11/Practo-backend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Running the Application:
   ```bash
    npm run dev
   ```
The API will be available at http://localhost:3000
