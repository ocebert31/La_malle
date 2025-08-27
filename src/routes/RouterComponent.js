import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import { Routes, Route } from 'react-router-dom';
import ServiceListPage from '../pages/ServiceListPage.js';
import NewServicePage from '../pages/NewServicePage.js';
import ServicePage from '../pages/ServicePage.js';
import RegisterPage from '../pages/RegisterPage.js';
import LoginPage from '../pages/LoginPage.js';
import ConfirmationEmailPage from '../pages/ConfirmationEmailPage.js';
import ProfilePage from '../pages/ProfilePage.js';
import ResetPasswordPage from '../pages/ResetPasswordPage.js';
import ResetPasswordFormPage from '../pages/ResetPasswordFormPage.js';
import DashboardPage from '../pages/DashboardPage.js';
import { getUserData } from '../services/authenticationService.js';
import RoleRoute from './RoleRoute.js';
import AuthenticatedRoute  from './AuthenticatedRoute.js';
import ErrorAlert from '../components/Notifications/ErrorAlert.js';
import BiographyPage from '../pages/BiographyPage.js';
import ContactForm from '../pages/ContactPage.js';

function RouterComponent() {
    const location = useLocation();
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const { user, updateUser, token } = useAuth();

    useEffect(() => {
      if (user) {
        fetchUserData();
      }
    }, [location]);

    const fetchUserData = async () => {
        try {
            const userData = await getUserData(token);
            updateUser(userData)
        } catch {
            setShowErrorAlert('Erreur lors de la récupération de vos données utilisateur. Veuillez vous reconnecter')
        }
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<BiographyPage/>} />
                <Route path="/services" element={<ServiceListPage type='all' />} />
                <Route path="/favorites" element={<ServiceListPage type='favorites'/>} />
                <Route path="/services/:id" element={<ServicePage />} />
                <Route path="/services/new" element={<RoleRoute element={NewServicePage} requiredRoles={['author', 'admin']} />} />
                <Route path="/registration" element={<AuthenticatedRoute  element={RegisterPage} hasToken={false}/>} />
                <Route path="/login" element={<AuthenticatedRoute  element={LoginPage} hasToken={false}/>} />
                <Route path="/confirmation/:token" element={<ConfirmationEmailPage isEmailUpdate={false}/>}/>
                <Route path="/profile" element={<AuthenticatedRoute  element={ProfilePage} hasToken={true}/>} />
                <Route path="/confirmation-update-email/:token" element={<ConfirmationEmailPage isEmailUpdate={true}/>}/>
                <Route path="/request-reset-password" element={<AuthenticatedRoute  element={ResetPasswordPage} hasToken={false}/>} />
                <Route path="/form-reset-password/:token" element={<ResetPasswordFormPage/>}/>
                <Route path="/dashboard" element={<RoleRoute element={DashboardPage} requiredRoles={['admin']} />} />
                <Route path="/contact" element={<ContactForm/>} />
            </Routes>
            {showErrorAlert && (<ErrorAlert message={showErrorAlert} onClose={() => setShowErrorAlert(false)}/>)}
        </div>
    );
}

export default RouterComponent;
