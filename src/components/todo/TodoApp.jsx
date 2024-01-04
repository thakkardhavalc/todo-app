import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ErrorComponent } from './ErrorComponent'
import { HeaderComponent } from './HeaderComponent'
import { ListTodosComponent } from './ListTodosComponent'
import { LoginComponent } from './LoginComponent'
import { LogoutComponent } from './LogoutComponent'
import './TodoApp.css'
import { WelcomeComponent } from './WelcomeComponent'
import { AuthProvider, useAuth } from './security/AuthContext'

function AuthenticatedRoute( { children }) {

    const authContext = useAuth()

    if (authContext.isAuthenticated)
        return children

    return <Navigate to={"/"} />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                            }>
                        </Route>

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                            }>
                        </Route>

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                            }>
                        </Route>

                        <Route path='/*' element={<ErrorComponent />}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}