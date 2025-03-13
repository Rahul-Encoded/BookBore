# HTTP Status Code Errors and Their Meaning

## 400 - Bad Request
**`res.status(400)`**
- **What it means:** The server cannot process the request due to client-side errors (like invalid input, missing fields, etc.).
- **When to use:** When the client sends malformed or insufficient data.

## 401 - Unauthorized
**`res.status(401)`**
- **What it means:** Authentication is required, and the client has not provided valid credentials.
- **When to use:** When access to a resource is denied due to lack of proper authentication.

## 403 - Forbidden
**`res.status(403)`**
- **What it means:** The client is authenticated but does not have permission to access the requested resource.
- **When to use:** When an authenticated user tries to access something they shouldn’t.

## 404 - Not Found
**`res.status(404)`**
- **What it means:** The requested resource could not be found on the server.
- **When to use:** When the client requests an endpoint or file that does not exist.

## 409 - Conflict
**`res.status(409)`**
- **What it means:** A conflict occurred due to the current state of the server.
- **When to use:** When attempting to create a resource that already exists or when there’s a versioning conflict.

## 500 - Internal Server Error
**`res.status(500)`**
- **What it means:** A generic server error, usually indicating an unexpected condition on the server.
- **When to use:** When something goes wrong on the server’s end, like an unhandled exception.

## 502 - Bad Gateway
**`res.status(502)`**
- **What it means:** The server acting as a gateway received an invalid response from an upstream server.
- **When to use:** When there’s an issue with communication between microservices or external APIs.

## 503 - Service Unavailable
**`res.status(503)`**
- **What it means:** The server is currently unable to handle the request due to overload or maintenance.
- **When to use:** During downtime or when the server is temporarily overloaded.

## 504 - Gateway Timeout
**`res.status(504)`**
- **What it means:** The server acting as a gateway did not receive a timely response from an upstream server.
- **When to use:** When a dependent service fails to respond in time.

