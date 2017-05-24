import { Component } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})
export class QuestionsComponent 
{
    public maintitle: string = 'Є питання? Пиши нам!';
    public description_part1: string = 'Якщо ви не знайшли відповідь на своє питання в ';
    public description_part2: string = ', то пишіть нам! Ми з радістю надамо вам всю необхідну інформацію.';
    public insert: string = 'довідці';

    public subtitle: string = "Форма зворотнього зв'язку";

    public point1: string = 'Категорія: ';
    public point2: string = 'Тема: ';
    public point3: string = 'Ваше питання: ';

    problemsNames: SelectItem[] = [
        { label: 'Завантаження лаб', value: 1 },
        { label: 'Скачування лаб', value: 2 },
        { label: 'Проблеми з аккаунтом', value: 3 },
        { label: 'Скарга, плагіат', value: 4 },
        { label: 'Проблеми з балансом', value: 5 },
        { label: 'Інше', value: 6 }
    ];

    public selectedProblem: number = 0;
    public theme: string = "";
    public message: string = "";
}


