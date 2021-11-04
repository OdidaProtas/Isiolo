import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import ProductVariants from "../entity/ProductVariants";
import VariantOptions from "../entity/VariantOptions";
import retryRefactor from "../helpers/retryRefactor";

export default class ProductVariantController {
  private productRepository = getRepository(Product);
  private optionRepository = getRepository(VariantOptions);
  private variantRepository = getRepository(ProductVariants);

  async save(request: Request, response: Response, next: NextFunction) {
    const product = await this.productRepository.findOne(request.params.id);
    const { name } = request.body;
    const uniquePromise = this.variantRepository.findOne({
      where: { name: name, product: product },
    });
    const [unique] = await retryRefactor(uniquePromise);
    if (!unique) {
      const { values } = request.body;
      const options = Object.keys(values).map((opt) => values[opt]);
      const variantPromise = this.variantRepository.save({
        name: name,
        product: product,
      });
      const [variant] = await retryRefactor(variantPromise);
      console.log(variant);
      let opts = [];

      options.forEach(async (ele) => {
        const option = await this.optionRepository.save({
          name: ele,
          variant: variant,
        });
        opts.push(option);
      });
      return true;
    } else return false;
  }
  async all(request: Request, response: Response, next: NextFunction) {
    const productID = request.params.id;
    const product = await this.productRepository.findOne(request.params.id);
    const promise = this.variantRepository.find({
      where: { product: product },
      relations: ["options"],
    });
    const [data, e] = await retryRefactor(promise);
    console.log(data);
  }
}
