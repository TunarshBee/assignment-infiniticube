require("dotenv").config();
const express = require("express");
const { Client } = require("pg");
const mysql = require('mysql')
const groupBy = require('lodash/groupBy')
const manipulate_data = require('./ex')
const cors = require('cors')
const app = express();


const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

//to use mysql connection set this in your .env file and change the code to use callbacks
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  database: process.env.MYSQLDATABASE,
  password: process.env.MYSQLPASSWORD, 
});
app.use(cors())
app.get("/", (_, res) => {
  res.send("assignment-infiniticube");
});



app.get("/users", (req, res) => {
  let numRows;
  let numPerPage = parseInt(req.query.limit, 10) || 10;
  let page = parseInt(req.query.page, 10) || 1;
  let numPages;
  let skip = page * numPerPage;
  let limit = skip + numPerPage;

  client
    .query(
      `select * from users left join orders on users.id = orders.user_id limit ${limit}`
    )
    .then((results) => {
      numRows = results.rowCount;
      numPages = Math.floor(numRows / numPerPage);
      console.log("number of pages:", numPages);
      const grouped_data = groupBy(results.rows, function(n) {
        return n.id;
      });
      results.rows = manipulate_data(grouped_data)
      const responsePayload = {
        results,
      };
      if (page < numPages) {
        responsePayload.pagination = {
          current: page,
          perPage: numPerPage,
          previous: page > 1 ? page - 1 : undefined,
          next: page < numPages - 1 ? page + 1 : undefined,
        };
      } else
        responsePayload.pagination = {
          err:
            "queried page " +
            page +
            " is >= to maximum page number " +
            numPages,
        };
      res.json({
        Total: numRows,
        Data: responsePayload.results.rows,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.json({ err: err });
    });
});

app.listen(4000, async () => {
  await client.connect().then(() => console.log("Database Connected"));
  console.log("Server running ");
});
