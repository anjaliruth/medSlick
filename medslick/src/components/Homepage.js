import Navigation from "./Navigation"
export default function Homepage({isAuthenticated, handleAuthentication, setIsAuthenticated}) {
    return(
        <div>
          <Navigation isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication} setIsAuthenticated={setIsAuthenticated}/>
        </div>
    )
}
