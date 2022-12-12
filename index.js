const fs = require("fs/promises");
const http = require("http");

fs.writeFile("file.html", "<h1> Hello World </h1> \n<p> This is Utsav</p>", (error) => {
})

let content;
const myFileReader = async (fileName) => {
    await fs.readFile(fileName, { encoding: "utf8" })
        .then((res) => { content = res })
        .catch((err) => { console.log(err) });
}

myFileReader("file.html");

const server = http.createServer((req, res) => {
    res.write(content);
    res.end();
})

server.listen(5000, () => { console.log("Server is up") })