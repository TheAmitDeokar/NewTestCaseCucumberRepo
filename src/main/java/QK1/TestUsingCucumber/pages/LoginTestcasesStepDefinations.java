package QK1.TestUsingCucumber.pages;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import junit.framework.Assert;

public class LoginTestcasesStepDefinations
{
	
	LoginPage loginpage;
	@Given("^User is on Login screen$")
	public void User_is_on_Login_screen() 
	{
	   
		loginpage=new LoginPage("CHROME");
	}
	
	@When("^User enters \"([^\"]*)\" in UserName field$")
	public void EnterUserName(String UserName) 
	{
	
		loginpage.EnterUserName(UserName);
	}

	@When("^User enters \"([^\"]*)\" in Password field$")
	public void EnterPassword(String Password) 
	{
	
		loginpage.EnterPassword(Password);
	}

	@When("^User clicks on Login button$")
	public void ClickLogin_button() 
	{
		loginpage.ClickLoginButton();
	}

	@Then("^User should enter into an application$")
	public void CheckIfUserisLoggedIn() {
	    
	    
	}

	@Then("^Login Error:([^\"]*) should appear$")
	public void Login_Error_Password_cannot_be_empty_should_appear(String Error) {
	 
	    String LoginError=loginpage.GetLoginError();
	    Assert.assertEquals(Error, LoginError);
	}


	@When("^User enters ([^\"]*) in UserName field$")
	public void EnterUserName1(String Uname) {
	
	    loginpage.EnterUserName(Uname);
	}

	@When("^User enters ([^\"]*) in Password field$")
	public void EnterPassword1(String Password) {
	   
	    loginpage.EnterPassword(Password);
	}

}
