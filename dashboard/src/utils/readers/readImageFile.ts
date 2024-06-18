export default function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!(file instanceof Blob)) {
      reject(new Error('Invalid file type. Expected a File object.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      resolve(imageUrl);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
