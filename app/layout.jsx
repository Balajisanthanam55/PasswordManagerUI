import "@/styles/globals.css"
import { Props } from "next/script"

import Nav from "@/components/Nav"
import Provide from "@/components/Provide"
export const metadata ={
  title:"PasswordManager",
  description:'Save the Password and Pin all the web sites for single user accounts'
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provide>
        <div className="main">
          <div className="gradient"/>
        </div>
        <div className="app ">
          <Nav/>
          {children}
        </div>
        </Provide>
              </body>
    </html>
  )
}

export default RootLayout
