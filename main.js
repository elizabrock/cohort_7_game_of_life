document.addEventListener('DOMContentLoaded', function(){
  var matrix = [[0, 0, 0], [1, 1, 1], [0, 0, 0]];

  var $table = document.getElementById('grid');

  // matrix => [0, 0, 0]
  //           [1, 1, 1]
  //           [0, 0, 0]

  matrix.forEach(function(row){ // first time, row => [0, 0, 0]
    // create a tr for the row
    var $tr = document.createElement('tr');
    row.forEach(function(cell){ // first time, cell => 0
      // cell goes into a new td
      var $td = document.createElement('td');
      $td.textContent = cell;
      // that td goes into a tr
      $tr.appendChild($td);
    });
    // add that tr to the table
    $table.appendChild($tr);
  });
});
