import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ruta-dinamica',
  templateUrl: './ruta-dinamica.component.html',
  styleUrls: ['./ruta-dinamica.component.css']
})
export class RutaDinamicaComponent implements OnInit {
  id: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ;
  }

}
