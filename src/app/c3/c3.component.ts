import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  src:string = "";

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        var id = params.id;
        if (id == 0) {
          this.src = "../../assets/1.mp3";
        }
        if (id == 1) {
          this.src = "../../assets/2.mp3";
        }
        if (id == 2) {
          this.src = "../../assets/3.mp3";
        }
      }
    )
  }

}
