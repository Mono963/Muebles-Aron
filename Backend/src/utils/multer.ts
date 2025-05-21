import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export  const uploadField = upload.fields([
  { name: "pdf", maxCount: 1 },
  { name: "image", maxCount: 1 },
]);
