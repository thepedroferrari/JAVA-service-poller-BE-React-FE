export const isDevelopment = process.env.NODE_ENV === "development"
export const SERVER_URL = isDevelopment
  ? "http://localhost:8080"
  : "https://kry.pedroferrari.com"

export const FETCH_ROUTE = "service"
export enum MESSAGES {
  SERVER_ERROR = "Error accessing the server, please try again.",
}
