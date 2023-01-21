// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'test page',
    path: '/dashboard/test',
  },
  { title: 'about', path: '/dashboard/about' },
];

export default navConfig;
