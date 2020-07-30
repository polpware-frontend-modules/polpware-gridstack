import { __decorate } from "tslib";
import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
var _sequence = 0;
var GridstackItemComponent = /** @class */ (function () {
    function GridstackItemComponent(elem, _renderer) {
        this.elem = elem;
        this._renderer = _renderer;
        this.generatedId = (_sequence++).toString();
    }
    GridstackItemComponent.prototype.ngAfterViewInit = function () {
        this._renderer.addClass(this.elem.nativeElement, 'grid-stack-item');
        this._setAttributeIfNotUndefined('data-gs-x', this.x);
        this._setAttributeIfNotUndefined('data-gs-y', this.y);
        this._setAttributeIfNotUndefined('data-gs-width', this.width);
        this._setAttributeIfNotUndefined('data-gs-height', this.height);
        this._setAttributeIfNotUndefined('data-gs-id', this.id);
        this._setAttributeIfNotUndefined('data-gs-max-width', this.maxWidth);
        this._setAttributeIfNotUndefined('data-gs-max-height', this.maxHeight);
        this._setAttributeIfNotUndefined('data-gs-min-width', this.minWidth);
        this._setAttributeIfNotUndefined('data-gs-min-height', this.minHeight);
        this._setAttributeIfTrue('data-gs-no-resize', this.noResize);
        this._setAttributeIfTrue('data-gs-no-move', this.noMove);
        this._setAttributeIfTrue('data-gs-auto-position', this.autoPosition);
        this._setAttributeIfTrue('data-gs-locked', this.locked);
    };
    GridstackItemComponent.prototype._setAttributeIfNotUndefined = function (attrName, val) {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, val.toString());
        }
    };
    GridstackItemComponent.prototype._setAttributeIfTrue = function (attrName, val) {
        if (val === true || val === 'true') {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    };
    GridstackItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "x", void 0);
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "y", void 0);
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "height", void 0);
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "id", void 0);
    __decorate([
        Input('max-width')
    ], GridstackItemComponent.prototype, "maxWidth", void 0);
    __decorate([
        Input('max-height')
    ], GridstackItemComponent.prototype, "maxHeight", void 0);
    __decorate([
        Input('min-width')
    ], GridstackItemComponent.prototype, "minWidth", void 0);
    __decorate([
        Input('min-height')
    ], GridstackItemComponent.prototype, "minHeight", void 0);
    __decorate([
        Input('no-resize')
    ], GridstackItemComponent.prototype, "noResize", void 0);
    __decorate([
        Input('no-move')
    ], GridstackItemComponent.prototype, "noMove", void 0);
    __decorate([
        Input('auto-position')
    ], GridstackItemComponent.prototype, "autoPosition", void 0);
    __decorate([
        Input()
    ], GridstackItemComponent.prototype, "locked", void 0);
    GridstackItemComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'div[lb-gridstack-item]',
            template: "<div class=\"grid-stack-item-content\">\n    <ng-content></ng-content>\n</div>",
            encapsulation: ViewEncapsulation.None,
            styles: [""]
        })
    ], GridstackItemComponent);
    return GridstackItemComponent;
}());
export { GridstackItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxpYnJpYS9ncmlkc3RhY2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ncmlkc3RhY2staXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUl2QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFTbEI7SUFnQkksZ0NBQW1CLElBQWdCLEVBQ2YsU0FBb0I7UUFEckIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIakMsZ0JBQVcsR0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFJbEQsQ0FBQztJQUVFLGdEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sNERBQTJCLEdBQW5DLFVBQW9DLFFBQWdCLEVBQUUsR0FBb0I7UUFDdEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNsRjtJQUNMLENBQUM7SUFFTyxvREFBbUIsR0FBM0IsVUFBNEIsUUFBZ0IsRUFBRSxHQUFxQjtRQUMvRCxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDOztnQkFoQ3dCLFVBQVU7Z0JBQ0osU0FBUzs7SUFoQi9CO1FBQVIsS0FBSyxFQUFFO3FEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtxREFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7eURBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFOzBEQUFnQztJQUMvQjtRQUFSLEtBQUssRUFBRTtzREFBbUI7SUFDUDtRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzREQUFrQztJQUNoQztRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzZEQUFtQztJQUNuQztRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzREQUFrQztJQUNoQztRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzZEQUFtQztJQUNuQztRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzREQUFtQztJQUNwQztRQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDOzBEQUFpQztJQUMxQjtRQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDO2dFQUF1QztJQUNyRDtRQUFSLEtBQUssRUFBRTswREFBaUM7SUFiaEMsc0JBQXNCO1FBUGxDLFNBQVMsQ0FBQztZQUNQLDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLDBGQUE4QztZQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDeEMsQ0FBQztPQUNXLHNCQUFzQixDQWlEbEM7SUFBRCw2QkFBQztDQUFBLEFBakRELElBaURDO1NBakRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JpZEl0ZW0gfSBmcm9tICcuL21vZGVscy9ncmlkLWl0ZW0nO1xuXG5kZWNsYXJlIHZhciBfOiBhbnk7XG5sZXQgX3NlcXVlbmNlID0gMDtcblxuQENvbXBvbmVudCh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnZGl2W2xiLWdyaWRzdGFjay1pdGVtXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ncmlkc3RhY2staXRlbS5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZHN0YWNrSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEdyaWRJdGVtIHtcbiAgICBASW5wdXQoKSBwdWJsaWMgeDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyB5OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpZDogc3RyaW5nO1xuICAgIEBJbnB1dCgnbWF4LXdpZHRoJykgcHVibGljIG1heFdpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCdtYXgtaGVpZ2h0JykgcHVibGljIG1heEhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgnbWluLXdpZHRoJykgcHVibGljIG1pbldpZHRoOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCdtaW4taGVpZ2h0JykgcHVibGljIG1pbkhlaWdodDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgnbm8tcmVzaXplJykgcHVibGljIG5vUmVzaXplOiBib29sZWFuIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgnbm8tbW92ZScpIHB1YmxpYyBub01vdmU6IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgQElucHV0KCdhdXRvLXBvc2l0aW9uJykgcHVibGljIGF1dG9Qb3NpdGlvbjogYm9vbGVhbiB8IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgbG9ja2VkOiBib29sZWFuIHwgc3RyaW5nO1xuICAgIHB1YmxpYyBnZW5lcmF0ZWRJZDogc3RyaW5nID0gKF9zZXF1ZW5jZSsrKS50b1N0cmluZygpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICAgICkgeyB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgJ2dyaWQtc3RhY2staXRlbScpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy14JywgdGhpcy54KTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MteScsIHRoaXMueSk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLXdpZHRoJywgdGhpcy53aWR0aCk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLWhlaWdodCcsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtaWQnLCB0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtbWF4LXdpZHRoJywgdGhpcy5tYXhXaWR0aCk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1heC1oZWlnaHQnLCB0aGlzLm1heEhlaWdodCk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1pbi13aWR0aCcsIHRoaXMubWluV2lkdGgpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1taW4taGVpZ2h0JywgdGhpcy5taW5IZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1uby1yZXNpemUnLCB0aGlzLm5vUmVzaXplKTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLW5vLW1vdmUnLCB0aGlzLm5vTW92ZSk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1hdXRvLXBvc2l0aW9uJywgdGhpcy5hdXRvUG9zaXRpb24pO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZlRydWUoJ2RhdGEtZ3MtbG9ja2VkJywgdGhpcy5sb2NrZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKGF0dHJOYW1lOiBzdHJpbmcsIHZhbDogbnVtYmVyIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghXy5pc051bGwodmFsKSAmJiAhXy5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGF0dHJOYW1lLCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRBdHRyaWJ1dGVJZlRydWUoYXR0ck5hbWU6IHN0cmluZywgdmFsOiBib29sZWFuIHwgc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgYXR0ck5hbWUsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=