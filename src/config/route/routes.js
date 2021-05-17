
import UserRoute from '../../app/auth/UserRoute';
import AuthRoute from '../../app/auth/AuthRoute';
import ProductRoute from '../../app/product/ProductRoute';


const Routes = [
  {
    url: 'users',
    route: UserRoute
  },
  {
    url: 'auth',
    route: AuthRoute,
    gaurd: false
  },
  {
    url: 'product',
    route: ProductRoute,
    gaurd: false
  }

];

export default Routes;
