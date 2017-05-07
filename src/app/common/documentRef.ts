import {Injectable} from '@angular/core';

function _document(): any {
    // return the native window obj
    return document;
}

@Injectable()
export class DocumentRef {

    get nativeDocument(): any {
        return _document();
    }

}
