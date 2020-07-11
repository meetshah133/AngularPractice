import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentData {
    loadDepartment() : string [] {
        return ['Development','Testing','Support'];
    }
}