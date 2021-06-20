import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/client.route.js"
import productsRouter from "./routes/product.route.js"
import salesRouter from "./routes/sale.route.js"
import suppliersRouter from "./routes/supplier.route.js"

const { combine, timestamp, label, printf } = winston.format;
const logFormatWinston = printf(({level, message, label, timestamp}) =>{
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
   level: "silly",
   transports: [
       new (winston.transports.Console)(),
       new (winston.transports.File)({filename: "store-api.log"})
   ],
    format: combine(
        label({label: "store-api"}),
        timestamp(),
        logFormatWinston
    )
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", productsRouter);
app.use("/sale", salesRouter);
app.use("/supplier", suppliersRouter);
app.listen(3030, () => console.log("API Started! 🚀🚀🚀"));