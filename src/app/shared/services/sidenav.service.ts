import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class SidenavService {
  private leftOpenSource = new Subject<boolean>();
  private rightOpenSource = new Subject<boolean>();

  public leftOpened$ = this.leftOpenSource.asObservable();
  public rightOpened$ = this.rightOpenSource.asObservable();

  openLeftSidenav(isOpened: boolean) {
    this.leftOpenSource.next(isOpened);
  }

  openRightSidenav(isOpened: boolean) {
    this.rightOpenSource.next(isOpened);
  }
}
