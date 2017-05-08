import { Component, Input} from '@angular/core';

@Component({
    selector: "header",
    templateUrl: './header.component.html',
    styleUrls:['header.component.css']
})
export class HeaderComponent {
    @Input() UserName: string;
    @Input() Balance: number;
    @Input() Rating: number;
    @Input() UserPic: string;
}