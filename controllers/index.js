const axios = require("axios");
const cheerio = require("cheerio");

const fetchSpankbang = async (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(404).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let arr = [];

  $(".video-item", result.data).each((index, element) => {
    const link =
      "https://spankbang.com/" + $(element).children("a").attr("href");
    const title = $(element).children(".n").text();
    const thumbnail = $(element)
      .children("a")
      .children("picture")
      .children("img")
      .attr("data-src");
    const preview = $(element)
      .children("a")
      .children("picture")
      .children("img")
      .attr("data-preview");
    const duration = $(element)
      .children("a")
      .children("p")
      .children(".l")
      .text();
    const resolution = $(element)
      .children("a")
      .children("p")
      .children(".h")
      .text();

    if (title == "") return;

    arr.push({
      title,
      link,
      thumbnail,
      preview,
      duration,
      resolution,
    });
  });

  res.status(200).json({
    meta: {
      total: arr.length,
    },
    data: arr,
  });
};

const fetchAsiaLeak = async (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(404).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  let arr = [];

  $(".item", result.data).each((index, element) => {
    const title = $(element).children("a").children("strong").text();
    const link = $(element).children("a").attr("href");
    const thumbnail = $(element)
      .children("a")
      .children(".img")
      .children("img")
      .attr("data-webp");
    const preview = $(element)
      .children("a")
      .children(".img")
      .children("img")
      .attr("data-preview");
    const duration = $(element)
      .children("a")
      .children(".wrap")
      .children(".duration")
      .text();

    arr.push({ title, link, thumbnail, preview, duration });
  });

  res.status(200).json({
    meta: {
      total: arr.length,
    },
    data: arr,
  });
};

const fetchMediafire = async (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(404).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const link = $(".popsok").attr("href");

  return res.status(200).json({
    link,
  });
};

const fetchGoogleDrive = async (req, res) => {
  const url = req.body.url;

  if (!url) return res.status(404).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const link = $("#downloadForm").attr("action");

  return res.status(200).json({
    link,
  });
};

module.exports = {
  fetchSpankbang,
  fetchAsiaLeak,
  fetchMediafire,
  fetchGoogleDrive,
};
