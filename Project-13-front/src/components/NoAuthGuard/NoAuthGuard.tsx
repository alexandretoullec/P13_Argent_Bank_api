import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

/**
 * @param props - The Child component is passed as a prop to the NoAuthGuard component
 * @returns {JSX.Element} - If the user is not logged in, the Child component is rendered. If the user is logged in, the user is redirected to the account page
 * @example
 * <NoAuthGuard Child={Login} />
 */
export const NoAuthGuard = ({ Child }: { Child: React.FC }): JSX.Element => {
  const user = useSelector(selectUser);

  return user ? <Navigate to="/user" /> : <Child />;
};
