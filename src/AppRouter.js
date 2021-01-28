import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./component/Header";
import home from "./screens/Home";
import categories from "./screens/Categories";
import ManageCategory from "./screens/MANAGE/ManageCategory";
import ManageBooks from "./screens/MANAGE/ManageBook";
import ManageAuthor from "./screens/MANAGE/ManageAuthor";
import BookDetails from "./screens/BookDetails";
import Authors from "./screens/Authors";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={home} exact={true} />
        <Route path="/category/:categoryId" component={categories} />
        <Route path="/manage-category" component={ManageCategory} />
        <Route path="/manage-book" component={ManageBooks} />
        <Route path="/manage-author" component={ManageAuthor} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/author/:authId" component={Authors} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
