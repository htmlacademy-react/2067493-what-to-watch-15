import MainPage from '../main-page/main-page';
import { TypePromoMovie } from '../../type';

type TypeAppProps = {
  promoMovie: TypePromoMovie;
}

export default function App(props: TypeAppProps): JSX.Element {
  return (
    <MainPage promoMovie={props.promoMovie}/>
  );
}
