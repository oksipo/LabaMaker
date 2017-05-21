import {
    Component, Input, ViewEncapsulation
} from '@angular/core';
//import { WorkItem } from '../Models/workItem'
import { WorkScreenService } from '../Services/workScreenService'
import { WorkCommentService } from "../Services/workCommentService"
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'workItem',
    templateUrl: './workItem.component.html',
    styleUrls: ['./workItem.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WorkItemComponent {
    constructor(private screenService: WorkScreenService, private commentService: WorkCommentService) { }
    @Input() Item: any;
    pictureCount: number = 1;
    images: any[] = [];
    comments: any[] = [];
    imageToShow: string;
    display: boolean= false;
    getScreens = (() =>
        this.screenService.getByWorkId(this.Item.id).subscribe(
            data => data.map(
                (x: any) => {
                    this.images.push(
                        {
                            source: x.path,
                            alt: "Зображення " + this.pictureCount,
                            title: "Зображення " + this.pictureCount
                        });
                    this.pictureCount++;
                }
            ))
    );

    getComments = (() =>
    {
        var tempcomments:any[] = [];
        this.commentService.getByWorkId(this.Item.id).subscribe(
            data => data.map((x: any) => tempcomments.push(x)));
        this.comments = tempcomments;
        var numbers = Observable.timer(30000);
        numbers.subscribe(x => this.getComments());

    })

    onImageClicked = (($event: any) => {
        this.imageToShow = this.images[$event.index].source;
        this.toggleDialog();
    }
    );

        toggleDialog= (() => {
        this.display = !this.display
    })
        

}
