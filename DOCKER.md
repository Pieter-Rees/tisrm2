# Docker Setup

This project includes Docker configuration to run both the frontend and backend containers together.

## Prerequisites

- Docker and Docker Compose installed
- Both repositories cloned:
  - `/home/pieter/Development/tisrm2` (frontend)
  - `/home/pieter/Development/tis-risk-managers-backend` (backend)

## Usage

From the `tisrm2` directory, run:

```bash
docker-compose up --build
```

This will:
1. Build both the frontend and backend Docker images
2. Start both containers
3. Connect them on a shared network

## Services

- **Frontend**: Available at http://localhost:3002
- **Backend**: Available at http://localhost:4000

The frontend is configured to communicate with the backend at `http://localhost:4000` when running in Docker.

## Environment Variables

### Frontend
- `NEXT_PUBLIC_API_URL`: Backend API URL (defaults to production URL if not set)

### Backend
- `PORT`: Server port (default: 4000)
- `FRONTEND_URL`: Frontend URL for CORS configuration
- `SSL_KEY_PATH`: Path to SSL key file (optional, for HTTPS)
- `SSL_CERT_PATH`: Path to SSL certificate file (optional, for HTTPS)

## Building Individual Containers

### Frontend only:
```bash
cd /home/pieter/Development/tisrm2
docker build -t tisrm2-frontend .
docker run -p 3002:3002 tisrm2-frontend
```

### Backend only:
```bash
cd /home/pieter/Development/tis-risk-managers-backend
docker build -t tisrm2-backend .
docker run -p 4000:4000 tisrm2-backend
```

## Stopping Containers

```bash
docker-compose down
```

To also remove volumes:
```bash
docker-compose down -v
```

