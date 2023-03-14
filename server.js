const app = require("./index")
const port = process.env.PORT
const errorMiddleware = require("./middlewares/error.middleware")
const mongoose = require('mongoose');

console.log(`Node environment: ${process.env.NODE_ENV}`)
app.listen(port, () => {
    console.log(`Example app listening at port http://localhost:${port}`)
})

mongoose.connect("mongodb+srv://remi:mdpmongo@cluster0.2ydwrhr.mongodb.net/nws_noSQL?retryWrites=true&w=majority")

// Error Handler Middleware
app.use(errorMiddleware)
