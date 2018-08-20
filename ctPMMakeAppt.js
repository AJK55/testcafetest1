import { Selector} from 'testcafe'
import { ClientFunction } from 'testcafe';


export default class MakeAppointment {
  constructor() {
    //this.facilitySelect  = Selector('#combo_facility');
    //this.facilityOption  = facilitySelect.find('option'); 
    this.facility = [
    this.tokyo                = 'Tokyo CURA Healthcare Center',
    this.hongKong             = 'Hongkong CURA Healthcare Center',
    this.seoul                = 'Seoul CURA Healthcare Center'
      ];

    this.healthcareProgram = [
    this.hpMedicare           = Selector('#radio_program_medicare'),
    this.hpMedicaid           = Selector('#radio_program_medicaid'),
    this.hpNone               = Selector('#radio_program_none'),
      ];
    
    this.readmissioncCheckbox = Selector('#chk_hospotal_readmission');
    this.visitDate            = Selector('#txt_visit_date.form-control');
    this.nextMonth            = Selector('html body div.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-top div.datepicker-days table.table-condensed thead tr th.next');
    this.prevMonth            = Selector('.datepicker-days > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(2) > th:nth-child(1)');
    this.comment              = Selector('#txt_comment');
    this.submit               = Selector('#btn-book-appointment');
    this.apptPage             = 'https://katalon-demo-cura.herokuapp.com/#appointment';
    this.apptPageHeader       = 'Make Appointment';
    this.commentText          = 'This is a test for comments.';
    
    this.confPageElements = [
    this.confHeaderE      = Selector('div.col-xs-12:nth-child(1) > h2:nth-child(1)'),
    this.confSubHeadE     = Selector('.lead'),
    this.confFacility     = Selector('#facility'),
    this.confReadmission  = Selector('#hospital_readmission'),
    this.confVisitDate    = Selector('#visit_date'),
    this.confComment      = Selector('#comment'),
    this.confHP           = Selector('#program'),
    this.HomeButton       = Selector('.btn-default')
    
      ];
    
    this.confPageText = [
    this.confPage         = 'https://katalon-demo-cura.herokuapp.com/appointment.php#summary',
    this.confHeaderT      = 'Appointment Confirmation',   
    this.confSubHeadT     = 'Please be informed that your appointment has been booked as following:'
      ];
  }
}
