const { Router } = require("express")
const router =  Router()

const hey = `<html>
<head>
<style>
body { background: #333; margin: 1.25rem }
h1 { color: #EEE; font-family: sans-serif }
</style>
</head>
<body>
<h1>hey GUYS.............</h1>
</body>
</html>
`

router.get("/" , (req, res) => {
    res.send(hey)
})

module.exports =router