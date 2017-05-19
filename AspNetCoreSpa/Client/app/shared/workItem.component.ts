import {
    Component, Input, ViewEncapsulation
} from '@angular/core';
import { WorkItem } from '../Models/workItem'
import { WorkScreenService } from '../Services/workScreenService'

@Component({
    selector: 'workItem',
    templateUrl: './workItem.component.html',
    styleUrls: ['./workItem.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class WorkItemComponent {
    constructor(private screenService: WorkScreenService) { }
    @Input() Item: WorkItem;
    pictureCount: number = 1;
    images: any[] = [];
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

    onImageClicked = (($event: any) => {
        this.imageToShow = this.images[$event.index].source;
        this.toggleDialog();
    }
    );

        toggleDialog= (() => {
        this.display = !this.display
    })
        

}
