import { __decorate } from "tslib";
import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
let _sequence = 0;
let GridstackItemComponent = class GridstackItemComponent {
    constructor(elem, _renderer) {
        this.elem = elem;
        this._renderer = _renderer;
        this.generatedId = (_sequence++).toString();
    }
    ngAfterViewInit() {
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
    }
    _setAttributeIfNotUndefined(attrName, val) {
        if (!_.isNull(val) && !_.isUndefined(val)) {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, val.toString());
        }
    }
    _setAttributeIfTrue(attrName, val) {
        if (val === true || val === 'true') {
            this._renderer.setAttribute(this.elem.nativeElement, attrName, 'true');
        }
    }
};
GridstackItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { GridstackItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxpYnJpYS9ncmlkc3RhY2svIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ncmlkc3RhY2staXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUl2QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFTbEIsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFnQi9CLFlBQW1CLElBQWdCLEVBQ2YsU0FBb0I7UUFEckIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFIakMsZ0JBQVcsR0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFJbEQsQ0FBQztJQUVFLGVBQWU7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsMkJBQTJCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sMkJBQTJCLENBQUMsUUFBZ0IsRUFBRSxHQUFvQjtRQUN0RSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUVPLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsR0FBcUI7UUFDL0QsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO0lBQ0wsQ0FBQztDQUNKLENBQUE7O1lBakM0QixVQUFVO1lBQ0osU0FBUzs7QUFoQi9CO0lBQVIsS0FBSyxFQUFFO2lEQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTtpREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7cURBQStCO0FBQzlCO0lBQVIsS0FBSyxFQUFFO3NEQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTtrREFBbUI7QUFDUDtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDO3dEQUFrQztBQUNoQztJQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDO3lEQUFtQztBQUNuQztJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDO3dEQUFrQztBQUNoQztJQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDO3lEQUFtQztBQUNuQztJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDO3dEQUFtQztBQUNwQztJQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDO3NEQUFpQztBQUMxQjtJQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzREQUF1QztBQUNyRDtJQUFSLEtBQUssRUFBRTtzREFBaUM7QUFiaEMsc0JBQXNCO0lBUGxDLFNBQVMsQ0FBQztRQUNQLDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLDBGQUE4QztRQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDeEMsQ0FBQztHQUNXLHNCQUFzQixDQWlEbEM7U0FqRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdJbml0LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIFJlbmRlcmVyMixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gJy4vbW9kZWxzL2dyaWQtaXRlbSc7XG5cbmRlY2xhcmUgdmFyIF86IGFueTtcbmxldCBfc2VxdWVuY2UgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gICAgc2VsZWN0b3I6ICdkaXZbbGItZ3JpZHN0YWNrLWl0ZW1dJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ3JpZHN0YWNrLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2dyaWRzdGFjay1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkc3RhY2tJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgR3JpZEl0ZW0ge1xuICAgIEBJbnB1dCgpIHB1YmxpYyB4OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHk6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgQElucHV0KCdtYXgtd2lkdGgnKSBwdWJsaWMgbWF4V2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoJ21heC1oZWlnaHQnKSBwdWJsaWMgbWF4SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCdtaW4td2lkdGgnKSBwdWJsaWMgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoJ21pbi1oZWlnaHQnKSBwdWJsaWMgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCduby1yZXNpemUnKSBwdWJsaWMgbm9SZXNpemU6IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgQElucHV0KCduby1tb3ZlJykgcHVibGljIG5vTW92ZTogYm9vbGVhbiB8IHN0cmluZztcbiAgICBASW5wdXQoJ2F1dG8tcG9zaXRpb24nKSBwdWJsaWMgYXV0b1Bvc2l0aW9uOiBib29sZWFuIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsb2NrZWQ6IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgcHVibGljIGdlbmVyYXRlZElkOiBzdHJpbmcgPSAoX3NlcXVlbmNlKyspLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbTogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICAgKSB7IH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnZ3JpZC1zdGFjay1pdGVtJyk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLXgnLCB0aGlzLngpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy15JywgdGhpcy55KTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3Mtd2lkdGgnLCB0aGlzLndpZHRoKTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1pZCcsIHRoaXMuaWQpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdFVuZGVmaW5lZCgnZGF0YS1ncy1tYXgtd2lkdGgnLCB0aGlzLm1heFdpZHRoKTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtbWF4LWhlaWdodCcsIHRoaXMubWF4SGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoJ2RhdGEtZ3MtbWluLXdpZHRoJywgdGhpcy5taW5XaWR0aCk7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90VW5kZWZpbmVkKCdkYXRhLWdzLW1pbi1oZWlnaHQnLCB0aGlzLm1pbkhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLW5vLXJlc2l6ZScsIHRoaXMubm9SZXNpemUpO1xuICAgICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZlRydWUoJ2RhdGEtZ3Mtbm8tbW92ZScsIHRoaXMubm9Nb3ZlKTtcbiAgICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZUcnVlKCdkYXRhLWdzLWF1dG8tcG9zaXRpb24nLCB0aGlzLmF1dG9Qb3NpdGlvbik7XG4gICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmVHJ1ZSgnZGF0YS1ncy1sb2NrZWQnLCB0aGlzLmxvY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlSWZOb3RVbmRlZmluZWQoYXR0ck5hbWU6IHN0cmluZywgdmFsOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFfLmlzTnVsbCh2YWwpICYmICFfLmlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgYXR0ck5hbWUsIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEF0dHJpYnV0ZUlmVHJ1ZShhdHRyTmFtZTogc3RyaW5nLCB2YWw6IGJvb2xlYW4gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSB8fCB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBhdHRyTmFtZSwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==