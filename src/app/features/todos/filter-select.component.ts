import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'filter-select',
  template: `
      <div>
        <select #selectList (change)="filterSelect.emit(selectList.value)">
            <option *ngFor="let filter of filters" value="{{filter.action}}">
                {{filter.friendly}}
            </option>
        </select>
      </div>
    `,
})
export class FilterSelectComponent{
  public filters = [
    {friendly: "All", action: 'SHOW_ALL'},
    {friendly: "Completed", action: 'SHOW_COMPLETED'},
    {friendly: "Active", action: 'SHOW_ACTIVE'}
  ];
  @Output() filterSelect: EventEmitter<string> = new EventEmitter<string>();
}
