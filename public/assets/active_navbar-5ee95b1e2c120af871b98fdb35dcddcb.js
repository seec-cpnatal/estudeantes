$(document).on("page:change",function(){var a=document.location.pathname;"/"==a&&$('.nav a:contains("Período Atual")').parent().addClass("active"),"/periods/all"==a&&$('.nav a:contains("Outros períodos")').parent().addClass("active")});