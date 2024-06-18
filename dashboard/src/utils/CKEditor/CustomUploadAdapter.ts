import { UploadAdapter } from '@ckeditor/ckeditor5-upload';
import readImageFile from '@/utils/readers/readImageFile'; // Import the utility function

export class CustomUploadAdapter implements UploadAdapter {
  private loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  async upload(): Promise<{ default: string }> {
    try {
      const file = await this.loader.file; // Await for the File object
      const imageUrl: string = await readImageFile(file); // Use the utility function to generate the virtual URL
      return { default: imageUrl };
    } catch (error: any) {
      console.error('Error generating image URL:', error);
      throw error;
    }
  }
}
