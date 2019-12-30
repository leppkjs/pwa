import {Observable, of, Subject} from 'rxjs';

class MainService {
    private main: Subject<string> = new Subject<string>();

    public get main$(): Observable<string> {
        return this.main.asObservable();
    }

    public retrieve(): Observable<string> {
        const value: string = `resolve :: ${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}`;
        this.main.next(value);

        return of(value);
    }
}

const mainService = new MainService();
export default mainService;
