export default class list {
    constructor(elem1, elem2, elem3) {
        this.elem1 = elem1;
        this.elem2 = elem2;
        this.elem3 = elem3;
    }

    render () {
        return `<ul> <li>${this.elem1}</li> <li>${this.elem2}</li> <li>${this.elem3}</li> </ul>`;
    }
}