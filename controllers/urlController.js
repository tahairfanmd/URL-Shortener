const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");

exports.createShortUrl = (req, res) => {
  const { original_url } = req.body;
  const short_code = nanoid(6);

  Url.createUrl({ original_url, short_code }, (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      short_url: `http://localhost:3000/${short_code}`
    });
  });
};

exports.getUrls = (req, res) => {
  Url.getAllUrls((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.deleteUrl = (req, res) => {
  Url.deleteUrl(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted" });
  });
};

exports.redirectUrl = (req, res) => {
  Url.getByCode(req.params.code, (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send("Not found");
    }
    res.redirect(results[0].original_url);
  });
};
