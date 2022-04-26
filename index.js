const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");
const { supabase } = require("./supabase");
const { filterFetchedRecords } = require("./helperFns");
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const jsonParser = bodyParser.json();

app.get("/getro", jsonParser, async (req, res) => {
  try {
    console.log("Received a request");
    const { error, data: fetchedRecords } = await axios.get(
      "https://api.getro.com/v2/networks/342/jobs",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-User-Email": process.env.GETRO_EMAIL,
          "X-User-Token": process.env.GETRO_TOKEN,
        },
      }
    );
    if (fetchedRecords?.items?.length) {
      const existingRecords = await supabase.from("getro_jobs").select();
      const newGetroRecords = filterFetchedRecords(
        fetchedRecords.items,
        existingRecords?.data
      );
      const newGetroData = newGetroRecords.map((rec) => {
        const {
          id: getro_id,
          created_at: getro_created_at,
          title,
          url,
          job_functions,
          company,
        } = rec || {};
        const { name: company_name, logo_url, topics } = company || {};
        return {
          getro_id,
          getro_created_at,
          title,
          url,
          company_name,
          logo_url,
          topics: topics?.join() || "No Topics",
          job_functions: job_functions?.join() || "No Job Functions",
        };
      });
      if (newGetroData?.length) {
        const createRes = await supabase
          .from("getro_jobs")
          .insert(newGetroData);
        console.log({ createRes });
        if (createRes.statusText === "Created") {
          // for (const newItem of newGetroData) {
          //   const webhookRes = await axios.post(
          //     "https://hooks.zapier.com/hooks/catch/12371272/bzxwl79/",
          //     newItem
          //   );
          // }

          res.json({ items: createRes?.data }).status(200);
        } else {
          console.log("failed to insert to supabase");

          res.json({ error: "Failed to insert to supabase" }).status(500);
        }
      } else {
        console.log("no new records");
        res.json({ error: "No new records" }).status(500);
      }
    } else {
      console.log("failed to fetch from getro");
      res.json({ error: "Failed to fetch from getro" }).status(500);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
