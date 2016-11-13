angular.module('4_years_of_fun', ['ngMaterial',angularDragula(angular)])
.controller('MainController', function($scope) {
	$scope.name = "Narek";
	$scope.certificates = [];
	$scope.selectedItemChange;
	  	var years = ["Fall 2016","Spring 2017","Fall 2017","Spring 2018",
  				  "Fall 2018", "Spring 2019", "Fall 2020", "Spring 2020"];
  	$scope.termObjects = years.map(function(yearTitle) {
  		return {
  			title:yearTitle,
  			courses:["course1","course2"]
  		}
  	});
})
.controller('InputController', InputController)
.controller('ScheduleController', ['$scope','dragulaService',ScheduleController])
.directive('test', function() {
  return {
    template: 'Name: {{name}} Address: {{1 + 2}}'
  };
});

 function InputController ($timeout, $q, $log) {
    var self = this;
    self.majors        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    

    self.newMajor = newMajor;

    function newMajor(newMajor) {
      alert("Sorry! You'll need to create a Constitution for " + newMajor + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.majors.filter( createFilterFor(query) ) : self.majors,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      //$log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
    	var major = database[item.code];
    	console.log(self.$parent.termObjects);
      $log.info('Item changed to ' + JSON.stringify(item));
    }
    function selectedCertificateChange(item) {
      $log.info('Certificate changed to ' + JSON.stringify(item));
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allMajors = majors

      return Object.keys(majors).map(function(el) {
    	return {
    		code:el,
    		value:majors[el].toLowerCase(),
    		display:majors[el]
    	}
    }
    );}

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(major) {
        return (major.value.indexOf(lowercaseQuery) === 0);
      };

    }
}




 function ScheduleController ($scope,  dragulaService) {
    var self = this;

    dragulaService.options($scope, 'third-bag', {
      copy: false
    });

}


  // helpers
  var majors = {
	"AAS": "African American Studies",
	"AFS": "African Studies",
	"AMS": "American Studies",
	"ANT": "Anthropology",
	"AOS": "Atmospheric &amp; Oceanic Sciences",
	"APC": "Appl and Computational Math",
	"ARA": "Arabic",
	"ARC": "Architecture",
	"ART": "Art and Archaeology",
	"AST": "Astrophysical Sciences",
	"ATL": "Atelier",
	"BCS": "Bosnian-Croatian-Serbian",
	"CBE": "Chemical and Biological Engr",
	"CEE": "Civil and Environmental Engr",
	"CGS": "Cognitive Science",
	"CHI": "Chinese",
	"CHM": "Chemistry",
	"CHV": "Center for Human Values",
	"CLA": "Classics",
	"CLG": "Classical Greek",
	"COM": "Comparative Literature",
	"COS": "Computer Science",
	"CTL": "Center for Teaching &amp; Learning",
	"CWR": "Creative Writing",
	"CZE": "Czech",
	"DAN": "Dance",
	"EAS": "East Asian Studies",
	"ECO": "Economics",
	"ECS": "European Cultural Studies",
	"EEB": "Ecology and Evol Biology",
	"EGR": "Engineering",
	"ELE": "Electrical Engineering",
	"ENE": "Energy Studies",
	"ENG": "English",
	"ENT": "Entrepreneurship",
	"ENV": "Environmental Studies",
	"EPS": "Contemporary European Politics",
	"FIN": "Finance",
	"FRE": "French",
	"FRS": "Freshman Seminars",
	"GEO": "Geosciences",
	"GER": "German",
	"GHP": "Global Health &amp; Health Policy",
	"GLS": "Global Seminar",
	"GSS": "Gender and Sexuality Studies",
	"HEB": "Hebrew",
	"HIN": "Hindi",
	"HIS": "History",
	"HLS": "Hellenic Studies",
	"HOS": "History of Science",
	"HPD": "History/Practice of Diplomacy",
	"HUM": "Humanistic Studies",
	"ISC": "Integrated Science Curriculum",
	"ITA": "Italian ",
	"JDS": "Judaic Studies ",
	"JPN": "Japanese ",
	"JRN": "Journalism ",
	"KOR": "Korean ",
	"LAO": "Latino Studies ",
	"LAS": "Latin American Studies ",
	"LAT": "Latin ",
	"LCA": "Lewis Center for the Arts ",
	"LIN": "Linguistics ",
	"MAE": "Mech and Aerospace Engr ",
	"MAT": "Mathematics ",
	"MED": "Medieval Studies ",
	"MOD": "Media and Modernity ",
	"MOG": "Modern Greek ",
	"MOL": "Molecular Biology ",
	"MSE": "Materials Science and Engr ",
	"MTD": "Music Theater ",
	"MUS": "Music ",
	"NES": "Near Eastern Studies ",
	"NEU": "Neuroscience ",
	"ORF": "Oper Res and Financial Engr ",
	"PAW": "Ancient World ",
	"PER": "Persian ",
	"PHI": "Philosophy ",
	"PHY": "Physics ",
	"PLS": "Polish ",
	"POL": "Politics ",
	"POP": "Population Studies ",
	"POR": "Portuguese ",
	"PSY": "Psychology ",
	"QCB": "Quantitative Computational Bio ",
	"REL": "Religion ",
	"RES": "Russian, East Europ, Eurasian ",
	"RUS": "Russian ",
	"SAN": "Sanskrit ",
	"SAS": "South Asian Studies ",
	"SLA": "Slavic Languages and Lit ",
	"SML": "Statistics &amp; Machine Learning ",
	"SOC": "Sociology ",
	"SPA": "Spanish ",
	"STC": "Science and Technology Council ",
	"SWA": "Swahili ",
	"THR": "Theater ",
	"TPP": "Teacher Preparation ",
	"TRA": "Translation, Intercultural Com ",
	"TUR": "Turkish ",
	"TWI": "Twi ",
	"URB": "Urban Studies ",
	"URD": "Urdu ",
	"VIS": "Visual Arts ",
	"WRI": "Princeton Writing Program ",
	"WWS": "Woodrow Wilson School "
};

var database = {
	"COS":{
		groupName:"Prerequisites",
		id:"prereqs",
		courses:[
		{courseGroup:["cos126","cos125"],choose:1},
		{courseGroup:["cos226"],choose:1},
		{courseGroup:["cos217"],choose:1}]
	}
};
