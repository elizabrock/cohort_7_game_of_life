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
      // that td goes into a tr
      var $td = createTableCell(cell);
      $tr.appendChild($td);
      // alternative:
      // $tr.appendChild( createTableCell(cell) );
    });
    // add that tr to the table
    $table.appendChild($tr);
  });

  function createTableCell(value){
    var $td = document.createElement('td');
    // Apply alive or dead class to the td
    if(value === 1){
      $td.classList.add('alive');
    } else {
      $td.classList.add('dead');
    }
    return $td;
  }
});
