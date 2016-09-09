// Property characteristics object so we can refer to the properties by name
function InventoryProperties(name, sell_in_modifier, quality_modifier, max_quality, min_quality, quality_calculation) {

  this.name = name
  this.sell_in_modifier = sell_in_modifier
  this.quality_modifier = quality_modifier
  this.max_quality = max_quality
  this.min_quality = min_quality
  this.quality_calculation = quality_calculation
}

// Set up the properties' characteristics
var propertiesByType = []

propertiesByType.push(new InventoryProperties("Aged Brie",-1,1,50,0,standardQuality))
propertiesByType.push(new InventoryProperties("Sulfuras",0,0,80,80,standardQuality))
propertiesByType.push(new InventoryProperties("Backstage passes",-1,1,50,0,backstagePassesQuality))
propertiesByType.push(new InventoryProperties("Conjured",-1,-2,50,0,standardQuality))
propertiesByType.push(new InventoryProperties("*",-1,-1,50,0,standardQuality))


// return the corresponding properties for an item
function propertiesForItem(item) {

  var result = 0

  // some instead of forEach, as forEach cannot be short-circuited
  propertiesByType.some(function(potentialType) {

    if ((result === 0 && potentialType.name.startsWith('*'))
      || item.name.startsWith(potentialType.name)) {
      result = potentialType
    }
  })

  return result
}


function standardQuality(currentQuality,days,qualityModifier) {

  currentQuality += qualityModifier
  if (days < 1) {

    currentQuality += qualityModifier
  }

  return currentQuality
}

// A custom quality calculator for backstagePasses.
function backstagePassesQuality(currentQuality,days,qualityModifier) {

  currentQuality += qualityModifier

  if (days < 10) {
    currentQuality += qualityModifier
  }
  if (days < 5) {
    currentQuality += qualityModifier
  }
  if (days < 1) {
    currentQuality = 0
  }

  return currentQuality
}