// uploadImage.js

const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../../config/firebase.config.js");
const  getFileExtension  = require("../getFileExtension.js"); // Adjust the path as necessary
const  generateRandomImageName = require('../genrateros/imageFileNameGenerateor.js')
const FIREBASE_IMAGE_SUB_DIRS = require('../../constants/firebase_image_subDirs.js');

/**
 * Uploads an image to Firebase Storage.
 * @param {Blob} imageBlob The image blob.
 * @param {string} fileName The name of the file.
 * @param {string} subDir The sub-directory where the image will be uploaded.
 * @returns {Promise<string>} The public URL of the uploaded image.
 */
async function uploadImageToFirebase(imageBlob, originalFileName, subDir) {
  if (!Object.values(FIREBASE_IMAGE_SUB_DIRS).includes(subDir)) {
    throw new Error(`Invalid sub-directory: ${subDir}`);
  }

  const fileExtension = getFileExtension(originalFileName);
  const fileName = generateRandomImageName(fileExtension);
  const imagePath = `images/${subDir}/${fileName}`;
  
  const storageRef = ref(storage, imagePath);
  const snapshot = await uploadBytes(storageRef, imageBlob);

  // Get the download URL
  const downloadURL = await getDownloadURL(ref(storage, imagePath));

  return downloadURL;
}

module.exports = { uploadImageToFirebase };
