export default Inter(){
    interface UserDocument  {
        fname: string;
        lname: string;
        email: string;
        password: string;
        is_admin: boolean;
        cart: CartDocument;
        }
        interface CartDocument {
        date: string;
        user: UserDocument;
        products: ProductsDocument[];
      }
        interface ProductsDocument{
        image: string;
        name: string;
        desc: string;
        price: string;
        quantity: Number;
        gender: String;
        category: String;
        color: String;
        comment: String;
        cart:
      
      }
}
