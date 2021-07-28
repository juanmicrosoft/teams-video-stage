import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme, Loader } from "@fluentui/react-northstar";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import "./App.css";
import TabConfig from "./TabConfig";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  //uri: 'https://api-video-stage.azurewebsites.net/api/graphql?code=MtgN7dmB0c4HcFFe1syaVbf/46Ltb25OihVFcha5m/a5asrAMV8tWQ==',
  uri: 'http://localhost:7072/api/graphql',
  cache: new InMemoryCache()
});

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme, loading } = useTeamsFx();
  return (
    <ApolloProvider client={client}>
      <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
        <Router>
          <Route exact path="/">
            <Redirect to="/tab" />
          </Route>
          {loading ? (
            <Loader style={{ margin: 100 }} />
          ) : (
            <>
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/tab" component={Tab} />
              <Route exact path="/config" component={TabConfig} />
            </>
          )}
        </Router>
      </Provider>
    </ApolloProvider>
  );
}
