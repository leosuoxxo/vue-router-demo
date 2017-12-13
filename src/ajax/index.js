import jquery from "jquery";
window.$ = window.jQuery = jquery;

const ajaxUrl = "";
const ajaxType = "json";

function getAjax(url) {
  return $.ajax({
    url: url,
    dataType: ajaxType,
    success: function() {},
    error: function(responseText) {
      console.log(responseText);
    }
  });
}

export const getCardAjax = getAjax(
  "https://awiclass.monoame.com/api/command.php?type=get&name=post"
);
