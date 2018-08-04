import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';


export default class Page {
  constructor() {
    this.pageTitle              = Selector('title');
    this.homePageTitle          = 'CURA Healthcare Service';
    this.loginPageTitle         = 'CURA Healthcare Service';
    this.homePageHeader         = Selector('.text-vertical-center > h1:nth-child(1)');
    this.homePageSubHeader      = Selector('.text-vertical-center > h3:nth-child(2)');
    this.addressCompany         = Selector('.col-lg-10 > h4:nth-child(1) > strong:nth-child(1)');   
    this.address                = Selector('.col-lg-10 > p:nth-child(2)');
    this.phone                  = Selector('.list-unstyled > li:nth-child(1)');
    this.email                  = Selector('.list-unstyled > li:nth-child(2) > a:nth-child(2)');
    this.copyright              = Selector('.text-muted');
    this.makeApptButton         = '#btn-make-appointment';
    this.sideButton             = '.fa-bars';
    this.sideMenuHeader         = Selector('.sidebar-brand > a:nth-child(1)');
    this.sideHome               = Selector('.sidebar-nav > li:nth-child(3) > a:nth-child(1)');
    this.sideLogin              = Selector('.sidebar-nav > li:nth-child(4) > a:nth-child(1)');
    this.sideProfile            = Selector('.sidebar-nav > li:nth-child(5) > a:nth-child(1)');
    this.homeURL                = 'https://katalon-demo-cura.herokuapp.com/';
    this.loginURL               = 'https://katalon-demo-cura.herokuapp.com/profile.php#login';
    this.loginPageHeader        = Selector('.col-sm-12 > h2:nth-child(1)');
    this.loginPageSubHeader     = Selector('.lead');
    this.toTop                  = Selector('#to-top');
    this.loginUser              = '#txt-username';
    this.loginPass              = '#txt-password';
    this.makeApptPgHeader       = Selector('.col-sm-12 > h2:nth-child(1)');
    this.loginLogin             = Selector('#btn-login');
    this.loginFailedElement     = Selector('p.lead:nth-child(3)');
    this.loginFailedMessage     = 'Login failed! Please ensure the username and password are valid.';
  }
}

