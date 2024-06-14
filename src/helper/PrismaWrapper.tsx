import { PrismaClient } from '@prisma/client';

//I was getting issues where 100s of prisma clients would be created
//This assures that only one will be created because singletons.
class PrismaHelper extends PrismaClient {
  _instance = this;

  constructor() {
    super();
    if (this._instance) {
      return this;
    } else {
      this._instance = this;
    }
  }
}

const prisma = new PrismaHelper();

export default prisma;
