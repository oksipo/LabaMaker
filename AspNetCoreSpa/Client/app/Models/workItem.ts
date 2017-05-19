export class WorkItem {
    Id: number;
    UniversityId: number;
    UniversityName: string;
    FacultyId: number;
    FacultyName: string;
    SubjectId: number;
    SubjectName: string;
    Theme: string;
    Description: string;
    Author: {
        Id: number;
        Name: string;
        Rating: Number;
        UserPicPath: string;
    }
    CreationDate: string;
    Price: number;
    Rating: number;
    Course: number;
}