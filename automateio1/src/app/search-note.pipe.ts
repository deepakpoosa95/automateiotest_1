import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNote'
})
export class SearchNotePipe implements PipeTransform {

  resultArray = [];
  transform(value: any, searchText: any) {
    this.resultArray = [];
    if (searchText == '') {
      return value;
    }
    let enteredSearch = searchText.toLowerCase();
    value.forEach(element => {
      if ((element.title.toLowerCase().indexOf(enteredSearch)) !== -1 || (element.description.toLowerCase().indexOf(enteredSearch)) !== -1) {
        this.resultArray.push(element);
      }
    });
    return this.resultArray;
  }

}
