import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Welcome to my page about Lexington/s eviction crisis. This page will serve as a UI for understanding data concerning the eviction rate in Lexington from the pandemic until the end of 2021.'], ' ');

  btn.innerHTML = 'Click this button to go to the map';
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());