module.exports = function (req, res, next) {
  res.json({
    success: false,
    action: req.params.action
  })
}
