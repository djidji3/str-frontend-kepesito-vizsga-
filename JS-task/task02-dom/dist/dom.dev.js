"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOuterLinks = changeOuterLinks;

function changeOuterLinks() {
  var navElem = document.querySelector('#link-list');
  var links = document.querySelectorAll('#link-list > a');
  links.forEach(function (elem) {
    if (elem.innerHTML.includes("outer-link")) {
      elem.target = "_blank";
      elem.innerHTML = "<strong>".concat(elem.innerHTML, "</strong>");
    }
  });
  navElem.style.di;
}