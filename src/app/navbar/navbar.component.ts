import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let nav: any = document.getElementById('.navigation-wrap');
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
      } else {
        nav.classList.remove('scroll-on');
      }
    };

    let navBar: any = document.querySelectorAll('.nav-link');
    let navCollapse: any = document.querySelector('.navbar-collapse.collapse');
    navBar.forEach(function (a: any) {
      a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
      });
    });
  }
}
