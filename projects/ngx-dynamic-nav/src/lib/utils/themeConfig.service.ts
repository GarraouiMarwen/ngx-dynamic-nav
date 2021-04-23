import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {ThemeConfig} from './ThemeConfig';

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigService {
    getTheme(): Observable<ThemeConfig> {
    const config = new ThemeConfig();
    return of<ThemeConfig>(config);
    }
}
