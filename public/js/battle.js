$(".attack").click(function() {
  const attackType = $(this).attr("data-type");
  $.post("/api/attack", { attack: attackType }).then(() => location.reload());
});
