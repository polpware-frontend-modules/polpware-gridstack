var GridstackModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './components/gridstack.component';
import { GridstackItemComponent } from './components/gridstack-item.component';
import { GridstackService } from './services/gridstack.service';
let GridstackModule = GridstackModule_1 = class GridstackModule {
    static forRoot() {
        return {
            ngModule: GridstackModule_1,
            providers: [
                GridstackService
            ]
        };
    }
};
GridstackModule = GridstackModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            GridstackComponent,
            GridstackItemComponent
        ],
        exports: [
            GridstackComponent,
            GridstackItemComponent
        ]
    })
], GridstackModule);
export { GridstackModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWJyaWEvZ3JpZHN0YWNrLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGFjay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFhaEUsSUFBYSxlQUFlLHVCQUE1QixNQUFhLGVBQWU7SUFDakIsTUFBTSxDQUFDLE9BQU87UUFDakIsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1AsZ0JBQWdCO2FBQ25CO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBVFksZUFBZTtJQVgzQixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxZQUFZO1NBQ2Y7UUFDRCxZQUFZLEVBQUU7WUFDVixrQkFBa0I7WUFDbEIsc0JBQXNCO1NBQUM7UUFDM0IsT0FBTyxFQUFFO1lBQ0wsa0JBQWtCO1lBQ2xCLHNCQUFzQjtTQUFDO0tBQzlCLENBQUM7R0FDVyxlQUFlLENBUzNCO1NBVFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3JpZHN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWRzdGFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZHN0YWNrSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkc3RhY2staXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZHN0YWNrU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JpZHN0YWNrLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgR3JpZHN0YWNrQ29tcG9uZW50LFxuICAgICAgICBHcmlkc3RhY2tJdGVtQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEdyaWRzdGFja0NvbXBvbmVudCxcbiAgICAgICAgR3JpZHN0YWNrSXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0YWNrTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHcmlkc3RhY2tNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBHcmlkc3RhY2tNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBHcmlkc3RhY2tTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19