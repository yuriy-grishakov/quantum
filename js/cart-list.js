// quantity


$(function() {
 
  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity__arrow-minus");
    var $quantityArrowPlus = $(".quantity__arrow-plus");
    var $quantityNum = $(".quantity__num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});