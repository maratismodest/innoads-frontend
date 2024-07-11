import { NextResponse } from 'next/server';
import multer from 'multer';
import { promisify } from 'util';
import fs from 'fs';

// Configure Multer storage
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads', // Specify the upload directory
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Keep the original filename
    },
  }),
});

// Convert Multer middleware to a promise to use with async/await
const uploadMiddleware = promisify(upload.single('file'));

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');

  console.log('file', file);

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  try {
    const tempFilePath = `./public/uploads/${file.name}`;
    const fileStream = fs.createWriteStream(tempFilePath);
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    fileStream.write(fileBuffer);
    fileStream.end();

    return NextResponse.json(
      { data: 'File uploaded successfully', url: `http://localhost:3000/uploads/${file.name}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error.message}` }, { status: 500 });
  }
}
