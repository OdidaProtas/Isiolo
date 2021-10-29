import { ProductController } from "./controller/ProductController";
import { StoreController } from "./controller/StoreController";
import StoreProfileController from "./controller/StoreProfileController";
import StoreProfile from "./controller/StoreProfileController";
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
    isAuthenticated: false,
  },
];
