import Navigation from "./Navigation";
export default function Homepage({
  isAuthenticated,
  handleAuthentication,
  setIsAuthenticated,
}) {
  return (
    <div>
      <Navigation
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
         handleAuthentication={handleAuthentication}

      />
    </div>
  );
}
