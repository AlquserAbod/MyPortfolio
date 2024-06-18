// firebaseUtils.ts
import {  ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import generateRandomImageName from './gemrateros/imageFileNameGenerateor';


export const uploadImageToFirebase = async (file: File): Promise<string> => {
  const extension = file.name.split('.').pop(); // Extracting extension from file name

  if (!extension) {
    console.error('Error: Could not determine file extension.');
    throw new Error('Could not determine file extension.');
  }
  const imageName = generateRandomImageName('descriptionImage', extension); // Adjust the prefix and extension as needed

  const storageRef = ref(storage, `images/project_images/description_images/${imageName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
generateRandomImageName
  try {
    await uploadTask;
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
