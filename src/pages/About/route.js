import About from '.'
import { Help } from './views'

const routes = [
  {
    path: '/about',
    element: <About />,
    title: 'About'
    // children: [
    //   {
    //     path: 'help',
    //     element: <Help />
    //   }
    // ]
  },
  {
    path: '/about/help',
    element: <Help />,
    title: 'Help'
  }
]

export default routes
