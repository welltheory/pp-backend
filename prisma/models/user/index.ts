import _ from 'lodash';
import {
  Prisma,
  User as PrismaUser,
} from '@prisma/client';
import client from '$prisma/client';

export type UserProvideInput = {
  email: string;
  user_id: string;
};

class WrappedUser {
  constructor(public _data: PrismaUser) {
    Object.assign(this, _data);
  }

  log = (fname: string) => (message: string, ...args) => {
    const { id } = this.get();
    console.log(`[$user:${fname}][${id}] ${message}`, ...args);
  };

  get(key?: string) {
    if (!key) return this._data;
    return this._data[key];
  }

  update = async (data: Prisma.UserUpdateInput) => {
    const { id } = this.get();
    return client.user.update({
      where: { id },
      data,
    });
  };

  delete = async () => {
    const { id } = this.get();
    return client.user.delete({
      where: { id },
    });
  };

  // Stripe
  $stripe = {
    // Place for Stripe related methods
  };
}

export default WrappedUser;
