'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function InstallBootstrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <></>;
}

export default InstallBootstrap;