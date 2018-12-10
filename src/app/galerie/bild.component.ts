import {Component, Input, OnInit} from '@angular/core';
import {Bild} from '../../share/bild';

@Component({
  selector: 'app-bild',
  templateUrl: './bild.component.html',
  styleUrls: ['./bild.component.css']
})
export class BildComponent implements OnInit {
 @Input() bild: Bild;
  constructor() { }

  ngOnInit() {
  }

}
