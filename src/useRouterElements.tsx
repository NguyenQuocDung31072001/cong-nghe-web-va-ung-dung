import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './component/layout/Layout'
import { PathName } from './config/path.name'
const ListPost = lazy(() => import('./pages/listPost/ListPost'))

export default function useRouterElements() {
  const routeElements = useRoutes([
    {
      path: '',
      // element: <RejectedRoute />,
      children: [
        {
          path: PathName.list,
          element: (
            <Layout>
              <Suspense>
                <ListPost />
              </Suspense>
            </Layout>
          )
        }
      ]
    }
  ])
  return routeElements
}
