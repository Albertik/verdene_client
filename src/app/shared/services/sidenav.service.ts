import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class SidenavService {
  private openSource = new Subject<boolean>();

  public opened$ = this.openSource.asObservable();

  openSidenav(isOpened: boolean) {
    this.openSource.next(isOpened);
  }
}
