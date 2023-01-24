import "./styles.css";

function inventoryList() {

  let inventory = [];
  
  console.log(inventory)

  return{
    add: function(newItem)
    {
      inventory.push(newItem);
    },

    remove: function(removeItem)
    {
      inventory.map(function(x) {
        if(x === removeItem)
        {
          let pos = inventory.indexOf(removeItem)
          inventory.splice(pos,1);
        }
      })
    },

    getList: function()
    {
      return inventory;
    }

    }
  }

  let list = inventoryList();



