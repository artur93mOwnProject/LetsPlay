import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuListOfOptions: string[] = [
    'znajdź wydarzenie',
    'dodaj wydarzenie',
    'o mnie',
    'zaloguj się / wyloguj się',
  ];

  selectedMenuListOption: string = 'znajdź wydarzenie';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}
}
