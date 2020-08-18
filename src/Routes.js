import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  MyFinance as MyFinanceView,
  Profile as ProfileView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignOut as SignOutView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Enrollments as Enrollments,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
        // to="/sign-in"
        component={SignInView}
        layout={MainLayout}
        // path="/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      
      <RouteWithLayout
        component={ProfileView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={MyFinanceView}
        exact
        layout={MainLayout}
        path="/MyFinance"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={Enrollments}
        exact
        layout={MainLayout}
        path="/enrollments"
      />
      <RouteWithLayout
        component={SignOutView}
        exact
        layout={MinimalLayout}
        path="/sign-out"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
