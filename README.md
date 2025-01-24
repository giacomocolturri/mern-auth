# Mern System Authentication

## Backend Project Structure

### Prerequisites

- NodeJS
- Express
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a .env file in the backend directory and add the following environment variables:
   ```sh
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   SMTP_USER=<your-smtp-user>
   SMTP_PASSWORD=<your-smtp-password>
   EMAIL_USER=<your-email-user>
   ```

### Running the Server

- For development:
  ```sh
  npm run dev
  ```
- For production:
  ```sh
  npm run build
  node dist/index.js
  ```

## Frontend Project Structure
