import express from 'express';
const router = express.Router();
import userRoute from '../routes/users.route.js';
import authRoute from '../routes/auth.route.js';
import onlineTestRoute from '../routes/onlineTest.route.js';
import jobOpeningRoute from '../routes/jobOpening,route.js';
import uploadResumeRoute from '../routes/resume.route.js';
import candidateRoute from '../routes/candidate.route.js';

const routes = [
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/onlineTest',
        route: onlineTestRoute
    },
    {
        path: '/jobOpening',
        route: jobOpeningRoute
    },
    {
        path: '/resume',
        route: uploadResumeRoute
    },
    {
        path: '/candidate',
        route: candidateRoute
    }
];

routes.forEach((route) => {
    router.use(route.path,route.route)
})
export default router;