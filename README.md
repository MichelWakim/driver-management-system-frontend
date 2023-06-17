# Driver Management System Frontend

This project is the frontend for a driver management system.

## Installation

Before running the project, make sure you have installed the following software on your machine:

- Node.js (version 14 or later)
- NPM (version 6 or later)

To install the project dependencies, run the following command in the project root directory:

```
npm install
```

## Running the project

To start the development server, run the following command:

```
npm start
```

This will start the server at `http://localhost:4200/`, and the app will automatically reload if you change any of the source files.

## Proxy configuration

This project uses a proxy configuration to forward API requests from the frontend to the backend. The proxy configuration is defined in the `proxy.conf.json` file and is used by the `ng serve` command to set up a proxy server.

In the proxy configuration, we specify that any requests to `"/api/*"` should be forwarded to `https://127.0.0.1:5000`, which is the address of the backend API. We also set `secure` to `false` to ignore SSL certificate errors, and `changeOrigin` to `true` to rewrite the `Host` header of the requests. Finally, we set the `Access-Control-Allow-Origin` header to `"*"` to allow cross-origin requests from any domain.

Using a proxy configuration allows us to avoid CORS issues and simplify the frontend code, as we can directly call the API using the same domain and port as the frontend. It also makes it easier to switch between development and production environments, as we can change the API endpoint in a single configuration file.

## Building the project

To build the project for production, run the following command:

```
npm run build
```

This will build the project and create a `dist` directory with the compiled files.

