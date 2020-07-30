import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GridstackService = class GridstackService {
    constructor() {
        this._gridItems = [];
        this._grids = [];
    }
    addGrid(grid) {
        this._grids.push(grid);
    }
    removeGrid(grid) {
        this._grids.splice(this._grids.findIndex(g => g.generatedId == grid.generatedId), 1);
        this._gridItems = this._gridItems.filter(gi => gi.gridId != grid.generatedId);
    }
    attachGridItem(gridId, gridItemId) {
        this._gridItems.find(gi => gi.item.generatedId == gridItemId).gridId = gridId;
    }
    detachGridItemIfExists(gridItemId) {
        const gridItem = this._gridItems.find(gi => gi.item.generatedId == gridItemId);
        if (!!gridItem) {
            gridItem.gridId = null;
        }
    }
    getGridItems(gridId) {
        return this._gridItems.filter(gi => gi.gridId == gridId).map(g => g.item);
    }
    getOrphanGridItems() {
        return this._gridItems.filter(gi => gi.gridId == null).map(g => g.item);
    }
    addOrphanGridItem(gridItem) {
        this._gridItems.push({
            gridId: null,
            item: gridItem
        });
    }
    removeGridItem(gridItemId) {
        this._gridItems.splice(this._gridItems.findIndex(gi => gi.item.generatedId == gridItemId), 1);
    }
};
GridstackService = __decorate([
    Injectable()
], GridstackService);
export { GridstackService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZHN0YWNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGlicmlhL2dyaWRzdGFjay8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ncmlkc3RhY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVF6QjtRQVBRLGVBQVUsR0FHWixFQUFFLENBQUM7UUFFRCxXQUFNLEdBQVcsRUFBRSxDQUFDO0lBRVosQ0FBQztJQUVWLE9BQU8sQ0FBQyxJQUFVO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBVTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUFrQjtRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbEYsQ0FBQztJQUVNLHNCQUFzQixDQUFDLFVBQWtCO1FBQzVDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ1osUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sWUFBWSxDQUFDLE1BQWM7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxrQkFBa0I7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxRQUFrQjtRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsSUFBSTtZQUNaLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxjQUFjLENBQUMsVUFBa0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0NBQ0osQ0FBQTtBQWpEWSxnQkFBZ0I7SUFENUIsVUFBVSxFQUFFO0dBQ0EsZ0JBQWdCLENBaUQ1QjtTQWpEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RlbHMvZ3JpZCc7XG5pbXBvcnQgeyBHcmlkSXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kZWxzL2dyaWQtaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkc3RhY2tTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9ncmlkSXRlbXM6IHtcbiAgICAgICAgZ3JpZElkOiBzdHJpbmc7XG4gICAgICAgIGl0ZW06IEdyaWRJdGVtO1xuICAgIH1bXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfZ3JpZHM6IEdyaWRbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBhZGRHcmlkKGdyaWQ6IEdyaWQpIHtcbiAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlR3JpZChncmlkOiBHcmlkKSB7XG4gICAgICAgIHRoaXMuX2dyaWRzLnNwbGljZSh0aGlzLl9ncmlkcy5maW5kSW5kZXgoZyA9PiBnLmdlbmVyYXRlZElkID09IGdyaWQuZ2VuZXJhdGVkSWQpLCAxKTtcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zID0gdGhpcy5fZ3JpZEl0ZW1zLmZpbHRlcihnaSA9PiBnaS5ncmlkSWQgIT0gZ3JpZC5nZW5lcmF0ZWRJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dGFjaEdyaWRJdGVtKGdyaWRJZDogc3RyaW5nLCBncmlkSXRlbUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zLmZpbmQoZ2kgPT4gZ2kuaXRlbS5nZW5lcmF0ZWRJZCA9PSBncmlkSXRlbUlkKS5ncmlkSWQgPSBncmlkSWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGFjaEdyaWRJdGVtSWZFeGlzdHMoZ3JpZEl0ZW1JZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGdyaWRJdGVtID0gdGhpcy5fZ3JpZEl0ZW1zLmZpbmQoZ2kgPT4gZ2kuaXRlbS5nZW5lcmF0ZWRJZCA9PSBncmlkSXRlbUlkKTtcblxuICAgICAgICBpZiAoISFncmlkSXRlbSkge1xuICAgICAgICAgICAgZ3JpZEl0ZW0uZ3JpZElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHcmlkSXRlbXMoZ3JpZElkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyaWRJdGVtcy5maWx0ZXIoZ2kgPT4gZ2kuZ3JpZElkID09IGdyaWRJZCkubWFwKGcgPT4gZy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3JwaGFuR3JpZEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ3JpZEl0ZW1zLmZpbHRlcihnaSA9PiBnaS5ncmlkSWQgPT0gbnVsbCkubWFwKGcgPT4gZy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkT3JwaGFuR3JpZEl0ZW0oZ3JpZEl0ZW06IEdyaWRJdGVtKSB7XG4gICAgICAgIHRoaXMuX2dyaWRJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGdyaWRJZDogbnVsbCxcbiAgICAgICAgICAgIGl0ZW06IGdyaWRJdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVHcmlkSXRlbShncmlkSXRlbUlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZ3JpZEl0ZW1zLnNwbGljZSh0aGlzLl9ncmlkSXRlbXMuZmluZEluZGV4KGdpID0+IGdpLml0ZW0uZ2VuZXJhdGVkSWQgPT0gZ3JpZEl0ZW1JZCksIDEpO1xuICAgIH1cbn1cbiJdfQ==