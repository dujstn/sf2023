// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Demo',
    path: '/dashboard/demo',
  },
  { title: 'About', path: '/dashboard/about' },
  {title: 'Chem 12', path: '/dashboard/chemtwelve'}
];

export default navConfig;
