const {Router} = require("express")

//created instance of express Router()
//
const router = Router()

const root = `<html>

<head>
<style>
body { background: #333; margin: 1.25rem}
a { color: yellow; font-size: 2rem; font-family: sans-serif }
</style>
</head>
<body>
<a href = "/hello">Hello</a>
</body>
</html>
`

router.get("/" , (req, res) => {

    //we send our html string root as response
    res.send(root)
})

//we will export this and will use this module on app.js
module.exports = router