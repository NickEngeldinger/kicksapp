angular.module('kicksapp').service('PeopleService', function($http, $httpParamSerializerJQLike) {
  var service = {
    getAllPeople: function() {
      return $http.get('http://192.168.101.158:5000/kicks', { cache: true }).then(function(resp) {
        return resp.data.kicks;
      });
    },
    
    getPerson: function(id) {
      function kickMatchesParam(kick) {
        return kick.id === id;
      }
      
      return service.getAllKicks().then(function (kicks) {
        return kicks.find(kickMatchesParam)
      });
    },

    addKick: function(form) {
      var postData = $httpParamSerializerJQLike({
        kName: form.kickName,
        model: form.model,
        brand: form.brand,
      });
      var config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };
      //return $http.post('http://putsreq.com/AbUDdMWcVW77rVrdNyBe', postData, config)
      return $http.post('http://192.168.101.158:5000/kicks', postData, config)
        .success(function(data, status) {
          console.log(data)
          console.log(status)
          if (data === 'added') {
            console.log('IT WAS ADDED')
            //Clear form
            form.kName = '';
            form.model = '';
            form.brand = '';
            //Add dismissable message that kick has been successfully added with link to new kick
          } else if (status !== 200) {
            console.log('THERE WAS A SERVER PROBLEM')
            //message about server error
          } else {
            console.log('IT WAS NOT ADDED')
            //Add message about process error
          }
          return data;
        });
    }
  }
  
  return service;
})