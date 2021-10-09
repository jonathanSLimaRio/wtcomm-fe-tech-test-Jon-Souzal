import angular from 'angular';
import LINKS from '../../../../common/links.json';
const { Instructions, Swagger, Design } = LINKS;

angular
  .module('feTechTestAngularjs', [])
  .controller('FooterController', function () {
    var footerLinksList = this;
    footerLinksList.links = [Instructions, Swagger, Design].map(
      (value) => value
    );
  });
