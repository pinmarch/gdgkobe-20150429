;

angular.module('app', [])
  .filter('revcomp', function() {
    return function(value) {
      var dic = { 'A': 'T', 'a': 't', 'T': 'A', 't': 'a',
                   'G': 'C', 'g': 'c', 'C': 'G', 'c': 'g' };
      value = value || '';
      // ($value = join "", reverse(split //, uc($value))) =~ tr/ATGCatgc/TACGtacg/;
      return value.split('').map(function(s) {
        return dic[s] || 'N';
      }).reverse().join("");
    };
  });
