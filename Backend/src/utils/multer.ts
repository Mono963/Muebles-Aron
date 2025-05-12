import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

const upload = multer({ storage });

export  const uploadField = upload.fields([
  { name: "pdf", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);

export  const limpiarArchivosSubidos = (image?: string, pdf?: string) => {
  const imagePath = path.join(__dirname, "../../public/uploads", image || "");
  const pdfPath = path.join(__dirname, "../../public/uploads", pdf || "");

  [imagePath, pdfPath].forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
    }
  });
};
