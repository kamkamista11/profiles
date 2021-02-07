import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { B400 } from "@atlaskit/theme/colors";
import { AtlassianWordmark } from "@atlaskit/logo";
import {
  PageLayout,
  Main,
  Content,
  TopNavigation,
} from "@atlaskit/page-layout";
import PageHeader from "@atlaskit/page-header";
import {
  PrimaryButton,
} from "@atlaskit/atlassian-navigation";

export const ComponentWrapper = (route) => {
  return (
    <Fragment>
      <PageHeader id="PageHeader" height={60}>
        <AtlassianWordmark textColor={B400} />
      </PageHeader>

      <TopNavigation id="navigation" height={60} isFixed={false}>
        <PrimaryButton>
          <Link to="/">Home</Link>
        </PrimaryButton>
        <PrimaryButton>
          <Link to="/user">User</Link>
        </PrimaryButton>
        <PrimaryButton>
          <Link to="/new">New</Link>
        </PrimaryButton>
      </TopNavigation>
      <div style={{ flex: "1" }}>
        <PageLayout>
          <Content>
            <Main id="main">
              <Route
                path={route.path}
                render={(props) => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            </Main>
          </Content>
        </PageLayout>
      </div>
      <footer>Footer at the bottom</footer>
    </Fragment>
  );
};
