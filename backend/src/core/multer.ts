const multer = require("multer");

const storage = multer.memoryStorage(); // движок оперативной памяти сохраняет файлы в памяти
const uploader = multer({storage});

export default uploader;
