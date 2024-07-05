import { Authenticated, Refine } from "@refinedev/core";
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
import { Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "../providers/authProvider";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { ColorModeContextProvider } from "../contexts/color-mode";

import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "../pages/dashboard/categories";
import { CertificastCreate, CertificastEdit, CertificastList, CertificastShow } from "../pages/dashboard/certificates";
import { ProjectCreate, ProjectEdit, ProjectList, ProjectShow } from "../pages/dashboard/projects";
import { UserCreate, UserEdit, UserList, UserShow } from "../pages/dashboard/users";
import { SkillCreate, SkillEdit, SkillList, SkillShow } from "../pages/dashboard/skills";
import { ContactsList,ContactsShow } from "../pages/dashboard/contacts";



import { ForgotPassword, Login} from '@/pages/dashboard/authPages';
import { Category, ContactMail, Person, TipsAndUpdates,FolderCopy, Star } from "@mui/icons-material";
import Dashbaord from "@/pages/dashboard";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DashboardSider from "../layout/dashboardSider";
import { DashboardHeader } from "../layout/dashboardHeader";
import { ResetPassword } from "@/pages/dashboard/authPages/resetPassword";

const RefineComponent = () => {

  const resources = [
    {
      name: "users",
      list: "dashboard/users",
      create: "dashboard/users/create",
      edit: "dashboard/users/edit/:id",
      show: "dashboard/users/show/:id",
      meta: {
        canDelete: true,
        icon: <Person />
      },
    },
    {
      name: "categories",
      list: "dashboard/categories",
      create: "dashboard/categories/create",
      edit: "dashboard/categories/edit/:id",
      show: "dashboard/categories/show/:id",
    
      meta: {
        
        canDelete: true,
        icon: <Category />
      },
    },
    {
      name: "projects",
      list: "dashboard/projects",
      create: "dashboard/projects/create",
      edit: "dashboard/projects/edit/:id",
      show: "dashboard/projects/show/:id",
      meta: {
        canDelete: true,
        icon: <FolderCopy />
      },
    },
    {
      name: "contacts",
      list: "dashboard/contacts",
      show: "dashboard/contacts/show/:id",
      
      meta: {
        canDelete: true,
        icon: <ContactMail />
      },
    },
    {
      name: "skills",
      list: "dashboard/skills",
      create: "dashboard/skills/create",
      edit: "dashboard/skills/edit/:id",
      show: "dashboard/skills/show/:id",
      meta: {
        canDelete: true,
        icon: <TipsAndUpdates />
      },
    },
    {
      name: "certificates",
      list: "dashboard/certificates",
      create: "dashboard/certificates/create",
      edit: "dashboard/certificates/edit/:id",
      show: "dashboard/certificates/show/:id",
      meta: {
        canDelete: true,
        icon: <Star />
      },
    },

  ]
  return (
    <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider >
              <LocalizationProvider dateAdapter={AdapterDayjs}  >
                <Refine
            
                  dataProvider={dataProvider(import.meta.env.VITE_API_URL)}
                  notificationProvider={notificationProvider}
                  routerProvider={routerBindings}
                  authProvider={authProvider}
                  resources={resources}
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
                          fallback={<CatchAllNavigate to="/dashboard/login" />}
                        >
                          <ThemedLayoutV2 
                            Header={() => <DashboardHeader sticky />} 
                            Sider={() => <DashboardSider />} >           
                            <Outlet />
                          </ThemedLayoutV2>
                        </Authenticated>
                      }
                    >
                      <Route      
                        index
                        element={ <Dashbaord />}
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
                          <Route path="create" element={<CertificastCreate />} />
                          <Route path="edit/:id" element={<CertificastEdit />} />
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
                      <Route path="/forgetPassword" element={<ForgotPassword />} />
                      <Route path="/reset-password/:token" element={<ResetPassword />} />

                    </Route>
                  </Routes>

                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                </Refine>
              </LocalizationProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
    </RefineKbarProvider>
  )
}

export default RefineComponent

