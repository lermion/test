import {Component, OnInit} from '@angular/core';

export interface IItem {
    name: string;
    userName: string;
    counter: number;
    age: number;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {

    items: IItem[];
    currentIndex: number;

    constructor(){

    }


    ngOnInit(){
        this.items = Array(1000).fill(0).map((x, i) => {
            return {
                name: `User ${i + 1}`,
                userName: `Username ${i + 1}`,
                counter: i + 1,
                age: Math.floor(Math.random() * (100 - 18 + 1) + 18)
            };
        });
    }
}
