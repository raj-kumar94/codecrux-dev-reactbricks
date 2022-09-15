import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import ContactUsForm from './ContactUSForm';
import TitleAndDescription from './TitleAndDescription';
import TitleAndDescription2 from './TitleAndDescription2';

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  // Put here your other bricks...
  ContactUsForm,
  TitleAndDescription,
  TitleAndDescription2
]

export default bricks
