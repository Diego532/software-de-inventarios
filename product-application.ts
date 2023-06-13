//==========================================Capa de Dominio===============================================//
class Product {
  name: string; // no depender de los tipos naturales, para eso se crean los valuer objects
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

//==========================================Capa de Application===========================================//
class ProductApplication {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  public saveProduct(name: string, price: number) {
    let product: Product = new Product(name, price);
    this.productRepository.save(product);
    console.log('Se guardo exitosamente el nuevo producto!!!');
  }
}

interface IProductRepository {
  //Este es un puerto.
  save(product: Product): void;
}

//=======================================Capa de Infraestructura========================================//
class InMemoryProductRepository implements IProductRepository {
  private products: Array<Product> = new Array<Product>();

  save(product: Product) {
    this.products.push(product);
  }
}

class ConsoleAdapter {
  private productApplication: ProductApplication;
}
