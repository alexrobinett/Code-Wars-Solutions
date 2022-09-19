// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task

// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database

// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied


// SOLUTION

function greet(language) {
    let greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
      }
      
      if (language == "english"){
        return greetings.english
      }else if (language == "czech"){
        return greetings.czech
      }else if (language == "danish"){
        return greetings.danish
      }else if (language == "dutch"){
        return greetings.dutch
      }else if (language == "estonian"){
        return greetings.estonian
      }else if (language == "flemish"){
        return greetings.flemish
      }else if (language == "french"){
        return greetings.french
      }else if (language == "german"){
        return greetings.german
      }else if (language == "irish"){
        return greetings.irish
      }else if (language == "italian"){
        return greetings.italian
      }else if (language == "latvian"){
        return greetings.latvian
      }else if (language == "lithuanian"){
        return greetings.lithuanian
      }else if (language == "polish"){
        return greetings.polish
      }else if (language == "spanish"){
        return greetings.spanish
      }else if (language == "swedish"){
        return greetings.swedish
      }else if (language == "welsh"){
        return greetings.welsh
      }else if(language == "finnish"){
        return greetings.finnish
      }else {return "Welcome"}
      
    }


// TEST

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
  Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
  Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    });
  });
  

  // push test