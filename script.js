var ft_array = [],
    tt_array = [];

function GetRandom() {
  return Math.floor(Math.random() * Math.floor(100))
}

function add(html,array, input) {
     ft_array_html = document.getElementById(html);
     fArray_obj = document.getElementById(input);
    array.push(parseInt(fArray_obj.value));
    fArray_obj.value = "";
    ft_array_html.innerHTML = array.toString();
 }

function addR(html,array) {
    array_html = document.getElementById(html);
    array.push(GetRandom());
    array_html.innerHTML = array.toString();
 }

function first_task_calculate() {

    var min = ft_array[0],
        max = ft_array[0],
        sum = 0,
        max_i = 0,
        min_i = 0,
        sum_html = document.getElementById('sum'),
        min_html = document.getElementById('min'),
        max_html = document.getElementById('max');

    for (var i = 0; i < ft_array.length; i++) {
      if (min > ft_array[i]){
        min = ft_array[i];
        min_i = i;
      }
      if (max < ft_array[i]){
        max = ft_array[i];
        max_i = i;
      }
      sum+=ft_array[i];
    }

    ft_array[min_i] = max;
    ft_array[max_i] = min;
    console.log(ft_array);
    sum_html.innerHTML = sum;
    min_html.innerHTML = min;
    max_html.innerHTML = max;
 }

function third_task_calculate() {
  result_arr = tt_array;
  result = document.getElementById('tTask_result');
  result. innerHTML = "";
  for (var i = 0; i < result_arr.length; i++) {
    if (result_arr[i] % 3 == 0 && result_arr[i] % 7 == 0 )
      result.innerHTML += " foobar";
    else if (result_arr[i] % 3 == 0 )
      result.innerHTML += " foo";
    else if (result_arr[i] % 7 == 0 )
      result.innerHTML += " bar";
    else
      result.innerHTML += " "+result_arr[i];
  }
}

function four_task_calculate() {
  result = document.getElementById('fTask_result');
  fString = document.getElementById('first_string').value;
  sString = document.getElementById('second_string').value;
  maxStr = Math.max(fString.length, sString.length);
  count = 0;

  for (var i = 0; i < maxStr; i++) {
    if (fString[i] == sString[i])
      count += 1;
  }
  result.innerHTML = Math.round(count / maxStr * 100)+'%';
}
