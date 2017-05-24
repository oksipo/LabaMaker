import { Component} from '@angular/core';

@Component({
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent 
{
    public maintitle: string = 'Про нас';

    public title1: string = 'Що ми робимо?';

    public text1_1: string = 'надаємо студентам можливість швидко і легко розбиратись з роботами.';
    public text1_2: string = 'створюємо альтернативу недосконалим методичкам і кострубатим поясненням.';
    public text1_3: string = 'даємо змогу заробляти за умови, що у вас є кілька вільних годин, знання і бажання допомогти іншим.';
    public text1_4: string = 'є ресурсом, що дозволяє ділитись досвідом, питаннями та вирішенням проблем.';
}


