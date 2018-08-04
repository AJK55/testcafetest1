import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';


export default class Profile {
  constructor() {
    this.profilePageText = [
      this.proPageURL = 'https://katalon-demo-cura.herokuapp.com/profile.php#profile',
      this.proPageHeaderT   = 'Profile',
      this.proPageSubHT     = 'Under construction.'
      ];
    
    this.profilePageElements = [
      this.proPageHeaderE = Selector('.col-lg-12 > h2:nth-child(1)'),
      this.proPageSubHE   = Selector('p.lead:nth-child(2)')
    ];
  }
}
