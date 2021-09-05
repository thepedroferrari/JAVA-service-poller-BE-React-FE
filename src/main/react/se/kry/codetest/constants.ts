export const isDevelopment = process.env.NODE_ENV === "development"
export const SERVER_URL = isDevelopment
  ? "http://localhost:8080"
  : "https://kry.pedroferrari.com"
