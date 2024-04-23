import app from "./app";
import "dotenv/config";

const PORT = process.env.PORT || 4000;

process.on("uncaughtException", (err: Error) => {
  console.log(`Error: ${err.message}`);

  console.log("Shutting down server due to uncaught exception");

  process.exit(1);
});

const server = app.listen(PORT, () => {
  console.log(`Server working at PORT: ${PORT}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(`Error: ${err.message}`);

  console.log("Shutting down server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
