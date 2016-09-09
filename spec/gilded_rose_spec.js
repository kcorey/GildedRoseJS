describe("Gilded Rose", function() {

  // General merchandise

  it("should handle foo past SellIn and with 0 quality", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("should handle foo past SellIn", function() {
    items = [ new Item("foo", 0, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(18);
  });

  it("should handle foo with good SellIn and Quality", function() {
    items = [ new Item("foo", 50, 40) ];
    update_quality();
    expect(items[0].sell_in).toEqual(49);
    expect(items[0].quality).toEqual(39);
  });

  it("should handle foo with good SellIn and impossible Quality", function() {
    items = [ new Item("foo", 50, 60) ];
    update_quality();
    expect(items[0].sell_in).toEqual(49);
    expect(items[0].quality).toEqual(50);
  });

  // Aged Brie

  it("should handle Aged Brie past SellIn", function() {
    items = [ new Item('Aged Brie', 0, 20) ];
    update_quality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(22);
  });

  it("should handle Aged Brie before SellIn", function() {
    items = [ new Item('Aged Brie', 2, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(21);
  });

  it("should handle Aged Brie At max quality before SellIn", function() {
    items = [ new Item('Aged Brie', 50, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(49);
    expect(items[0].quality).toEqual(50);
  });

  it("should handle Aged Brie At max quality after SellIn", function() {
    items = [ new Item('Aged Brie', 0, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(50);
  });

  // Sulfuras

  it("should handle Sulfuras past SellIn", function() {
    items = [ new Item('Sulfuras', 0, 20) ];
    update_quality();
    expect(items[0].name).toEqual("Sulfuras");
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("should handle Sulfuras before SellIn", function() {
    items = [ new Item('Sulfuras', 2, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(80);
  });

  it("should handle Sulfuras At max quality before SellIn", function() {
    items = [ new Item('Sulfuras', 50, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(50);
    expect(items[0].quality).toEqual(80);
  });

  it("should handle Sulfuras At max quality after SellIn", function() {
    items = [ new Item('Sulfuras', 0, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });


  // Backstage passes

  it("should handle Backstage passes past SellIn", function() {
    items = [ new Item('Backstage passes', 0, 20) ];
    update_quality();
    expect(items[0].name).toEqual("Backstage passes");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("should handle Backstage passes 5 days before SellIn", function() {
    items = [ new Item('Backstage passes', 5, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(23);
  });

  it("should handle Backstage passes 10 days before SellIn", function() {
    items = [ new Item('Backstage passes', 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(22);
  });

  it("should handle Backstage passes At max quality before SellIn", function() {
    items = [ new Item('Backstage passes', 40, 48) ];
    update_quality();
    expect(items[0].sell_in).toEqual(39);
    expect(items[0].quality).toEqual(49);
  });

  it("should handle Backstage passes At max quality after SellIn", function() {
    items = [ new Item('Backstage passes', 0, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });


  // Conjured
  // Backstage passes

  it("should handle Conjured passes past SellIn", function() {
    items = [ new Item('Conjured', 0, 20) ];
    update_quality();
    expect(items[0].name).toEqual("Conjured");
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(16);
  });

  it("should handle Conjured 5 days before SellIn", function() {
    items = [ new Item('Conjured', 5, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(18);
  });

  it("should handle Conjured At max quality before SellIn", function() {
    items = [ new Item('Conjured', 40, 60) ];
    update_quality();
    expect(items[0].sell_in).toEqual(39);
    expect(items[0].quality).toEqual(50);
  });

});
