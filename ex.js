const val = {
  1: [
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 36,
      user_id: 1,
      product_name: "Nokia2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 35,
      user_id: 1,
      product_name: "Micromax2",
      status: "DELIVERED",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 34,
      user_id: 1,
      product_name: "Oppo2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 33,
      user_id: 1,
      product_name: "Vivo2",
      status: "DELIVERED",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 32,
      user_id: 1,
      product_name: "IPhone2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 6,
      user_id: 1,
      product_name: "Nokia",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 5,
      user_id: 1,
      product_name: "Micromax",
      status: "DELIVERED",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 4,
      user_id: 1,
      product_name: "Oppo",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 3,
      user_id: 1,
      product_name: "Vivo",
      status: "DELIVERED",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 2,
      user_id: 1,
      product_name: "IPhone",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 1,
      firstname: "Ram",
      lastname: "Kumar",
      email: "ram@abc.com",
      order_id: 1,
      user_id: 1,
      product_name: "IPhone",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
  ],
  2: [
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 41,
      user_id: 2,
      product_name: "Apple2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 40,
      user_id: 2,
      product_name: "Keyboard2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 39,
      user_id: 2,
      product_name: "Cannon2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 38,
      user_id: 2,
      product_name: "IPhone2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 37,
      user_id: 2,
      product_name: "Panasonic2",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 11,
      user_id: 2,
      product_name: "Apple",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 10,
      user_id: 2,
      product_name: "Keyboard",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 9,
      user_id: 2,
      product_name: "Cannon",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
    {
      id: 2,
      firstname: "Kishan",
      lastname: "Kumar",
      email: "kishan@abc.com",
      order_id: 8,
      user_id: 2,
      product_name: "IPhone",
      status: "PENDING",
      created_date: "2016-06-22T18:10:25.000Z",
    },
  ],
};

function manipulate_data(object) {
  let newdata = [];

  for (const key in object) {

    let newObj = {
      Id: object[key][0].id,
      First_name: object[key][0].firstname,
      Last_name: object[key][0].lastname,
      Orders: [],
    };
    let order = [...object[key]];
    order.forEach(element => {
      delete element.id;
      element['id'] = element.order_id
      delete element.user_id;
      delete element.email;
      delete element.firstname;
      delete element.lastname;
      delete element.order_id
    });

    newObj.Orders = order;
    newdata.push(newObj)
  }

  return newdata;
}


module.exports = manipulate_data;