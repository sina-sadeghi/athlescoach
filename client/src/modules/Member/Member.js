import React from 'react';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import SportPlan from "./components/sportPlan/SportPlan";
import SportMoveList from "./components/sportMoveList/SportMoveList";
import ActivityRegistration from "./components/activityRegistration/ActivityRegistration";
import ChartPage from "./components/chart/Chart";
import Home from "./components/home/Home";

export default {
    routeProps: [
        {
            path: '/sign-up',
            Component: SignUp,
            isPrivate: false,
            header: false,
            footer: false,
        },{
            path: '/login',
            Component: Login,
            isPrivate: false,
            header: false,
            footer: false,
        },{
            path: '/profile',
            Component: Profile,
            isPrivate: true,
            header: true,
            footer: true,
        },{
            path: '/sport-plan',
            Component: SportPlan,
            isPrivate: true,
            header: true,
            footer: true,
        },{
            path: '/sport-moves',
            Component: SportMoveList,
            isPrivate: true,
            header: true,
            footer: true,
        },{
                path: '/activity-registration',
            Component: ActivityRegistration,
            isPrivate: true,
            header: true,
            footer: true,
        },{
            path: '/chart',
            Component: ChartPage,
            isPrivate: true,
            header: true,
            footer: true,
        },{
            path: '/',
            Component: Home,
            isPrivate: true,
            header: true,
            footer: true,
        }
    ]
}