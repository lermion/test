import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {

    numbers: any;

    constructor(){

    }


    ngOnInit(){
        this.numbers = Array(1000).fill(0).map((x, i) => i);
    }
}