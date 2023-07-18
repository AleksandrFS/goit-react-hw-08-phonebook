import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/userMenu"

export const AppBar = () => {
    return (
        <>
            <Navigation/>
            {/* <UserMenu /> */}
            <AuthNav/>
            
        </>
    )
}