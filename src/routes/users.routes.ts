import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { ListUserController } from '../modules/accounts/useCases/listUser/ListUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const userRouter = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRouter.post('/', createUserController.handle);
userRouter.patch(
    '/avatar',
    ensureAuthenticate,
    uploadAvatar.single('avatar'),
    updateUserAvatarController.handle,
);
userRouter.get('/', listUserController.handle);

export { userRouter };
