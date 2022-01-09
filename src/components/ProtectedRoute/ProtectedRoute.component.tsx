/* eslint-disable react/jsx-props-no-spreading, react/prop-types */
import React from "react";
import { Cookies } from "react-cookie";
import { Route } from "react-router-dom";

interface ComponentProps {
  component: Function;
  redirect: string;
  path: string;
  element: Function;
}

interface Element {
  name: any;
}
const ProtectedRoute = ({
  component: Component,
  element,
  ...rest
}: ComponentProps) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <Route
      {...rest}
      element={(
        Redirect: React.ComponentClass<any>,
        redirect: Element,
        ...props: Element[]
      ) => {
        if (token === "undefined" || token == null) {
          return <Redirect to={redirect} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
