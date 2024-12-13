declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"; // Define specific values
    REACT_APP_WEB_SOCKET_HOST: string; // Custom environment variable
    PORT?: string; // Optional environment variable
    REACT_APP_API_HOST: string; // Allows other unspecified env vars
  }
}
