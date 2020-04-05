module.exports = `
exports.mockGetEndpoint = (req, res) => {
  console.log('Request params are:' + req.params);
  
  return res.status(200).json({ mock: "response" });
};

exports.mockPostEndpoint = (req, res) => {
  console.log('Request body is:' + req.body);
  
  return res.status(201).json({ mock: "response" });
};
`