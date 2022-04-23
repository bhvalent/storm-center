import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'Fit Aid - Citrus Medley',
    'https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0857886006000_CL_Syndigo_default_large.png',
    'Sports Recovery BCAAs + Glucosamine + CoQ10 + Omega 3s',
    2.50
  ),
  new Product(
    'p2',
    'NOCCO - Lemon Del Sol',
    'https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dw38b0c1de/hi-res/574922_web_NOCCO%20Limon%20Del%20Sol_can_Front.jpg?sw=480&sh=480&sm=fit',
    'NOCCO Limón Del Sol was inspired by the Mediterranean coast with a refreshing taste of citrus',
    1.99
  )
];

export default PRODUCTS;