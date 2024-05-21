import axios from 'axios';

const formats = ['.jpg', '.jpeg', '.png'] as const;

const ACCEPTED_IMAGE_FORMAT = formats.join(', ');

const compressionOptions = {
  maxSizeMB: 1,
  maxWidthOrHeight: 800,
  useWebWorker: true,
};

const handlePostImage = async (formData: FormData) => {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // secret: `${process.env.REACT_APP_SECRET}`,
      },
    });
    return data.link;
  } catch (e) {
    console.log(e);
  }
};

export { handlePostImage, ACCEPTED_IMAGE_FORMAT, compressionOptions };