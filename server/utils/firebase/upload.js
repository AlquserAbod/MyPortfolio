// uploadImage.js

const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { storage } = require("../../config/firebase.config.js");
const  getFileExtension  = require("../getFileExtension.js"); // Adjust the path as necessary
const  generateRandomImageName = require('../genrateros/imageFileNameGenerateor.js')

/**
 * Uploads an image to Firebase Storage.
 * @param {Blob} imageBlob The image blob.
 * @param {string} fileName The name of the file.
 * @returns {Promise<string>} The public URL of the uploaded image.
 */
async function uploadImageToFirebase(imageBlob, originalFileName) {

  const fileExtension = getFileExtension(originalFileName);
  const fileName = generateRandomImageName('profilePic', fileExtension);
  const imagePath = `images/profile_pic/${fileName}`;
  
  const storageRef = ref(storage, imagePath);
  const snapshot = await uploadBytes(storageRef, imageBlob);

  // Get the download URL
  const downloadURL = await getDownloadURL(ref(storage, imagePath));

  return downloadURL;
}

module.exports = { uploadImageToFirebase };
