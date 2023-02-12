import React from "react";
import { useRouteError } from "react-router";
const Errorpage = () => {
    const error = useRouteError();

    return (
      <div>
          {error?.toString()}
      </div>
    );
};

export default Errorpage;
