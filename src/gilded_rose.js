function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}


// Our items repository
var items = []


//calculate the qualities of the items
function update_quality() {

  items.forEach(function(item) {

    var properties = propertiesForItem(item)

    item.sell_in += properties.sell_in_modifier

    item.quality = properties.quality_calculation(item.quality,item.sell_in,properties.quality_modifier)
    item.quality = Math.max(item.quality,properties.min_quality)
    item.quality = Math.min(item.quality,properties.max_quality)
  })
}