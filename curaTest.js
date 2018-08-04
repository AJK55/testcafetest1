import { Selector} from 'testcafe'
import Page from './ctPageModel';
import Credentials from './ctPMCredentials';
import Functions from './ctPMFunctions';
import Profile from './ctPMProfile'
import MakeAppointment from './ctPMMakeAppt';

const page      = new Page();
const cred      = new Credentials();
const func      = new Functions();
const pro       = new Profile();
const appt      = new MakeAppointment();

fixture('CURA Healthcare Service Test')
  .page(page.homeURL);

test('Login and go to Profile Page', async t=> {
  await t
      await t
    .click(page.sideButton)
  await t
    .click(page.sideLogin)
  await t
    .expect(func.getPageUrl()).eql(page.loginURL);
  await t
    .typeText(page.loginUser, cred.validUsername)
    .typeText(page.loginPass, cred.validPassword)
    .click(page.loginLogin)
  await t
    .click(page.sideButton)
  await t
    .click(page.sideProfile)
  await t
    .expect(func.getPageUrl()).eql(pro.proPageURL)
    .expect(pro.proPageHeaderE.innerText).eql(pro.proPageHeaderT)
    .expect(pro.proPageSubHE.innerText).eql(pro.proPageSubHT)
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
  await t
    .click(appt.HomeButton)
  await t
    .expect(func.getPageUrl()).eql(page.homeURL);
})

test('Validate Options in Side Menu Bar Test', async t=> {
  await t
    .click(page.sideButton)
  await t
    //.expect(sideButton.innerText).contains('class="active"')  Try to figure this out 
    .expect(page.sideMenuHeader.innerText).eql('CURA Healthcare')
    .expect(page.sideHome.innerText).eql('Home')
    .expect(page.sideLogin.innerText).eql('Login')
});

test('Validate Side Menu Bar "Home" Directs to Proper Page Test', async t=> {
  await t
    .click(page.sideButton)
  await t
    .click(page.sideHome)
  await t
    .expect(func.getPageUrl()).eql(page.homeURL);
});

test('Validate Side Menu Bar "Login" Directs to Proper Page Test', async t=> {
  await t
    .click(page.sideButton)
  await t
    .click(page.sideLogin)
  await t
    .expect(func.getPageUrl()).eql(page.loginURL);
});

/*
test('Validate Home Page Title Test', async t=> {
  await t
    .expect(page.pageTitle.innerText).eql(page.homePageTitle)
});

test('Validate Home Page Header Test', async t=> {
  await t
    .expect(page.homePageHeader.innerText).eql('CURA Healthcare Service')
});

test('Validate Home Page SubHeader Test', async t=> {
  await t
    .expect(page.homePageSubHeader.innerText).eql('We Care About Your Health')
});

test('Validate Home Page Address Company Name Test', async t=> {
  await t
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
});

test('Validate Home Page Address Test', async t=> {
  await t
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
});

test('Validate Home Page Phone Number Test', async t=> {
  await t
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
});

test('Validate Home Page Email Address Test', async t=> {
  await t
    .expect(page.email.innerText).eql('info@katalon.com')
});

test('Validate Home Page Copyright Test' , async t=> {
  await t
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
});
*/
///Rather than indiv tests, we can create 1 test for Home Page Content
test('Validate Home Page Content', async t=> {
    await t
    .expect(page.pageTitle.innerText).eql(page.homePageTitle)
    .expect(page.homePageHeader.innerText).eql('CURA Healthcare Service')
    .expect(page.homePageSubHeader.innerText).eql('We Care About Your Health')
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
});

test("Validate 'Make Appointment' Directs to Correct Page Test", async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .expect(func.getPageUrl()).eql(page.loginURL);    
});

test('Login Page Title Validation Test from "Make Appointment" Button', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .expect(page.pageTitle.innerText).eql(page.loginPageTitle);
});

test('Login Page Content Test', async t=> {
  await t
    .click(page.sideButton)
  await t
    .click(page.sideLogin)
  await t
    .expect(page.loginPageHeader.innerText).eql('Login')
    .expect(page.loginPageSubHeader.innerText).eql('Please login to make appointment.')
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
  await t
    .click(page.sideButton)
  await t
    .click(page.sideHome)
  await t
    .click(page.makeApptButton)
  await t
    .expect(page.loginPageHeader.innerText).eql('Login')
    .expect(page.loginPageSubHeader.innerText).eql('Please login to make appointment.')
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
});

test('Login w/ Valid Credentials, Press Enter', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .typeText(page.loginUser, cred.validUsername)
    .typeText(page.loginPass, cred.validPassword)
    .pressKey('enter')
  await t
    .expect(func.getPageUrl()).eql('https://katalon-demo-cura.herokuapp.com/#appointment')
    .expect(page.makeApptPgHeader.innerText).eql('Make Appointment')
});

test('Login w/ Valid Credentials, Click Login', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .typeText(page.loginUser, cred.validUsername)
    .typeText(page.loginPass, cred.validPassword)
    .click(page.loginLogin)
  await t
    .expect(func.getPageUrl()).eql('https://katalon-demo-cura.herokuapp.com/#appointment')
    .expect(page.makeApptPgHeader.innerText).eql('Make Appointment')
});


test('Login w/ Bad UserName & Password, then Correct for Login', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .typeText(page.loginUser, cred.validUsername)
    .typeText(page.loginUser, 'test', { caretPos: 2})
    .typeText(page.loginPass, cred.validPassword)
    .pressKey('home right . delete delete delete delete')
    .pressKey('enter')
  await t
    .expect(page.loginFailedElement.innerText).eql(page.loginFailedMessage)
  await t
    .typeText(page.loginUser, cred.validUsername, { replace: true})
    .typeText(page.loginPass, cred.validPassword, { replace : true})
    .click(page.loginLogin)
  await t
    .expect(func.getPageUrl()).eql('https://katalon-demo-cura.herokuapp.com/#appointment')
    .expect(page.makeApptPgHeader.innerText).eql('Make Appointment')
});

test('Login Page Scroll Test', async t=> {
  await t
    .click(page.makeApptButton)
  await t
    .expect(page.loginPageHeader.innerText).eql('Login')
    .expect(page.loginPageSubHeader.innerText).eql('Please login to make appointment.')
    .expect(page.addressCompany.innerText).eql('CURA Healthcare Service')
    .expect(page.address.innerText).eql('Atlanta 550 Pharr Road NE Suite 525\nAtlanta, GA 30305')
    .expect(page.phone.innerText).contains('(678) 813-1KMS')
    .expect(page.email.innerText).eql('info@katalon.com')
    .expect(page.copyright.innerText).eql('Copyright © CURA Healthcare Service 2018')
  await t
    .hover(page.toTop)
  await t
    .click(page.toTop)
})

