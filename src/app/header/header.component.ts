import { Component, OnInit } from '@angular/core';
import { menuListOptions } from '../model/menuListOfOption';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuListOfOptions: menuListOptions[] = [
    { name: 'o mnie', router: 'about' },
    { name: 'dodaj wydarzenie', router: 'add' },
    { name: 'kontakt', router: 'contact' },
    { name: 'zaloguj się / wyloguj się', router: 'login' },
  ];

  selectedMenuListOption: string = 'znajdź wydarzenie';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}
}
