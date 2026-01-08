import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

const {CLOUDINARY_NAME_PROCURE, CLOUDINARY_API_KEY_PROCURE, CLOUDINARY_API_SECRET_PROCURE} = process.env
          
cloudinary.config({ 
  cloud_name: CLOUDINARY_NAME_PROCURE, 
  api_key: CLOUDINARY_API_KEY_PROCURE, 
  api_secret: CLOUDINARY_API_SECRET_PROCURE 
});

export const uploadImage = (image, public_id) => {
  cloudinary.uploader.upload(image,
    { 
      public_id: public_id }, 
      (error, result) => {
        if (error) {
          console.log('error', error)
          return error
        }
        console.log('result', result.secure_url)
        return result.secure_url
      }
    );
}

export const deleteImage = (public_id) => {
  cloudinary.uploader.destroy(public_id, (error, {result}) => {
    if (error) {
      console.log('error', error)
      return error
    }
    console.log('result', result)
    return result
  })
}

// uploadImage('./1565566914202.jpeg', 'miprueba')
deleteImage('miprueba')


console.log(process.env.CLOUDINARY_NAME_PROCURE)