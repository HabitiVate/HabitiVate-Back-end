import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const upload = multer ({
    storage: multerSaveFilesOrg ({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/HabitiVate/profile_picture/*',
    }),
    preservePath: true
})