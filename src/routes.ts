import { CollectionsController } from "./controller/CollectionsController";
import { CustomerController } from "./controller/CustomerController";
import { GiftCardController } from "./controller/GiftCardContoller";
import { ProductController } from "./controller/ProductController";
import ProductMediaController from "./controller/ProductMediaController";
import ProductVariantController from "./controller/ProductVariantController";
import { StoreController } from "./controller/StoreController";
import StoreProfileController from "./controller/StoreProfileController";
import StoreProfile from "./controller/StoreProfileController";
import { SupplierController } from "./controller/SupplierController";
import { TransferController } from "./controller/TransferController";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
    isAuthenticated: false,
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login",
    isAuthenticated: false,
  },
  {
    method: "post",
    route: "/stores",
    controller: StoreController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/my-stores",
    controller: StoreController,
    action: "byOwner",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/stores",
    controller: StoreController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/lookup/:name",
    controller: StoreController,
    action: "byName",
    isAuthenticated: true,
  },
  {
    method: "delete",
    route: "/stores/:id",
    controller: StoreController,
    action: "remove",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/stores/:id",
    controller: StoreController,
    action: "one",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/stores/:id",
    controller: StoreProfileController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/products/:id",
    controller: ProductController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/my-products/:id",
    controller: ProductController,
    action: "byStore",
    isAuthenticated: true,
  },
  {
    method: "patch",
    route: "/products/:id",
    controller: ProductController,
    action: "update",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/product-media/:id",
    controller: ProductMediaController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/product-media/:id",
    controller: ProductMediaController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "delete",
    route: "/product/:id",
    controller: ProductController,
    action: "remove",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/variants/:id",
    controller: ProductVariantController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/variants/:id",
    controller: ProductVariantController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/suppliers/:id",
    controller: SupplierController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/suppliers/:id",
    controller: SupplierController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/transfer",
    controller: TransferController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/collections",
    controller: CollectionsController,
    action: "save",
    isAuthenticated: true,
  },
  {
    method: "get",
    route: "/collections/:id",
    controller: CollectionsController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/gift-cards",
    controller: GiftCardController,
    action: "save",
    isAuthenticated: true,  
  },
  {
    method: "get",
    route: "/gift-cards/:id",
    controller: GiftCardController,
    action: "all",
    isAuthenticated: true,
  },
  {
    method: "post",
    route: "/customers",
    controller: CustomerController,
    action: "save",
    isAuthenticated: true,  
  },
  {
    method: "get",
    route: "/customers/:id",
    controller: CustomerController,
    action: "all",
    isAuthenticated: true,
  },
];
