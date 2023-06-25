import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('Winnipeg Auto Repair Shop')
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Public />} />  {/* Home page (Public)*/}
        <Route path="login" element={<Login />} /> {/* Login page (Public)*/}
        <script>console.log("Above the PresitLogin Call")</script>
        {/* Start of Private routes*/}
        <Route element={<PersistLogin />}>
        <script>console.log("Below the PresitLogin Call")</script>
        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]}/>}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}> {/* Dash page (Private)*/}

                <Route index element={<Welcome />} /> {/* Dash page (Private)*/}
                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]}/>}>
                  <Route path="users">
                    <Route index element={<UsersList />} /> {/* User list page (Private)*/}
                    <Route path=":id" element={<EditUser />} /> {/* Edit user page (Private)*/}
                    <Route path="new" element={<NewUserForm />} />  {/* New user page (Private)*/}
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} /> {/* Notes list page (Private)*/}
                  <Route path=":id" element={<EditNote />} /> {/* Edit note page (Private)*/}
                  <Route path="new" element={<NewNote />} /> {/* New note page (Private)*/}
                </Route>

              </Route>{/* End Dash */}
            </Route>
          </Route>
        </Route> 
        {/* End of Private routes*/}
      </Route>
    </Routes>
  );
}

export default App;