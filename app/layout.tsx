import "@/styles/globals.css"
import { Props } from "next/script"
export const metadata ={
  title:"PasswordManager",
  description:'Save the Password and Pin all the web sites for single user accounts'
}
const RootLayout = ({children}: Props) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
