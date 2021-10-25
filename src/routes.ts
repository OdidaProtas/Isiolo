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
];
