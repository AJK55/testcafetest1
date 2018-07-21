import { Selector} from 'testcafe'
import Page from './ctPageModel';
import Credentials from './ctPMCredentials';
import Functions from './ctPMFunctions';
import MakeAppointment from './ctPMMakeAppt';
import Today from './ctPMToday';
import History from './ctPMHistory'


const page      = new Page();
const cred      = new Credentials();
const func      = new Functions();
const appt      = new MakeAppointment();
const today     = new Today();
const hist      = new History();
const facilitySelect  = Selector('#combo_facility');
const facilityOption  = facilitySelect.find('option'); 

var hpArray           = appt.healthcareProgram.length;
var reAdmission;
var hp;  

fixture('CURA Healthcare Service Make Appointment and View History Test')
  .page(page.homeURL);


test('Book Appt Seoul, Readmission, None, Future Date', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .typeText(page.loginUser, cred.validUsername)
    .typeText(page.loginPass, cred.validPassword)
    .pressKey('enter')
  await t
    .expect(func.getPageUrl()).eql(appt.apptPage)
    .expect(page.makeApptPgHeader.innerText).eql(appt.apptPageHeader)
  await t
    .click(facilitySelect)
    .click(facilityOption.withText(appt.hongKong))
    .expect(facilitySelect.value).eql(appt.hongKong)
    .click(facilitySelect)
    .click(facilityOption.withText(appt.tokyo))
    .expect(facilitySelect.value).eql(appt.tokyo)
    .click(facilitySelect)
    .click(facilityOption.withText(appt.seoul))
    .expect(facilitySelect.value).eql(appt.seoul)
  await t
    .expect(appt.readmissioncCheckbox.checked).notOk()
    .click(appt.readmissioncCheckbox)
    .expect(appt.readmissioncCheckbox.checked).ok()
    
  if(await appt.readmissioncCheckbox.checked === true) {
    reAdmission = 'Yes'
  }
  else {
    reAdmission = 'No'
  };
  
  await t
    .click(appt.hpNone)
    .expect(appt.hpNone.checked).ok()
    .expect(appt.hpMedicare.checked).notOk()
    .expect(appt.hpMedicaid.checked).notOk()


  if (appt.hpMedicare.checked === true ) {
    hp = 'Medicare'
  }
  else if (appt.hpMedicaid.checked === true) {
    hp = 'Medicaid'
  }
  else {
    hp = 'None'
  }
    

  await t
    .typeText(appt.visitDate, today.today)
    .expect(appt.visitDate.value).eql(today.today)
  await t
    .click(appt.visitDate)
  await  t
    .click(appt.prevMonth)
    .click(appt.nextMonth)
    .click(appt.nextMonth)
    .click(appt.nextMonth)
    .typeText(appt.visitDate, today.today, { replace: true})
    .expect(appt.visitDate.value).eql(today.today)
  await t
    .typeText(appt.comment, appt.commentText)
    .expect(appt.comment.value).eql(appt.commentText)
  await t
    .click(appt.submit)
  await t
    .expect(func.getPageUrl()).eql(appt.confPage)
    .expect(appt.confHeaderE.innerText).eql(appt.confHeaderT)
    .expect(appt.confSubHeadE.innerText).eql(appt.confSubHeadT)
    .expect(appt.confFacility.innerText).eql(appt.seoul)
    .expect(appt.confReadmission.innerText).eql(reAdmission)
    .expect(appt.confHP.innerText).eql(hp)
    .expect(appt.confVisitDate.innerText).eql(today.today)
    .expect(appt.confComment.innerText).eql(appt.commentText)
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
  await t
    .click(page.sideButton)
  await t
    .click(hist.sideHistory)
  await t
    .expect(hist.hisHeaderE.innerText).eql(hist.hisHeaderT)
    .expect(hist.hisDate.innerText).eql(today.today)
    .expect(hist.hisFacility.innerText).eql(appt.seoul)
    .expect(hist.hisReAdmission.innerText).eql(reAdmission)
    .expect(hist.hisHP.innerText).eql(hp)
    .expect(hist.hisComment.innerText).eql(appt.commentText)
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
  await t
    .click(appt.HomeButton)
  await t
    .click(appt.HomeButton)
    .expect(func.getPageUrl()).eql(page.homeURL);
  await t
    .click(page.sideButton)
  await t
    .click(hist.sideHomeLogout)
  await t
    .expect(func.getPageUrl()).eql(page.homeURL);
});
