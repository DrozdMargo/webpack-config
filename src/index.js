import _ from 'lodash';
import sum from './sum';
import './image_viewer';

console.log(sum(2, 5));

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
 document.body.appendChild(component());