
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