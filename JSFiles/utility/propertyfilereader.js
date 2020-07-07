"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesFileReader = void 0;
var PropertiesReader = require('properties-reader');
class PropertiesFileReader {
    // constructor(filePath: String) {
    //     this.properties = PropertiesReader(filePath)
    // }
    constructor(filePath) {
        this.properties = PropertiesReader(filePath);
    }
    propertiesFileData(keyValue) {
        var propertyValue = this.properties.get(keyValue);
        // console.log(propertyValue);
        return propertyValue.toString();
    }
}
exports.PropertiesFileReader = PropertiesFileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHlmaWxlcmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS9wcm9wZXJ0eWZpbGVyZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVwRCxNQUFhLG9CQUFvQjtJQUk3QixrQ0FBa0M7SUFDbEMsbURBQW1EO0lBQ25ELElBQUk7SUFDSixZQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLFFBQWdCO1FBQy9CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELDhCQUE4QjtRQUU5QixPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUduQyxDQUFDO0NBRUo7QUFuQkQsb0RBbUJDIn0=