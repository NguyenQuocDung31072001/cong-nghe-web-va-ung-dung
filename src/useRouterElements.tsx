import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
//const Login = lazy(() => import('./pages/Login'))
export default function useRouterElements() {
  const routeElements = useRoutes([
    // {
    //   path: '',
    //   element: <RejectedRoute />,
    //   children: [
    //     {
    //       path: path.login,
    //       element: (
    //         <RegisterLayout>
    //           <Suspense>
    //             <Login />
    //           </Suspense>
    //         </RegisterLayout>
    //       )
    //     },
    //     {
    //       path: path.register,
    //       element: (
    //         <RegisterLayout>
    //           <Suspense>
    //             <Register />
    //           </Suspense>
    //         </RegisterLayout>
    //       )
    //     }
    //   ]
    // }
  ])
  return routeElements
}
