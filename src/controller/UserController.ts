import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import retryRefactor from "../helpers/retryRefactor";
import MiddleWare from "../middleware/MiddleWare";

export class UserController {
  private userRepository = getRepository(User);
  private middleWare = new MiddleWare();

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { password } = request.body;
    const newPass = bcrypt.hashSync(password, 8);
    const promise = this.userRepository.save({
      ...request.body,
      password: newPass,
    });
    const [res, err] = await retryRefactor(promise);
    if (res) return res;
    console.log(err)
    if (err.driverError.detail.includes("already exists"))
      return response
        .status(403)
        .send(`Email ${request.body.email} already registered`);
    return response.status(403).send(err);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;
    const user = this.userRepository.findOne({ email });
    if (!(await user))
      response.status(400).send("Could not verify email addressF");
    if (!(email && password)) {
      response.status(400).send("All fields are required");
    }
    if (bcrypt.compareSync(password, (await user).password)) {
      const token = jwt.sign(
        {
          email,
          firstName: (await user).firstName,
          lastName: (await user).lastName,
          id: (await user).id,
        },
        "hehe"
      );
      return token;
    }
    return response.status(403).send("Invalid credentials");
  }
}
