import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/categories";
import { CertificastList, CertificastShow } from "./pages/certificates";
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from "./pages/projects";
import { UserCreate, UserEdit, UserList, UserShow } from "./pages/users";
import { SkillCreate, SkillEdit, SkillList, SkillShow } from "./pages/skills";
import { ContactsList,ContactsShow } from "./pages/contacts";


import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Category, ContactMail, Person, TipsAndUpdates,FolderCopy, Star } from "@mui/icons-material";
import Home from "./pages/home/Home";

import '@/config/firebaseConfig';


function App() {

  
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider(import.meta.env.VITE_API_URL)}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                
                resources={[
                  {
                    name: "users",
                    list: "/users",
                    create: "/users/create",
                    edit: "/users/edit/:id",
                    show: "/users/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <Person />
                    },
                  },
                  {
                    name: "categories",
                    list: "/categories",
                    create: "/categories/create",
                    edit: "/categories/edit/:id",
                    show: "/categories/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <Category />
                    },
                  },
                  {
                    name: "projects",
                    list: "/projects",
                    create: "/projects/create",
                    edit: "/projects/edit/:id",
                    show: "/projects/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <FolderCopy />
                    },
                  },
                  {
                    name: "contacts",
                    list: "/contacts",
                    show: "/contacts/show/:id",
                    
                    meta: {
                      canDelete: true,
                      icon: <ContactMail />
                    },
                  },
                  {
                    name: "skills",
                    list: "/skills",
                    create: "/skills/create",
                    edit: "/skills/edit/:id",
                    show: "/skills/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <TipsAndUpdates />
                    },
                  },
                  {
                    name: "certificates",
                    list: "/certificates",
                    create: "/certificates/create",
                    edit: "/certificates/edit/:id",
                    show: "/certificates/show/:id",
                    meta: {
                      canDelete: true,
                      icon: <Star />
                    },
                  },

                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "ShBqPc-kn6dWT-A8UKZq",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2 Header={() => <Header sticky />}>
                          <Outlet />
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={ <Home />}
                    />

                      <Route path="/users">
                        <Route index element={<UserList />} />
                        <Route path="create" element={<UserCreate />} />
                        <Route path="edit/:id" element={<UserEdit />} />
                        <Route path="show/:id" element={<UserShow />} />
                      </Route>

                      <Route path="/categories">
                        <Route index element={<CategoryList />} />
                        <Route path="create" element={<CategoryCreate />} />
                        <Route path="edit/:id" element={<CategoryEdit />} />
                        <Route path="show/:id" element={<CategoryShow />} />
                      </Route>

                      <Route path="/projects">
                        <Route index element={<ProjectList />} />
                        <Route path="create" element={<ProjectCreate />} />
                        <Route path="edit/:id" element={<ProjectEdit />} />
                        <Route path="show/:id" element={<ProjectShow />} />
                      </Route>

                      <Route path="/skills">
                        <Route index element={<SkillList />} />
                        <Route path="create" element={<SkillCreate />} />
                        <Route path="edit/:id" element={<SkillEdit />} />
                        <Route path="show/:id" element={<SkillShow />} />
                      </Route>

                      <Route path="/certificates">
                        <Route index element={<CertificastList />} />
                        <Route path="show/:id" element={<CertificastShow />} />
                      </Route>
                      

                      <Route path="/contacts">
                        <Route index element={<ContactsList />} />
                        <Route path="show/:id" element={<ContactsShow />} />
                      </Route>


                      <Route path="*" element={<ErrorComponent />} />
                    
                  </Route>
                  
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
