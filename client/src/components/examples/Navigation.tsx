import Navigation from '../Navigation';

export default function NavigationExample() {
  return <Navigation onRequestDemo={() => console.log('Request demo clicked')} />;
}
