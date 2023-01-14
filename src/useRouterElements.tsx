//core
import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

//pages
const ListPost = lazy(() => import('./pages/listPost/ListPost'))
const CreatePost = lazy(() => import('./pages/createPost/CreatePost'))
const Setting = lazy(() => import('./pages/setting/Setting'))
// const Login = lazy(() => import('./pages/login/Login'))
import Login from './pages/login/Login'

//component
import Layout from './component/layout/Layout'

//config
import { PathName } from './config/path.name'

export default function useRouterElements() {
  const routeElements = useRoutes([
    {
      path: '',
      // element: <RejectedRoute />,
      children: [
        {
          path: PathName.home,
          element: (
            <Layout>
              <Suspense>
                <ListPost />
              </Suspense>
            </Layout>
          )
        },
        {
          path: PathName.create,
          element: (
            <Layout>
              <Suspense>
                <CreatePost />
              </Suspense>
            </Layout>
          )
        },
        {
          path: PathName.setting,
          element: (
            <Layout>
              <Suspense>
                <Setting />
              </Suspense>
            </Layout>
          )
        },
        {
          path: PathName.login,
          element: (
            <Layout>
              {/* <Suspense> */}
              <Login />
              {/* </Suspense> */}
            </Layout>
          )
        }
      ]
    }
  ])
  return routeElements
}
