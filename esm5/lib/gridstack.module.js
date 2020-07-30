import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridstackComponent } from './components/gridstack.component';
import { GridstackItemComponent } from './components/gridstack-item.component';
import { GridstackService } from './services/gridstack.service';
var GridstackModule = /** @class */ (function () {
    function GridstackModule() {
    }
    GridstackModule_1 = GridstackModule;
    GridstackModule.forRoot = function () {
        return {
            ngModule: GridstackModule_1,
            providers: [
                GridstackService
            ]
        };
    };
    var GridstackModule_1;
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
    return GridstackModule;
}());
export { GridstackModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWJyaWEvZ3JpZHN0YWNrLyIsInNvdXJjZXMiOlsibGliL2dyaWRzdGFjay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWFoRTtJQUFBO0lBU0EsQ0FBQzt3QkFUWSxlQUFlO0lBQ1YsdUJBQU8sR0FBckI7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUCxnQkFBZ0I7YUFDbkI7U0FDSixDQUFDO0lBQ04sQ0FBQzs7SUFSUSxlQUFlO1FBWDNCLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQixzQkFBc0I7YUFBQztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wsa0JBQWtCO2dCQUNsQixzQkFBc0I7YUFBQztTQUM5QixDQUFDO09BQ1csZUFBZSxDQVMzQjtJQUFELHNCQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR3JpZHN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWRzdGFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZHN0YWNrSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkc3RhY2staXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZHN0YWNrU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JpZHN0YWNrLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgR3JpZHN0YWNrQ29tcG9uZW50LFxuICAgICAgICBHcmlkc3RhY2tJdGVtQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEdyaWRzdGFja0NvbXBvbmVudCxcbiAgICAgICAgR3JpZHN0YWNrSXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0YWNrTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHcmlkc3RhY2tNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBHcmlkc3RhY2tNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBHcmlkc3RhY2tTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19