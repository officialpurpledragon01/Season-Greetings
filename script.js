function getValues() {
         var firstName = document.getElementsByName("firstName")[0].value;
         var lastName = document.getElementsByName("lastName")[0].value;
         var fullName = "Your Name Is " + firstName + " " + "a.k.a " + " " + (lastName);
      			alert(fullName);	
      };
