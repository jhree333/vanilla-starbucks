import { createRouter } from "../core"
import Home from "./Home"
import Signin from "./Signin"

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/signin", component: Signin },
])
