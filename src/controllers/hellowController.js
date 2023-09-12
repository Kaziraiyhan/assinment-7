const hello = (req, res) => {
    res.status(200).json({Status: "success", data: "hellow this is my first express rest api"})
}
module.exports = hello