import { Authenticated, GitHubBanner, Refine, WelcomePage, useSyncWithLocation } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { authProvider, dataProvider, liveProvider } from "./providers";
import {
  ErrorComponent,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./pages/forgotPassword";

import { Register } from "./pages/register";
import {Home, Login} from "./pages"

// const API_URL = "https://api.nestjs-query.refine.dev/graphql";
// const WS_URL = "wss://api.nestjs-query.refine.dev/graphql";



function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
  
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider}
                liveProvider={liveProvider}
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                options={{
                  syncWithLocation:true,
                  warnWhenUnsavedChanges:true,
                  useNewQueryKeys: true,
                  liveMode: "auto"

                }
                }

              >
                <Routes>
              {/* <Route index element={<WelcomePage/>} /> */}
              <Route index element={<Login/>} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
          </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
