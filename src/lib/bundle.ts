

export class BundleOverview {
  bundle_id: string;
  title: string;
  description?: string;
  image_url?: string;

  constructor(bundle_id: string, title: string, description?: string, image_url?: string) {
    this.bundle_id = bundle_id;
    this.title = title;
    this.description = description;
    this.image_url = image_url;
  }
}

export class Bundle {
  overview: BundleOverview;
  //code: number;
  instructions?: string;
  items: BundleItem[];

  constructor(overview: BundleOverview, items: BundleItem[]) {
    this.overview = overview;
    this.items = items;
  }
}


export class BundleItem {
  quantity: number;
  product: Product;

  constructor(product: Product, quantity: number = 1) {
    this.product = product;
    this.quantity = quantity;
  }
}


//start/end date of discount
export class Product {
  name: string;
  basePrice: number;
  price: number;
  image?: string;

  constructor(name: string, basePrice: number, price: number, image?: string) {
    this.name = name;
    this.price = price;
    this.basePrice = basePrice;
    this.image = image;
  }
}