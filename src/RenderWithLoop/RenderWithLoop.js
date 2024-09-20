import React, { Component } from "react";

class RenderWithLoop extends Component {
  productList = [
    //'./carbasic/products/black-car.jpg': dấu . tương ứng với folder public
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 1000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 1000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 1000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];

  renderTable = () => {
    let mangTrComponent = [];
    //Cách 1: dùng for
    // for (let index = 0; index < this.productList.length; index++) {
    //   let product = this.productList[index];
    //   //lấy ra rồi tạo ra 1 đối tượng jsx
    //   let trJSX = (
    //     <tr key={product.id}>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>{product.price}</td>
    //       <td>
    //         <img src={product.img} style={{ width: "100px" }} alt="img-car" />
    //       </td>
    //     </tr>
    //   );
    //   console.log("đây là 1 object component", trJSX);
    //   mangTrComponent.push(trJSX);

    //cách 2 dùng map:
    mangTrComponent = this.productList.map((product, index)=>{
        return (
            <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                <img src={product.img} style={{ width: "100px" }} alt="img-car" />
                </td>
            </tr>
            );
        })

    return mangTrComponent;
  };

  render() {
    return (
      <div className="container">
        {/* <img src={this.productList[0].img} alt="" /> */}
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default RenderWithLoop;
