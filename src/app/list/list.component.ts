import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: "gr-list",
  templateUrl: "./app/list/list.component.html",
  styleUrls: ["./app/list/list.component.css"]
})
export class ListComponent implements OnInit {
  groceryList: Array<Object> = [];

  constructor(
    private router: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.groceryList.push({ name: "Apples" });
    this.groceryList.push({ name: "Bananas" });
    this.groceryList.push({ name: "Oranges" });

    this.router.params.subscribe(params => {
      console.log(params)
    });

    // this.router.paramMap.pipe(
    //   switchMap(params => {
    //     console.log(params.get('foo'))
    //     // (+) before `params.get()` turns the string into a number
    //     // this.selectedId = +params.get('id');
    //     // return this.service.getHeroes();
    //   })
    // );
  }
}
