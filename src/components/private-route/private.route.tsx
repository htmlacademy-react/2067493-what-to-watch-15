import { Addresses, AutorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type TypePrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: TypePrivateRouteProps): JSX.Element {
  const { autorizationStatus, children } = props;
  return (
    autorizationStatus === AutorizationStatus.Auth ? children : <Navigate to={Addresses.SignIn} />
  );
}
