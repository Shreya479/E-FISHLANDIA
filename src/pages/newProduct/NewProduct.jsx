import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Add New Product</h1>
      <img className='form-img' src='https://s3.ap-southeast-1.amazonaws.com/easystore.website/images/campaigns/covid19/sop-3.gif' alt='spaceship' />
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label> <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label> <input type="text" placeholder="Enter the Product Name..." />
        </div>
        <div className="addProductItem">
          <label>Stock</label> <input type="text" placeholder="Enter the Stock Details..." />
        </div>
        <div className="addProductItem">
          <label>Active</label> <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">ADD CONFIRM</button>
      </form>
    </div>
  );
}
