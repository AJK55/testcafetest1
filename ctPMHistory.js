import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';


export default class History {
  constructor() {
    this.historyE = [
      this.sideHistory            = Selector('.sidebar-nav > li:nth-child(4) > a:nth-child(1)'),
      this.hisHeaderE             = Selector('.col-sm-12 > h2:nth-child(1)'),
      this.hisDate                = Selector('div.col-sm-offset-2:nth-child(1) > div:nth-child(1) > div:nth-child(1)'),
      this.hisFacility            = Selector('div.col-sm-offset-2:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)'),
      this.hisReAdmission         = Selector('div.col-sm-offset-2:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > p:nth-child(1)'),
      this.hisHP                  = Selector('div.col-sm-offset-2:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(8) > p:nth-child(1)'),
      this.hisComment             = Selector('div.col-sm-offset-2:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(11) > p:nth-child(1)'),
      this.sideHomeLogout         = Selector('.sidebar-nav > li:nth-child(6) > a:nth-child(1)')
      ];
    
    this.historyT = [
      this.hisHeaderT             = 'History'
    ];
  }
}