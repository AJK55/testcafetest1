import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';


export default class Functions {
  constructor() {
    this.getPageUrl             = ClientFunction(() => window.location.href);
  }
}
