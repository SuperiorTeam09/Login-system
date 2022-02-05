function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.userid.value == "AA" && form.pswrd.value == "TERM")
  {
    window.open("https://tech.gcpublic.ga/p/index.html")/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Username or Password")/*displays error message*/
  }
}
