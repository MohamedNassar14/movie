import { Pipe, PipeTransform } from '@angular/core';
import { Media } from './media';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(media:Media[], title:string):any[]{
    return media.filter((item)=> (item.title || item.name).toLowerCase().includes(title.toLocaleLowerCase()));
  }

}
