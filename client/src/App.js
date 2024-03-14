import axios from "axios";
import React, { useEffect, useState } from "react";
import { load } from "@azure/app-configuration-provider";



function App() {
  // const { load } = require("@azure/app-configuration-provider");
  // const connectionString = process.env.AZURE_APPCONFIG_CONNECTION_STRING

  // const client = AppConfigurationClient('process.env.AZURE_APPCONFIG_CONNECTION_STRING');
  // let retrievedSetting =  client.getConfigurationSetting({
  //   key: "REACT_APP_ENV"
  // });

  let settings;

    // Sample 1: Connect to Azure App Configuration using a connection string and load all key-values with null label.
  settings = load(process.env.AZURE_APPCONFIG_CONNECTION_STRING);
  let REACT_APP_ENV = settings.get("REACT_APP_ENV")
  console.log("environment: ",REACT_APP_ENV)

  const [features, setFeatures] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/feature/${REACT_APP_ENV}/${process.env.REACT_APP_PROJECT}`
      )
      .then((response) => setFeatures(response.data));
  }, []);
  return (
    <div className="App">

      {features.newUI ? (
        <p> new ui is enabled </p>
      ) : (
        <p> Using Standard UI </p>
      )}

      {features.betaFeature ? (
        <p> Beta feature is enabled </p>
      ) : (
        <p> Beta Feature is not available </p>
      )}
    </div>
  );
}

export default App;
